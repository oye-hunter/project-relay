import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border-2 border-canvas-border-hover bg-canvas-base px-3 py-2 text-base text-canvas-text-contrast ring-offset-canvas-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-canvas-text-contrast placeholder:text-canvas-solid hover:border-canvas-solid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-solid focus-visible:ring-offset-1 focus-visible:border-primary-solid disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
