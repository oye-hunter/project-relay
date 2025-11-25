"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Search, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signOut, useSession } from "@/lib/auth-client"

export function InboxHeader() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { data: session } = useSession()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('q', term)
    } else {
      params.delete('q')
    }
    router.replace(`${pathname}?${params.toString()}`)
  }

  const handleSignOut = async () => {
    await signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <div className="border-b border-canvas-border-hover bg-canvas-base px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <h1 className="text-xl font-semibold text-canvas-text-contrast">Relay</h1>
          
          {/* Search */}
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-canvas-text" />
            <Input
              type="search"
              placeholder="Search mail..."
              className="pl-9"
              onChange={(e) => handleSearch(e.target.value)}
              defaultValue={searchParams.get('q')?.toString()}
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
  )
}
