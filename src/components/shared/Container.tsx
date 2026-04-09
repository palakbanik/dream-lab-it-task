import { cn } from "@/lib/cn";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className }: ContainerProps) {
    return (
        <div
            className={cn(
                "w-full max-w-340 mx-auto px-4 sm:px-10 md:px-12 2xl:px-0",
                className,
            )}
        >
            {children}
        </div>
    );
}
