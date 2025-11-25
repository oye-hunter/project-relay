"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Inbox,
  Send,
  FileText,
  Archive,
  Trash2,
  Star,
  Settings,
  PenSquare,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Starred",
    url: "/inbox/starred",
    icon: Star,
  },
  {
    title: "Sent",
    url: "/inbox/sent",
    icon: Send,
  },
  {
    title: "Drafts",
    url: "/inbox/drafts",
    icon: FileText,
  },
  {
    title: "Archive",
    url: "/inbox/archive",
    icon: Archive,
  },
  {
    title: "Trash",
    url: "/inbox/trash",
    icon: Trash2,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="px-2 py-2">
            <Button className="w-full gap-2" size="lg">
              <PenSquare className="h-4 w-4" />
              Compose
            </Button>
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Mail</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Other</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/inbox/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
