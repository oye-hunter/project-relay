import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas-bg">
      {/* Header */}
      <header className="border-b border-canvas-border bg-canvas-base">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-canvas-text-contrast">
            Project Relay
          </h1>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-canvas-text-contrast mb-6">
            Modern Email Management,
            <span className="text-primary-solid"> Simplified</span>
          </h2>
          <p className="text-xl text-canvas-text mb-8">
            Experience a clean, intuitive email interface designed for
            productivity. Manage your communications effortlessly with our
            modern, streamlined platform.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg">Create Free Account</Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-canvas-base border border-canvas-border rounded-lg p-6">
            <div className="w-12 h-12 bg-primary-bg rounded-lg flex items-center justify-center mb-4">
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
            </div>
            <h3 className="text-xl font-semibold text-canvas-text-contrast mb-2">
              Intuitive Interface
            </h3>
            <p className="text-canvas-text">
              A clean, distraction-free design that puts your emails front and
              center, making communication effortless.
            </p>
          </div>

          <div className="bg-canvas-base border border-canvas-border rounded-lg p-6">
            <div className="w-12 h-12 bg-secondary-bg rounded-lg flex items-center justify-center mb-4">
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
            </div>
            <h3 className="text-xl font-semibold text-canvas-text-contrast mb-2">
              Secure & Private
            </h3>
            <p className="text-canvas-text">
              Your data is protected with industry-standard encryption and
              authentication protocols.
            </p>
          </div>

          <div className="bg-canvas-base border border-canvas-border rounded-lg p-6">
            <div className="w-12 h-12 bg-success-bg rounded-lg flex items-center justify-center mb-4">
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
            </div>
            <h3 className="text-xl font-semibold text-canvas-text-contrast mb-2">
              Lightning Fast
            </h3>
            <p className="text-canvas-text">
              Built with modern technologies for a responsive, seamless
              experience across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-primary-bg border border-primary-border rounded-lg p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-canvas-text-contrast mb-4">
            Ready to Transform Your Email Experience?
          </h3>
          <p className="text-canvas-text mb-6">
            Join thousands of users who have already upgraded their
            communication workflow.
          </p>
          <Link href="/register">
            <Button size="lg">Start Using Project Relay Today</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-canvas-border bg-canvas-base mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-canvas-text">
            © 2025 Project Relay. Built with Next.js, BetterAuth, and Neon.
          </p>
        </div>
      </footer>
    </div>
  );
}

