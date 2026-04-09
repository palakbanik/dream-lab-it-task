import { faqData } from "@/data/faq";
import { FiPlus } from "react-icons/fi";

export default function FaqSection() {
    const { title, items } = faqData;

    return (
        <section className="py-12">
            <div className="mx-auto w-full max-w-5xl px-4">
                <h2 className="text-center text-2xl font-semibold">{title}</h2>

                <div className="mx-auto mt-7 max-w-3xl space-y-3">
                    {items.map((it) => (
                        <details
                            key={it.question}
                            className="group rounded-2xl border border-border/60 bg-white/5 px-5 py-4"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                                <span className="text-sm font-semibold">
                                    {it.question}
                                </span>

                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-custom-black/30 transition group-open:bg-white/10">
                                    <FiPlus className="h-4 w-4 transition-transform duration-200 group-open:rotate-45" />
                                </span>
                            </summary>

                            <div className="mt-3 text-sm leading-6 text-muted-foreground-primary">
                                {it.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
