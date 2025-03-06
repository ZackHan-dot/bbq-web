import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function html(params: {
  url: string;
  host: string;
  theme: { brandColor?: string; buttonText?: string };
}) {
  const { url, host, theme } = params;
  const escapedHost = host.replace(/\./g, "&#8203;.");
  const brandColor = theme.brandColor || "#346df1";
  const buttonText = theme.buttonText || "#fff";
  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText,
  };
  return `
<body style="background: ${color.background};">
<table width="100%" border="0" cellspacing="20" cellpadding="0"
  style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
  <tr>
    <td align="center"
      style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
      Sign in to <strong>${escapedHost}</strong>
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 20px 0;">
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
              target="_blank"
              style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
              in</a></td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td align="center"
      style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
      If you did not request this email you can safely ignore it.
    </td>
  </tr>
</table>
</body>
`;
}
/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
export function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}

async function service(url: string, options = {}) {
  const defaultOptions: {
    method: "GET" | "POST";
    headers: Record<string, string>;
    body: BodyInit | null | undefined;
    query: Record<string, string>;
  } = {
    method: "GET", // 默认是 GET 请求
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: null,
    query: {}, // 查询参数对象
  };

  // 合并默认选项和用户提供的选项
  const requestOptions = { ...defaultOptions, ...options };

  // 如果有查询参数，则构建完整的 URL
  let fullUrl = url;
  if (Object.keys(requestOptions.query).length > 0) {
    const queryString = new URLSearchParams(requestOptions.query).toString();
    fullUrl = `${url}?${queryString}`;
  }

  // 如果请求方法不是 GET 或 DELETE，并且有 body，则转换为 JSON 字符串
  if (
    ["POST", "PUT", "PATCH"].includes(requestOptions.method) &&
    requestOptions.body
  ) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  try {
    const response = await fetch(fullUrl, requestOptions);

    // 检查响应状态码是否成功
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 尝试解析 JSON 响应
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error; // 抛出错误以便调用者可以处理
  }
}

// 辅助函数：生成特定类型的请求
export function fget(url: string, query = {}) {
  return service(url, { method: "GET", query });
}

export function fpost(url: string, body = {}, query = {}) {
  return service(url, { method: "POST", body, query });
}
