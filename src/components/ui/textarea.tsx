import { cn } from "@/lib/cn";
import * as React from "react";

export function Textarea({
    className,
    ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            rows={1}
            className={cn(
                "w-full max-h-12 resize-none border-card-gray-btn-secondary border-b text-xs sm:text-sm lg:text-base outline-none py-2 md:py-3 text-foreground placeholder:text-muted-foreground-primary/80 focus:border-foreground transition-colors duration-300 overflow-hidden",
                className,
            )}
            {...props}
        />
    );
}
