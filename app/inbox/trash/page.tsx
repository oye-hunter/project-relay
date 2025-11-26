"use client"

import { Suspense } from "react"
import { Trash2 } from "lucide-react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function TrashPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-canvas-text">Loading trash...</div>}>
      <EmailListView 
        title="Trash" 
        filterType="trash"
        headerIcon={Trash2}
        headerIconColor="text-alert-text-contrast"
        emptyStateMessage="Trash is empty"
        emptyStateIcon={Trash2}
      />
    </Suspense>
  )
}
