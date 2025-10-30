import { cn } from "@/lib/utils";
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          "bg-primary px-4 py-3 text-white rounded-full hover:bg-primary/90 transition text-sm md:text-base",
          className
        )}
        disabled={disabled}
        type={type}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
