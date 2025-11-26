"use client"

import { Suspense } from "react"
import { Archive } from "lucide-react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function ArchivePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-canvas-text">Loading archive...</div>}>
      <EmailListView 
        title="Archive" 
        filterType="archive"
        headerIcon={Archive}
        emptyStateMessage="No archived messages"
        emptyStateIcon={Archive}
      />
    </Suspense>
  )
}
