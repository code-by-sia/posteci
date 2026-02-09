import React from "react";
import { Button } from "@/components/ui/button";
import {
  FolderClosedIcon,
  FolderOpenIcon,
  Mailbox,
  PlusIcon,
} from "lucide-react";

import { SearchForm } from "@/components/search-form";
import { HttpMethodBadge } from "@/components/http-method-badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Security API",
      items: [
        {
          title: "login",
          method: "POST",
          url: "/users/login",
        },
        {
          title: "register",
          method: "POST",
          url: "/users/register",
        },
        {
          title: "logout",
          method: "DELETE",
          url: "/users/logout",
        },
      ],
    },
    {
      title: "Chat",
      items: [
        {
          title: "Chat status",
          method: "GET",
          url: "/chat/{{id}}/status",
        },
        {
          title: "Start a chat",
          url: "/conversations/",
          method: "POST",
        },
        {
          title: "Join a chat",
          url: "/conversations/:id/join",
          method: "PUT",
        },
        {
          title: "Leave a chat",
          url: "/conversations/:id/leave",
          method: "DELETE",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Mailbox className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Posteçî</span>
                  <span className="">v2.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <div>
            <Button variant="ghost">🗄 Load</Button>
            <Button variant="ghost">🗃️ Save</Button>
            <Button variant="ghost">🧰 Setting</Button>
          </div>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="cursor-pointer">
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <FolderClosedIcon className="group-data-[state=open]/collapsible:hidden" />
                      <FolderOpenIcon className="group-data-[state=closed]/collapsible:hidden" />
                      {item.title}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton isActive={item.isActive}>
                              <div className="min-w-16">
                                <HttpMethodBadge value={item.method} />
                              </div>
                              <span className="font-mono">{item.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
