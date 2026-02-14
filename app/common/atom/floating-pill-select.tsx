import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FloatingPillSelectProps {
    label: string;
    defaultValue?: string;
    className?: string;
    children: React.ReactNode;
}

export function FloatingPillSelect({
    label,
    defaultValue,
    className,
    children,
}: FloatingPillSelectProps) {
    return (
        <div className={cn("relative max-w-[180px]", className)}>
            {/* Floating label */}
            <span className="absolute top-3 left-5 text-xs text-gray-400 pointer-events-none z-10 font-gilroy-medium">
                {label}
            </span>

            {/* Native select */}
            <div className="relative">
                <select
                    defaultValue={defaultValue}
                    className={cn(
                        `
            w-full h-16
            rounded-full
            bg-white
            pl-5 pr-11
            pt-7
            text-sm
            font-gilroy-semibold
            outline-none
            border-none
            appearance-none
            cursor-pointer
          `
                    )}
                >
                    {children}
                </select>

                {/* Custom arrow */}
                <span
                    className="
            pointer-events-none
            absolute inset-y-0 right-4
            flex items-center
            text-gray-500
          "
                >
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </span>
            </div>
        </div>
    );
}
