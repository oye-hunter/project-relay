import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/inbox/app-sidebar"

export default function InboxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </SidebarProvider>
  )
}
