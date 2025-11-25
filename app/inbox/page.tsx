"use client"

import { EmailListView } from "@/components/inbox/email-list-view"

export default function InboxPage() {
  return (
    <EmailListView 
      title="Inbox" 
      filterType="inbox"
    />
  )
}
