import Link from "next/link";
import { contactSectionData } from "@/data/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FiArrowUpRight } from "react-icons/fi";
import {
    RiInstagramLine,
    RiLinkedinLine,
    RiFacebookCircleLine,
    RiTwitterXLine,
} from "react-icons/ri";
import Button from "@/components/ui/Button";

function SocialIcon({
    type,
}: {
    type: "instagram" | "facebook" | "linkedin" | "x";
}) {
    const className = "h-5 w-5";
    switch (type) {
        case "instagram":
            return <RiInstagramLine className={className} />;
        case "facebook":
            return <RiFacebookCircleLine className={className} />;
        case "linkedin":
            return <RiLinkedinLine className={className} />;
        case "x":
            return <RiTwitterXLine className={className} />;
    }
}

export default function ContactSection() {
    const { left, right } = contactSectionData;

    return (
        <section className="relative py-14">
            {/* subtle glow like screenshot */}
            <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-64 max-w-5xl rounded-full bg-gradient-to-r from-accent-green/0 via-accent-green/10 to-accent-green/0 blur-3xl" />

            <div className="mx-auto w-full max-w-5xl px-4">
                <div className="rounded-3xl p-[1px] bg-gradient-to-br from-gradient-purple-start/70 via-accent-blue/20 to-accent-aqua/35">
                    <div className="rounded-3xl bg-custom-black/55 backdrop-blur border border-border/60">
                        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                            {/* LEFT */}
                            <div className="p-6 sm:p-8">
                                <h2 className="whitespace-pre-line text-2xl sm:text-3xl font-semibold leading-tight">
                                    {left.title}
                                </h2>

                                <div className="mt-5">
                                    <Link href={left.cta.href}>
                                        <Button
                                            icon={<FiArrowUpRight />}
                                            className="px-5"
                                        >
                                            {left.cta.label}
                                        </Button>
                                    </Link>
                                </div>

                                <div className="mt-10 space-y-8">
                                    {left.blocks.map((block) => (
                                        <div key={block.heading}>
                                            <p className="text-sm font-semibold text-foreground">
                                                {block.heading}
                                            </p>

                                            {/* {"items" in block && (
                                                <div className="mt-3 space-y-2">
                                                    {block.items.map((item) => (
                                                        <div
                                                            key={item.label}
                                                            className="text-sm"
                                                        >
                                                            <span className="text-muted-foreground-primary">
                                                                {item.label}
                                                                :{" "}
                                                            </span>
                                                            {item.href ? (
                                                                <a
                                                                    className="text-foreground hover:underline underline-offset-4"
                                                                    href={
                                                                        item.href
                                                                    }
                                                                >
                                                                    {item.value}
                                                                </a>
                                                            ) : (
                                                                <span className="text-foreground">
                                                                    {item.value}
                                                                </span>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {"socials" in block && (
                                                <div className="mt-3 flex items-center gap-3">
                                                    {block.socials.map((s) => (
                                                        <a
                                                            key={s.label}
                                                            href={s.href}
                                                            aria-label={s.label}
                                                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-white/5 text-foreground hover:bg-white/10 transition"
                                                        >
                                                            <SocialIcon
                                                                type={s.icon}
                                                            />
                                                        </a>
                                                    ))}
                                                </div>
                                            )} */}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT (FORM CARD) */}
                            <div className="p-6 sm:p-8 lg:border-l lg:border-border/60">
                                <div className="rounded-2xl bg-white/5 border border-border/60 p-6 sm:p-7">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs text-muted-foreground-secondary">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent-pink" />
                                        {right.badge}
                                    </div>

                                    <h3 className="mt-4 whitespace-pre-line text-xl sm:text-2xl font-semibold leading-snug">
                                        {right.title}
                                    </h3>

                                    <form
                                        className="mt-6 space-y-4"
                                        action="#"
                                        method="post"
                                    >
                                        {right.fields.map((f) => (
                                            <div
                                                key={f.name}
                                                className="space-y-2"
                                            >
                                                <label
                                                    className="text-xs text-muted-foreground-secondary"
                                                    htmlFor={f.name}
                                                >
                                                    {f.label}
                                                </label>

                                                {f.type === "textarea" ? (
                                                    <Textarea
                                                        id={f.name}
                                                        name={f.name}
                                                        required={f.required}
                                                        placeholder={
                                                            f.placeholder
                                                        }
                                                    />
                                                ) : (
                                                    <Input
                                                        id={f.name}
                                                        name={f.name}
                                                        type={f.type}
                                                        required={f.required}
                                                        placeholder={
                                                            f.placeholder
                                                        }
                                                    />
                                                )}
                                            </div>
                                        ))}

                                        <div className="pt-2">
                                            <Button
                                                type="submit"
                                                icon={<FiArrowUpRight />}
                                                className="w-full justify-between px-5"
                                            >
                                                {right.submitLabel}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* /RIGHT */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
