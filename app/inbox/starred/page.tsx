"use client"

import { Star } from "lucide-react"

export default function StarredPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-4">
        <div className="flex items-center gap-3">
          <Star className="h-6 w-6 text-warning-text-contrast fill-warning-text-contrast" />
          <div>
            <h1 className="text-2xl font-semibold text-canvas-text-contrast">Starred</h1>
            <p className="text-sm text-canvas-text">Important messages you've starred</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Star className="h-16 w-16 text-canvas-text mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-canvas-text-contrast mb-2">No starred messages</h2>
          <p className="text-canvas-text">Star important emails to find them easily later</p>
        </div>
      </div>
    </div>
  )
}
