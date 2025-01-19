"use client";

import { LoginForm } from "@/features/auth/components/login-form";

export const SignInPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-[400px]">
        <LoginForm />
      </div>
    </div>
  );
};
