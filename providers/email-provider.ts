import { AuthError } from "@auth/core/errors";
import { EmailConfig } from "@auth/core/providers";
import { NodemailerUserConfig } from "@auth/core/providers/nodemailer";

import { PATHS } from "@/constants";

export default function HttpEmail(config: NodemailerUserConfig): EmailConfig {
  if (!config.server)
    throw new AuthError("HttpEmail requires a `server` configuration");
  return {
    id: "http-email",
    type: "email",
    name: "http-email",
    server: { host: "localhost", port: 25, auth: { user: "", pass: "" } },
    from: "Auth.js <no-reply@authjs.dev>",
    maxAge: 24 * 60 * 60,
    async sendVerificationRequest(params) {
      const { identifier, url, theme, provider, token } = params;
      const { host, origin } = new URL(url);
      // 需要手动生成 Magic Link，自动处理的会出现嵌套问题
      const magicLink = `${(provider as unknown as { callbackUrl: string }).callbackUrl}?callbackUrl=${encodeURIComponent(origin + PATHS.ADMIN_HOME)}&token=${token}&email=${identifier}`;
      const absoluteUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`; // 使用绝对 URL
      const res = await fetch(absoluteUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: identifier,
          url: magicLink,
          host,
          theme,
        }),
      });
      if (!res.ok)
        throw new Error(
          "Http Email error: " + JSON.stringify(await res.json()),
        );
    },
    options: config,
  };
}
