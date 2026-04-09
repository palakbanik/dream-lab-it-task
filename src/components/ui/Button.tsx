import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type ButtonVariant = "default" | "black" | "white";
type IconBG = "white" | "black";
type ButtonProps = {
    children: ReactNode;
    icon: ReactNode;
    variant?: ButtonVariant;
    className?: string;
    iconClassName?: IconBG;
};

const variantClasses: Record<ButtonVariant, string> = {
    default: "bg-accent-pink text-foreground",
    black: "bg-background text-foreground",
    white: "bg-foreground text-background",
};

const iconBGClasses: Record<IconBG, string> = {
    white: "bg-foreground text-custom-black",
    black: "bg-custom-black text-foreground",
};

export default function Button({
    children,
    icon,
    variant = "default",
    className,
    iconClassName = "black",
}: ButtonProps) {
    return (
        <button
            type="button"
            className={cn(
                "flex items-center gap-2.5 px-4 sm:px-6.25 lg:px-4 2xl:px-6.25 py-1.5 sm:py-2.5 lg:py-1.5 2xl:py-2.5 rounded-full font-semibold text-xs sm:text-base lg:text-sm 2xl:text-base leading-4 cursor-pointer group border-2 border-transparent hover:border-2 hover:border-accent-pink hover:text-accent-pink hover:bg-transparent transition-colors duration-500",
                variantClasses[variant],
                className,
            )}
        >
            <span>{children}</span>
            <span>
                {icon && (
                    <span
                        className={cn(
                            "flex items-center justify-center w-6 h-6 sm:w-8.5 sm:h-8.5 lg:w-6 lg:h-6 2xl:w-8.5 2xl:h-8.5 rounded-full text-xs sm:text-lg md:text-xs 2xl:text-lg group-hover:bg-accent-pink",
                            iconBGClasses[iconClassName],
                        )}
                    >
                        {icon}
                    </span>
                )}
            </span>
        </button>
    );
}
