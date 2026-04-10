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
                "font-semibold 2xl:text-[24px] lg:leading-[1.4] tracking-normal text-foreground",
                className,
            )}
        >
            {children}
        </h4>
    );
}
