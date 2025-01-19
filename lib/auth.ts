import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";

import HttpEmail from "@/providers/email-provider";

import { PATHS } from "@/constants";

import { prisma } from "./db";

export const { handlers, auth, signOut, signIn } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    HttpEmail({
      server: {},
    }),
  ],
  // 解决这个错误：Error: PrismaClient is not configured to run in Vercel Edge Functions or Edge Middleware.
  // 参考：https://github.com/prisma/prisma/issues/21310#issuecomment-1840428931
  session: { strategy: "jwt" },
  trustHost: true,
  pages: {
    signIn: PATHS.AUTH_SIGN_IN,
  },
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    authorized({ request, auth }) {
      // 将来用作 Next.js middleware，如果是访问后台页面，校验是否登录
      if (request.nextUrl.pathname.startsWith(PATHS.ADMIN_HOME)) {
        return !!auth?.user;
      }

      // 其它路径直接放行
      return true;
    },
  },
});
