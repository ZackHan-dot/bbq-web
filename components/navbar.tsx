import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import Image from "next/image";

import SignInButton from "./signIn";
import OLink from "./link";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Image alt="logo" height={40} src="/logo.png" width={40} />
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">BBQ WEB</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-5">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <OLink url={item.href}>{item.label}</OLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex">
          <SignInButton />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
