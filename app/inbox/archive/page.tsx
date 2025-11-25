"use client"

import { Archive } from "lucide-react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function ArchivePage() {
  return (
    <EmailListView 
      title="Archive" 
      filterType="archive"
      headerIcon={Archive}
      emptyStateMessage="No archived messages"
      emptyStateIcon={Archive}
    />
  )
}
