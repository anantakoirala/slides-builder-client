"use client";
import React, { useState } from "react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Button } from "./ui/button";

type Props = {};

const NavFooter = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex flex-col gap-y-6 items-start group-data-[collapsible=icon]:hidden">
          <div className="flex flex-col items-start p-2 pb-3 gap-4 bg-background-80 rounded-xl">
            <div className="flex flex-col items-start gap-1">
              <p className="text-base font-bold">
                Get <span className="text-primary">Creative AI</span>
              </p>
              <span className="text-sm dark:text-secondary">
                Unlock all features including AI and more
              </span>
            </div>
            <div className="w-full bg-primary p-[1px] rounded-full">
              <Button
                className="w-full border-primary bg-background  hover:bg-background/90 text-primary rounded-full font-bold"
                variant={"default"}
                size={"lg"}
              >
                Upgrade
              </Button>
            </div>
          </div>
          <SidebarMenuButton
            size={"lg"}
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
              <span className="truncate font-semibold">Full name</span>
              <span className="truncate text-secondary">emai@gmail.com</span>
            </div>
          </SidebarMenuButton>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavFooter;
