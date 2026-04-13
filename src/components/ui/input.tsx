import { cn } from "@/lib/cn";

export function Input({
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn(
                "min-h-12 border-card-gray-btn-secondary border-b outline-none w-full py-3 text-foreground placeholder:text-muted-foreground-primary/80 focus:border-foreground transition-colors duration-300",
                className,
            )}
            {...props}
        />
    );
}
