"use client"

import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, Star, Archive, Trash2, Reply, Forward, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { emails } from "@/content/emails/dummy-emails"

export default function EmailDetailPage() {
  const router = useRouter()
  const params = useParams()
  const email = emails.find(e => e.id === parseInt(params.id as string))

  if (!email) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-canvas-text-contrast mb-2">Email not found</h2>
          <Button onClick={() => router.push('/inbox')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Inbox
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => router.push('/inbox')}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-xl font-semibold text-canvas-text-contrast">
              {email.subject}
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Archive className="h-4 w-4 mr-2" />
              Archive
            </Button>
            <Button variant="outline" size="sm">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
            <Button variant="ghost" size="sm">
              <Star className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Email Content */}
      <div className="flex-1 overflow-auto bg-canvas-bg">
        <div className="max-w-4xl mx-auto p-6">
          <Card className="p-6">
            {/* Email Header */}
            <div className="border-b border-canvas-border pb-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="h-12 w-12 rounded-full bg-primary-bg flex items-center justify-center text-primary-text-contrast font-semibold">
                    {email.sender.charAt(0)}
                  </div>
                  
                  {/* Sender Info */}
                  <div>
                    <h2 className="text-lg font-semibold text-canvas-text-contrast">
                      {email.sender}
                    </h2>
                    <p className="text-sm text-canvas-text">{email.email}</p>
                    <p className="text-xs text-canvas-text mt-1">
                      To: me
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-canvas-text">{email.date}</p>
                </div>
              </div>
            </div>

            {/* Email Body */}
            <div className="prose prose-sm max-w-none">
              <div className="text-canvas-text-contrast whitespace-pre-wrap">
                {email.body}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-8 pt-6 border-t border-canvas-border">
              <Button>
                <Reply className="h-4 w-4 mr-2" />
                Reply
              </Button>
              <Button variant="outline">
                <Forward className="h-4 w-4 mr-2" />
                Forward
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
