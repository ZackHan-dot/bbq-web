import { PATHS, WEBSITE } from "@/constants";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";
import { NextLink } from "./next-link";
import { useSidebar } from "./ui/sidebar";

export function SidebarBanner() {
  const { open } = useSidebar();
  return (
    <NextLink
      href={PATHS.SITE_HOME}
      className={cn("flex justify-start items-center", { "px-0": !open })}
    >
      <Logo />
      <span
        className={cn("ml-2 text-base font-semibold text-primary", {
          hidden: !open,
        })}
      >
        {WEBSITE}
      </span>
    </NextLink>
  );
}
