"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
            <span className="text-black font-bold">R</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
            Project Relay
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-300 hover:text-white transition-colors font-medium hidden sm:block">
            Sign In
          </Link>
          <Link href="/register">
            <Button className="bg-white text-black hover:bg-cyan-400 hover:text-black border-none font-bold transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
