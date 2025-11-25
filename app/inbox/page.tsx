"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Archive, Trash2, MoreVertical, Search, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signOut, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { emails } from "@/content/emails/dummy-emails"

export default function InboxPage() {
  const router = useRouter()
  const { data: session } = useSession()
  const [selectedEmails, setSelectedEmails] = useState<number[]>([])
  const [starredEmails, setStarredEmails] = useState<number[]>(
    emails.filter(e => e.isStarred).map(e => e.id)
  )

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

  const handleSignOut = async () => {
    await signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <div className="flex h-screen flex-col">
      {/* Top Header */}
      <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-xl font-semibold text-canvas-text-contrast">Project Relay</h1>
            
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-canvas-text" />
              <Input
                type="search"
                placeholder="Search mail..."
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-canvas-text">
              {session?.user?.name || session?.user?.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Inbox Header */}
      <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-canvas-text-contrast">Inbox</h2>
            <p className="text-sm text-canvas-text">
              {emails.filter(e => !e.isRead).length} unread messages
            </p>
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
          {emails.map((email) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}
