import { Suspense } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar/app-sidebar"
import { InboxHeader } from "@/components/layout/inbox-header/inbox-header"

export default function InboxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <Suspense fallback={<div className="h-16 border-b border-canvas-border-hover bg-canvas-base" />}>
          <InboxHeader />
        </Suspense>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
