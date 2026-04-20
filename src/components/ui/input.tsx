import { cn } from "@/lib/cn";

export function Input({
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn(
                "md:min-h-12 border-card-gray-btn-secondary border-b outline-none text-xs sm:text-sm lg:text-base w-full py-2 md:py-3 text-foreground placeholder:text-muted-foreground-primary/80 focus:border-foreground transition-colors duration-300",
                className,
            )}
            {...props}
        />
    );
}
