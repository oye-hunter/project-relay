import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header/header";
import { FeatureCard } from "@/components/ui/feature-card";
import { HeroSection } from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas-bg">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-primary-solid"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            }
            iconBgColor="bg-primary-bg"
            title="Intuitive Interface"
            description="A clean, distraction-free design that puts your emails front and center, making communication effortless."
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-secondary-solid"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            }
            iconBgColor="bg-secondary-bg"
            title="Secure & Private"
            description="Your data is protected with industry-standard encryption and authentication protocols."
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-success-solid"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            }
            iconBgColor="bg-success-bg"
            title="Lightning Fast"
            description="Built with modern technologies for a responsive, seamless experience across all devices."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-primary-bg border border-primary-border-hover rounded-lg p-12 text-center max-w-3xl mx-auto shadow-md">
          <h3 className="text-3xl font-bold text-canvas-text-contrast mb-4">
            Ready to Transform Your Email Experience?
          </h3>
          <p className="text-canvas-text mb-6">
            Join thousands of users who have already upgraded their
            communication workflow.
          </p>
          <Link href="/register">
            <Button size="lg">Start Using Relay Today</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-canvas-border-hover bg-canvas-base mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-canvas-text">
            © 2025 Relay. Built with Next.js, BetterAuth, and Neon.
          </p>
        </div>
      </footer>
    </div>
  );
}

