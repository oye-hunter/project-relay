"use client"

import { Trash2 } from "lucide-react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function TrashPage() {
  return (
    <EmailListView 
      title="Trash" 
      filterType="trash"
      headerIcon={Trash2}
      headerIconColor="text-alert-text-contrast"
      emptyStateMessage="Trash is empty"
      emptyStateIcon={Trash2}
    />
  )
}
