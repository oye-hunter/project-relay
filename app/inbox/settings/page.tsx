"use client"

import { Settings } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-4">
        <div className="flex items-center gap-3">
          <Settings className="h-6 w-6 text-canvas-text-contrast" />
          <div>
            <h1 className="text-2xl font-semibold text-canvas-text-contrast">Settings</h1>
            <p className="text-sm text-canvas-text">Manage your email preferences</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto bg-canvas-bg p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-canvas-text-contrast mb-4">
              General Settings
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Display Name</Label>
                <Input id="name" placeholder="Your name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="signature">Email Signature</Label>
                <textarea
                  id="signature"
                  rows={4}
                  className="w-full px-3 py-2 mt-1 rounded-md border-2 border-canvas-border bg-canvas-base text-canvas-text-contrast placeholder:text-canvas-text/50 focus:border-primary-border focus:outline-none"
                  placeholder="Your email signature..."
                />
              </div>
              <Button>Save Changes</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-canvas-text-contrast mb-4">
              Notifications
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input type="checkbox" id="desktop" className="h-4 w-4" />
                <Label htmlFor="desktop" className="cursor-pointer">
                  Desktop notifications for new emails
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="sound" className="h-4 w-4" />
                <Label htmlFor="sound" className="cursor-pointer">
                  Play sound for new emails
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="important" className="h-4 w-4" defaultChecked />
                <Label htmlFor="important" className="cursor-pointer">
                  Only notify for important emails
                </Label>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-canvas-text-contrast mb-4">
              Display
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input type="checkbox" id="preview" className="h-4 w-4" defaultChecked />
                <Label htmlFor="preview" className="cursor-pointer">
                  Show email preview text
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="images" className="h-4 w-4" />
                <Label htmlFor="images" className="cursor-pointer">
                  Always show images in emails
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="density" className="h-4 w-4" defaultChecked />
                <Label htmlFor="density" className="cursor-pointer">
                  Use compact density
                </Label>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
