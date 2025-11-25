"use client"

import { Star } from "lucide-react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function StarredPage() {
  return (
    <EmailListView 
      title="Starred" 
      filterType="starred"
      headerIcon={Star}
      headerIconColor="text-warning-text-contrast fill-warning-text-contrast"
      emptyStateMessage="No starred messages"
      emptyStateIcon={Star}
    />
  )
}
