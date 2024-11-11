"use client";
import { Button } from "@nextui-org/button";

import { SignIn } from "./auth-components";

export const SignInButton = () => {
  return <Button onClick={() => SignIn()}>登录</Button>;
};
