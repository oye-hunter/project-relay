"use client"

import { Suspense } from "react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function InboxPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-canvas-text">Loading inbox...</div>}>
      <EmailListView 
        title="Inbox" 
        filterType="inbox"
      />
    </Suspense>
  )
}
