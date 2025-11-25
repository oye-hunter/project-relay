import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-canvas-base p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-bg-subtle via-canvas-base to-canvas-base opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-solid to-transparent opacity-50" />
      
      {/* Logo / Home Link */}
      <div className="absolute top-8 left-8 z-10">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary-solid rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
            <span className="text-primary-on-primary font-bold">R</span>
          </div>
          <span className="text-xl font-bold text-canvas-text-contrast tracking-tight group-hover:text-primary-text transition-colors">
            Project Relay
          </span>
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
