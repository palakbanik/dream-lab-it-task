import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
    title: string;
};

export default function FeatureCard({ title }: Props) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.55)]">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-[#00F5A0] text-black">
                <span className="text-[16px] leading-none">
                    <FaCheck />
                </span>
            </div>

            <p className="whitespace-pre-line text-sm leading-snug text-white/90">
                {title}
            </p>
        </div>
    );
}
