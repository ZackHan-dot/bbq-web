"use client";

import * as React from "react";

import { Monitor, ReceiptText } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { NavUser } from "@/components/nav-user";
import { SidebarBanner } from "@/components/sidebar-banner";

import { PATHS, PATHS_MAP } from "@/constants";

import { NavProjects } from "./nav-projects";

const data = {
  user: {
    name: "hanzongyuan",
    email: "test@example.com",
    avatar: "/avatar.png",
  },
  projects: [
    {
      name: PATHS_MAP[PATHS.ADMIN_HOME],
      url: PATHS.ADMIN_HOME,
      icon: Monitor,
    },
    {
      name: PATHS_MAP[PATHS.ADMIN_CARD],
      url: PATHS.ADMIN_CARD,
      icon: ReceiptText,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarBanner />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
