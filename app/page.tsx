import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingHeader } from "@/components/home/landing-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { HeroSection } from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas-base text-canvas-text-contrast selection:bg-primary-solid/30">
      {/* Header */}
      <LandingHeader />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-canvas-text-contrast to-canvas-text bg-clip-text text-transparent">
            Engineered for Velocity
          </h2>
          <p className="text-canvas-text max-w-2xl mx-auto text-lg">
            Every interaction is optimized for speed. No lag, no clutter, just pure productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            className="bg-canvas-bg/50 border-canvas-border hover:border-primary-solid/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] transition-all duration-500 group"
            titleClassName="text-canvas-text-contrast group-hover:text-primary-text transition-colors"
            descriptionClassName="text-canvas-text"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-primary-text group-hover:text-primary-text-contrast transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            }
            iconBgColor="bg-primary-bg/30 group-hover:bg-primary-bg-hover/50 transition-colors"
            title="Warp Speed Performance"
            description="Built on a high-performance edge network. Your emails load instantly, anywhere in the galaxy."
          />

          <FeatureCard
            className="bg-canvas-bg/50 border-canvas-border hover:border-info-solid/50 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] transition-all duration-500 group"
            titleClassName="text-canvas-text-contrast group-hover:text-info-text transition-colors"
            descriptionClassName="text-canvas-text"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-info-text group-hover:text-info-text-contrast transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            }
            iconBgColor="bg-info-bg/30 group-hover:bg-info-bg-hover/50 transition-colors"
            title="Void-Proof Security"
            description="End-to-end encryption that keeps your data secure, even in the most hostile environments."
          />

          <FeatureCard
            className="bg-canvas-bg/50 border-canvas-border hover:border-success-solid/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] transition-all duration-500 group"
            titleClassName="text-canvas-text-contrast group-hover:text-success-text transition-colors"
            descriptionClassName="text-canvas-text"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-success-text group-hover:text-success-text-contrast transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            }
            iconBgColor="bg-success-bg/30 group-hover:bg-success-bg-hover/50 transition-colors"
            title="Flow State Interface"
            description="A distraction-free command center designed to keep you in the zone. Keyboard-first navigation."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 relative z-10">
        <div className="relative overflow-hidden bg-canvas-bg border border-canvas-border rounded-2xl p-12 text-center max-w-4xl mx-auto shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary-solid/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-canvas-text-contrast tracking-tight">
              Ready to break the <span className="text-primary-text">sound barrier?</span>
            </h3>
            <p className="text-canvas-text text-xl max-w-2xl mx-auto">
              Join the elite pilots who have already upgraded their communication workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-primary-solid hover:bg-primary-solid-hover text-primary-text-contrast font-bold border-none text-lg px-8 py-6 h-auto shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300">
                  Initialize Launch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-canvas-border bg-canvas-base mt-12 relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-solid rounded-full flex items-center justify-center">
                <span className="text-primary-text-contrast font-bold">R</span>
              </div>
              <span className="text-xl font-bold text-canvas-text-contrast">Relay</span>
            </div>
            <p className="text-sm text-canvas-text">
              © 2025 Project Relay. All systems nominal.
            </p>
            <div className="flex gap-6 text-canvas-text">
              <Link href="#" className="hover:text-primary-text transition-colors">Terms</Link>
              <Link href="#" className="hover:text-primary-text transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary-text transition-colors">Status</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

