"use client"

import { Trash2 } from "lucide-react"

export default function TrashPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-4">
        <div className="flex items-center gap-3">
          <Trash2 className="h-6 w-6 text-alert-text-contrast" />
          <div>
            <h1 className="text-2xl font-semibold text-canvas-text-contrast">Trash</h1>
            <p className="text-sm text-canvas-text">Messages in trash will be deleted after 30 days</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Trash2 className="h-16 w-16 text-canvas-text mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-canvas-text-contrast mb-2">Trash is empty</h2>
          <p className="text-canvas-text">Deleted messages will appear here</p>
        </div>
      </div>
    </div>
  )
}
