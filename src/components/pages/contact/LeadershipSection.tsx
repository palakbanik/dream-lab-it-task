import Image from "next/image";
import { leadershipData } from "@/data/leadership";

export default function LeadershipSection() {
    const { title, description, leaders } = leadershipData;

    return (
        <section className="relative py-10">
            <div className="mx-auto w-full max-w-5xl px-4">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1.9fr] lg:items-start">
                    <div>
                        <h2 className="text-2xl font-semibold">{title}</h2>
                        <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground-primary">
                            {description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {leaders.map((p) => (
                            <div
                                key={p.name}
                                className="rounded-2xl border border-border/60 bg-white/5 overflow-hidden"
                            >
                                <div className="relative aspect-[4/5] w-full">
                                    <Image
                                        src={p.imageSrc}
                                        alt={p.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 260px"
                                        priority={false}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-custom-black/90 to-transparent" />
                                </div>

                                <div className="p-4">
                                    <p className="text-sm font-semibold">
                                        {p.name}
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground-secondary">
                                        {p.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
