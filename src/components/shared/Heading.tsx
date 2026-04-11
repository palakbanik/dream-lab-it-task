import { cn } from "@/lib/cn";

export default function Heading({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h2
            className={cn(
                "font-bold text-2xl sm:text-[36px] 2xl:text-[48px] lg:leading-[1.4] tracking-normal text-foreground",
                className,
            )}
        >
            {children}
        </h2>
    );
}
