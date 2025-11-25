"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth-client";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
    router.refresh();
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-canvas-bg">
        <div className="text-canvas-text">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-canvas-bg">
      <header className="border-b border-canvas-border bg-canvas-base">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-canvas-text-contrast">
            Project Relay
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-canvas-text">
              {session.user?.name || session.user?.email}
            </span>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="bg-canvas-base border border-canvas-border rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to Your Dashboard
          </h2>
          <p className="text-canvas-text mb-6">
            You have successfully logged in to Project Relay. This is your
            protected dashboard area.
          </p>
          <div className="bg-success-bg border border-success-border rounded-md p-4">
            <p className="text-success-text font-medium">
              ✓ Authentication is working correctly!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
