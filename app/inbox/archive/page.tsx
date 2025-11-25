"use client"

import { Archive } from "lucide-react"

export default function ArchivePage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-4">
        <div className="flex items-center gap-3">
          <Archive className="h-6 w-6 text-canvas-text-contrast" />
          <div>
            <h1 className="text-2xl font-semibold text-canvas-text-contrast">Archive</h1>
            <p className="text-sm text-canvas-text">Archived messages</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Archive className="h-16 w-16 text-canvas-text mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-canvas-text-contrast mb-2">No archived messages</h2>
          <p className="text-canvas-text">Archive emails to keep your inbox clean</p>
        </div>
      </div>
    </div>
  )
}
