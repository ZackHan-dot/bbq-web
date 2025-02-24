import * as React from "react";

import Link from "next/link";

import { BEI_AN_LINK, BEI_AN_NUMBER, NICKNAME, SLOGAN } from "@/constants";

import { Wrapper } from "./wrapper";

export const Footer = () => {
  return (
    <footer className="px-6 py-6">
      <Wrapper className="flex flex-col items-center justify-center space-y-1 pt-12 text-sm text-muted-foreground md:flex-row md:space-x-4 md:space-y-0">
        <Link
          target="_blank"
          aria-label={BEI_AN_NUMBER}
          href={BEI_AN_LINK}
          className="order-1 flex items-center transition-colors hover:font-semibold hover:text-primary md:order-2"
        >
          {BEI_AN_NUMBER}
        </Link>
        <div className="order-3">
          &copy; {new Date().getFullYear()} {NICKNAME}
          &nbsp;&nbsp;·&nbsp;&nbsp;
          {SLOGAN}
        </div>
      </Wrapper>
    </footer>
  );
};
