import { cn } from "@/lib/cn";
import * as React from "react";

export function Textarea({
    className,
    ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={cn(
                "w-full min-h-[120px] resize-none rounded-xl bg-white/5 border border-border/60 px-4 py-3 text-sm text-foreground",
                "placeholder:text-muted-foreground-primary/80",
                "focus:outline-none focus:ring-2 focus:ring-accent-aqua/30 focus:border-accent-aqua/40",
                className,
            )}
            {...props}
        />
    );
}
