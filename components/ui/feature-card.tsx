import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  iconBgColor = "bg-primary-bg",
  className,
  titleClassName,
  descriptionClassName,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-canvas-base border border-canvas-border-hover rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          iconBgColor
        )}
      >
        {icon}
      </div>
      <h3 className={cn("text-xl font-semibold text-canvas-text-contrast mb-2", titleClassName)}>
        {title}
      </h3>
      <p className={cn("text-canvas-text", descriptionClassName)}>{description}</p>
    </div>
  );
}
