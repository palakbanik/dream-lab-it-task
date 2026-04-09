import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
    children: ReactNode;
};

export default function FeatureCard({ children }: Props) {
    return (
        <div className="max-w-90 flex items-center gap-4 rounded-[10px] bg-nav-bg border border-foreground/30 px-6 py-7.5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.2),inset_1px_1px_3px_rgba(255,255,255,0.2),inset_0_1px_3px_rgba(255,255,255,0.2)]">
            <div className="grid h-12.5 w-12.5 place-items-center rounded-full bg-accent-green shrink-0">
                <span className="h-6 w-6 bg-custom-black text-[11px] leading-none text-accent-green grid place-items-center rounded-full">
                    <FaCheck />
                </span>
            </div>

            <p className="font-semibold text-[22px] leading-[1.4] tracking-wide">
                {children}
            </p>
        </div>
    );
}
