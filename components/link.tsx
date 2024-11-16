"use client";
import clsx from "clsx";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import React from "react";
import { usePathname } from "next/navigation";

interface OLinkProps {
  url: string;
  children: React.ReactNode;
}

export default function OLink({ url, children }: OLinkProps) {
  const pathname = usePathname();
  const active = pathname === url;

  return (
    <NextLink
      className={clsx(
        linkStyles({ color: "foreground", size: "sm" }),
        "data-[active=true]:text-primary data-[active=true]:font-medium",
        active ? "font-bold" : "",
        "hover:font-bold",
      )}
      color="foreground"
      href={url}
    >
      {children}
    </NextLink>
  );
}
