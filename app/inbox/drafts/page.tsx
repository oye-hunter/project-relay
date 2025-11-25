"use client"

import { FileText } from "lucide-react"

export default function DraftsPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-4">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-canvas-text-contrast" />
          <div>
            <h1 className="text-2xl font-semibold text-canvas-text-contrast">Drafts</h1>
            <p className="text-sm text-canvas-text">Messages you haven't sent yet</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <FileText className="h-16 w-16 text-canvas-text mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-canvas-text-contrast mb-2">No drafts</h2>
          <p className="text-canvas-text">Start composing to create a draft</p>
        </div>
      </div>
    </div>
  )
}
