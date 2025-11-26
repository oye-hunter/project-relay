"use client"

import { Suspense } from "react"
import { FileText } from "lucide-react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function DraftsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-canvas-text">Loading drafts...</div>}>
      <EmailListView 
        title="Drafts" 
        filterType="drafts"
        headerIcon={FileText}
        emptyStateMessage="No drafts"
        emptyStateIcon={FileText}
      />
    </Suspense>
  )
}
