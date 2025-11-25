"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hyperspeed from "@/components/Hyperspeed/Hyperspeed";
import { hyperspeedPresets } from "@/components/Hyperspeed/HyperSpeedPresets";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-canvas-base">
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={hyperspeedPresets.one} />
      </div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-canvas-base/60 via-transparent to-canvas-base/80 z-0 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-canvas-text-contrast tracking-tight drop-shadow-2xl">
            Experience the <span className="text-primary-text drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Speed of Thought</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-canvas-text-contrast/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Relay isn't just an email client. It's a flow state engine. 
            Blazing fast, intuitively designed, and built for those who move at the speed of light.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/register">
              <Button size="lg" className="bg-primary-solid hover:bg-primary-solid-hover text-primary-text-contrast font-bold border-none text-lg px-8 py-6 h-auto shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all duration-300">
                Get Started Free
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="text-canvas-text-contrast border-canvas-text-contrast/30 hover:bg-canvas-text-contrast/10 backdrop-blur-sm text-lg px-8 py-6 h-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
