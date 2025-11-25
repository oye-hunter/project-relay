"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary-solid rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
            <span className="text-primary-on-primary font-bold">R</span>
          </div>
          <span className="text-xl font-bold text-canvas-text-contrast tracking-tight group-hover:text-primary-text transition-colors">
            Project Relay
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-canvas-text hover:text-canvas-text-contrast transition-colors font-medium hidden sm:block">
            Sign In
          </Link>
          <Link href="/register">
            <Button className="bg-canvas-text-contrast text-canvas-base hover:bg-primary-solid hover:text-primary-on-primary border-none font-bold transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
