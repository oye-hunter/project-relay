"use client"

import { Send } from "lucide-react"
import { EmailListView } from "@/components/inbox/email-list-view"

export default function SentPage() {
  return (
    <EmailListView 
      title="Sent" 
      filterType="sent"
      headerIcon={Send}
      emptyStateMessage="No sent messages"
      emptyStateIcon={Send}
    />
  )
}
