import { cn } from "@/lib/cn";

export default function SubHeading({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h4
            className={cn(
                "font-semibold text-lg md:text-xl lg:text-2xl leading-normal lg:leading-[1.4] tracking-normal text-foreground",
                className,
            )}
        >
            {children}
        </h4>
    );
}
