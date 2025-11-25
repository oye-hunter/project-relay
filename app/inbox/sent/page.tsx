"use client"

import { Send } from "lucide-react"

export default function SentPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-4">
        <div className="flex items-center gap-3">
          <Send className="h-6 w-6 text-canvas-text-contrast" />
          <div>
            <h1 className="text-2xl font-semibold text-canvas-text-contrast">Sent</h1>
            <p className="text-sm text-canvas-text">Messages you've sent</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Send className="h-16 w-16 text-canvas-text mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-canvas-text-contrast mb-2">No sent messages</h2>
          <p className="text-canvas-text">Emails you send will appear here</p>
        </div>
      </div>
    </div>
  )
}
