"use client"

import { FileText } from "lucide-react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function DraftsPage() {
  return (
    <EmailListView 
      title="Drafts" 
      filterType="drafts"
      headerIcon={FileText}
      emptyStateMessage="No drafts"
      emptyStateIcon={FileText}
    />
  )
}
