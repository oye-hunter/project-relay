"use client"

import { Suspense } from "react"
import { Send } from "lucide-react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function SentPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-canvas-text">Loading sent messages...</div>}>
      <EmailListView 
        title="Sent" 
        filterType="sent"
        headerIcon={Send}
        emptyStateMessage="No sent messages"
        emptyStateIcon={Send}
      />
    </Suspense>
  )
}
