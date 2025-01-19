"use client";

import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Logo } from "@/components/logo";

import { PATHS, WEBSITE } from "@/constants";
import { cn } from "@/lib/utils";

import { signInWithEmail } from "../actions/sign-in";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleBackHome = () => {
    router.push(PATHS.SITE_HOME);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmail({
        email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md">
                <Logo className="size-12" />
              </div>
              <span className="sr-only">{WEBSITE}</span>
            </a>
            <h1 className="text-xl font-bold">有朋自远方来，不亦乐乎</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              登录
            </Button>
          </div>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              或者
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-1">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleBackHome}
            >
              返回首页
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
