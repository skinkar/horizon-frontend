import * as React from "react";
import { cn } from "@/lib/utils";

interface FloatingPillInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const FloatingPillInput = React.forwardRef<
    HTMLInputElement,
    FloatingPillInputProps
>(({ label, className, ...props }, ref) => {
    return (
        <div className="relative w-full">
            <span className="absolute top-3 left-7 text-xs text-gray-400 pointer-events-none font-gilroy-medium">
                {label}
            </span>

            <input
                ref={ref}
                className={cn(
                    `
          w-full h-16 rounded-full
          px-7 pt-6
          text-sm
          outline-none
          focus:border-gray-300
          bg-white
          font-gilroy-medium
        `,
                    className
                )}
                {...props}
            />
        </div>
    );
});

FloatingPillInput.displayName = "FloatingPillInput";
