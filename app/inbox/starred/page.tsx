"use client"

import { Suspense } from "react"
import { Star } from "lucide-react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function StarredPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-canvas-text">Loading starred messages...</div>}>
      <EmailListView 
        title="Starred" 
        filterType="starred"
        headerIcon={Star}
        headerIconColor="text-warning-text-contrast fill-warning-text-contrast"
        emptyStateMessage="No starred messages"
        emptyStateIcon={Star}
      />
    </Suspense>
  )
}
