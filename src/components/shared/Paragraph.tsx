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
                "font-normal 2xl:text-[16px] lg:leading-6 tracking-normal text-muted-foreground-secondary",
                className,
            )}
        >
            {children}
        </p>
    );
}
