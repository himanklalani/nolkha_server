import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "accent";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  withTrailingIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, withTrailingIcon = false, children, ...props }, ref) => {
    
    // Base styles incorporating "Magnetic Hover Physics" and "Island Pill" shapes
    const baseStyles = "relative overflow-hidden group inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
    
    const variants = {
      default: "bg-primary text-white hover:bg-primary-light hover:shadow-[0_8px_30px_rgba(37,99,235,0.2)]",
      accent: "bg-accent text-white hover:opacity-90 hover:shadow-[0_8px_30px_rgba(217,119,6,0.3)]",
      outline: "border border-border/80 bg-surface/50 backdrop-blur-sm hover:bg-surface text-secondary hover:shadow-sm",
      ghost: "hover:bg-black/5 text-secondary",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-10 px-4",
      lg: "h-14 pl-8 pr-3 text-base", // Asymmetric padding to accommodate the inner island icon
      icon: "h-12 w-12",
    };

    const hasIslandIcon = withTrailingIcon && (variant === "default" || variant === "accent");

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        <span className={cn("relative z-10 inline-flex items-center", hasIslandIcon && "mr-4")}>
          {children}
        </span>
        
        {/* Button-in-Button Trailing Icon Architecture with Click Ripple Fill */}
        {hasIslandIcon && (
          <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
            {/* The Expanding Circle Fill */}
            <div className="absolute inset-0 rounded-full bg-white/20 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:bg-white/30 group-active:scale-[25] group-active:bg-white/40" />
            
            {/* The Arrow */}
            <ArrowUpRight className="relative z-10 w-4 h-4 text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-active:translate-x-12 group-active:-translate-y-12 group-active:opacity-0" strokeWidth={2.5} />
            
            {/* Secondary Arrow that enters on click (Optional Awwwards touch) */}
            <ArrowUpRight className="absolute z-10 w-4 h-4 text-white opacity-0 -translate-x-12 translate-y-12 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-active:translate-x-0 group-active:translate-y-0 group-active:opacity-100" strokeWidth={2.5} />
          </div>
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
