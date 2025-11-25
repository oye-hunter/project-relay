import { cn } from "@/lib/utils";

interface AlertProps {
  variant?: "error" | "success" | "warning" | "info";
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  error: "bg-alert-bg border-alert-border text-alert-text",
  success: "bg-success-bg border-success-border text-success-text",
  warning: "bg-warning-bg border-warning-border text-warning-text",
  info: "bg-info-bg border-info-border text-info-text",
};

export function Alert({ variant = "error", children, className }: AlertProps) {
  return (
    <div
      className={cn(
        "border px-4 py-3 rounded-md text-sm",
        variantStyles[variant],
        className
      )}
      role="alert"
    >
      {children}
    </div>
  );
}
