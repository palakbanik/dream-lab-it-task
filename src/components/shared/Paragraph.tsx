import { cn } from "@/lib/cn";

export default function Paragraph({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p
            className={cn(
                "font-normal text-xs md:text-sm 2xl:text-base leading-normal lg:leading-6 tracking-normal text-muted-foreground-secondary",
                className,
            )}
        >
            {children}
        </p>
    );
}
