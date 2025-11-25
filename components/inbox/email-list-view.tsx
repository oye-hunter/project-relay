"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Star, Archive, Trash2, MoreVertical, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { emails } from "@/content/emails/dummy-emails"

interface EmailListViewProps {
  title: string
  description?: string
  headerIcon?: LucideIcon
  headerIconColor?: string
  filterType?: "inbox" | "starred" | "sent" | "drafts" | "archive" | "trash"
  emptyStateMessage?: string
  emptyStateIcon?: LucideIcon
}

export function EmailListView({ 
  title, 
  description,
  headerIcon: HeaderIcon,
  headerIconColor,
  filterType = "inbox",
  emptyStateMessage = "No messages found",
  emptyStateIcon: EmptyStateIcon
}: EmailListViewProps) {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("q")?.toLowerCase() || ""
  
  const [selectedEmails, setSelectedEmails] = useState<number[]>([])
  const [starredEmails, setStarredEmails] = useState<number[]>(
    emails.filter(e => e.isStarred).map(e => e.id)
  )

  const filteredEmails = emails.filter(email => {
    // 1. Apply View Filter
    if (filterType === "starred" && !starredEmails.includes(email.id)) return false
    
    // For other types, we currently don't have data, so we'll return empty
    // In a real app, you'd check email.folder === filterType
    if (["sent", "drafts", "archive", "trash"].includes(filterType)) return false

    // 2. Apply Search Filter
    if (searchQuery && 
        !email.subject.toLowerCase().includes(searchQuery) && 
        !email.sender.toLowerCase().includes(searchQuery) && 
        !email.preview.toLowerCase().includes(searchQuery)) {
      return false
    }
    return true
  })

  const toggleEmailSelection = (id: number) => {
    setSelectedEmails(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    )
  }

  const toggleStar = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setStarredEmails(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {HeaderIcon && (
              <HeaderIcon className={`h-6 w-6 ${headerIconColor || "text-canvas-text-contrast"}`} />
            )}
            <div>
              <h2 className="text-2xl font-semibold text-canvas-text-contrast">{title}</h2>
              <p className="text-sm text-canvas-text">
                {description || `${filteredEmails.filter(e => !e.isRead).length} unread messages`}
              </p>
            </div>
          </div>
          
          {selectedEmails.length > 0 && (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Archive className="h-4 w-4 mr-2" />
                Archive ({selectedEmails.length})
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Email List */}
      <div className="flex-1 overflow-auto">
        <div className="divide-y divide-canvas-border">
          {filteredEmails.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              {EmptyStateIcon && (
                <EmptyStateIcon className="h-16 w-16 text-canvas-text mx-auto mb-4" />
              )}
              <h2 className="text-xl font-semibold text-canvas-text-contrast mb-2">
                {searchQuery ? `No messages matching "${searchQuery}"` : emptyStateMessage}
              </h2>
              <p className="text-canvas-text">
                {searchQuery ? "Try a different search term" : "Messages will appear here"}
              </p>
            </div>
          ) : (
            filteredEmails.map((email) => (
            <Link
              key={email.id}
              href={`/inbox/${email.id}`}
              className={`
                flex items-start gap-4 px-6 py-4 cursor-pointer transition-colors
                hover:bg-canvas-bg-hover
                ${selectedEmails.includes(email.id) ? 'bg-canvas-bg-active' : ''}
                ${!email.isRead ? 'bg-canvas-bg/50' : ''}
              `}
              onClick={(e) => {
                // Allow checkbox and star clicks to work
                if ((e.target as HTMLElement).closest('input, button')) {
                  e.preventDefault()
                }
              }}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={selectedEmails.includes(email.id)}
                onChange={() => toggleEmailSelection(email.id)}
                className="mt-1 h-4 w-4 rounded border-canvas-border-hover"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Star */}
              <button
                onClick={(e) => toggleStar(email.id, e)}
                className="mt-1 transition-colors hover:text-warning-text-contrast"
              >
                <Star
                  className={`h-4 w-4 ${
                    starredEmails.includes(email.id)
                      ? 'fill-warning-text-contrast text-warning-text-contrast'
                      : 'text-canvas-text'
                  }`}
                />
              </button>

              {/* Email Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`font-medium truncate ${
                      !email.isRead ? 'text-canvas-text-contrast' : 'text-canvas-text'
                    }`}>
                      {email.sender}
                    </span>
                    <span className="text-xs text-canvas-text truncate">
                      {email.email}
                    </span>
                  </div>
                  <span className="text-xs text-canvas-text whitespace-nowrap">
                    {email.timestamp}
                  </span>
                </div>

                <div className={`text-sm mb-1 ${
                  !email.isRead ? 'font-medium text-canvas-text-contrast' : 'text-canvas-text'
                }`}>
                  {email.subject}
                </div>

                <div className="text-sm text-canvas-text line-clamp-1">
                  {email.preview}
                </div>
              </div>

              {/* Actions */}
              <button className="mt-1 p-1 rounded hover:bg-canvas-bg-active transition-colors">
                <MoreVertical className="h-4 w-4 text-canvas-text" />
              </button>
            </Link>
          )))}
        </div>
      </div>
    </div>
  )
}
