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
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import SubHeading from "@/components/shared/SubHeading";

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
        <section>
            <Container className="pt-24 md:pt-36 2xl:pt-50 pb-50 sm:pb-30 lg:pb-50">
                <div className="px-4 sm:px-6 lg:px-10">
                    <div className="gradient-border">
                        <div className="2xl:rounded-[30px] bg-[#222222]/50 ">
                            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 ">
                                {/* LEFT */}
                                <div className="p-6 sm:p-8">
                                    <div className="xl:space-y-[30px] ">
                                        <div className="max-w-[282px]">
                                            <SubHeading>
                                                <span className="text-[#636363]">
                                                    Book a consultation
                                                </span>{" "}
                                                unlock operational intelligence.
                                            </SubHeading>
                                        </div>

                                        <div>
                                            <Link href={left.cta.href}>
                                                <Button
                                                    icon={<FiArrowUpRight />}
                                                >
                                                    {left.cta.label}
                                                </Button>
                                            </Link>
                                        </div>
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
                                                            required={
                                                                f.required
                                                            }
                                                            placeholder={
                                                                f.placeholder
                                                            }
                                                        />
                                                    ) : (
                                                        <Input
                                                            id={f.name}
                                                            name={f.name}
                                                            type={f.type}
                                                            required={
                                                                f.required
                                                            }
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
            </Container>
        </section>
    );
}
