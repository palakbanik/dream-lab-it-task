import Link from "next/link";
import {
    contactInfo,
    contactSectionData,
    contactSocialLinks,
} from "@/data/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiArrowRight } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Container from "@/components/shared/Container";
import SubHeading from "@/components/shared/SubHeading";
import Paragraph from "@/components/shared/Paragraph";
import Image from "next/image";
import { PiHeadphonesBold } from "react-icons/pi";

export default function ContactSection() {
    const { left, right } = contactSectionData;

    return (
        <div>
            <Container>
                <div className="sm:px-6 lg:px-10">
                    <div className="gradient-border">
                        <div className="bg-[#222222]/50 ">
                            <div className="flex flex-col lg:flex-row justify-between">
                                {/* left contact info */}
                                <div className="p-4 sm:p-12 flex flex-col justify-between">
                                    <div className="space-y-[26px] xl:space-y-[30px] ">
                                        <div className="max-w-[282px]">
                                            <SubHeading>
                                                <span className="text-[#636363]">
                                                    Book a consultation
                                                </span>{" "}
                                                unlock operational intelligence.
                                            </SubHeading>
                                        </div>

                                        <Link href={left.cta.href}>
                                            <Button icon={<PiHeadphonesBold />}>
                                                {left.cta.label}
                                            </Button>
                                        </Link>
                                    </div>

                                    <div className="mt-10 space-y-8">
                                        <div className="space-y-6 md:space-y-12.5">
                                            <div className="space-y-2.5 md:space-y-5">
                                                <SubHeading>
                                                    Contact Details
                                                </SubHeading>

                                                <div>
                                                    {contactInfo.map(
                                                        (info, i) => (
                                                            <Link
                                                                key={i}
                                                                href={info.href}
                                                            >
                                                                <Paragraph className="flex items-center gap-2.5">
                                                                    <span>
                                                                        <Image
                                                                            src={
                                                                                info.src
                                                                            }
                                                                            alt={
                                                                                info.alt
                                                                            }
                                                                            width={
                                                                                0
                                                                            }
                                                                            height={
                                                                                0
                                                                            }
                                                                            draggable={
                                                                                false
                                                                            }
                                                                            className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
                                                                        />
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            info.label
                                                                        }
                                                                    </span>
                                                                </Paragraph>
                                                            </Link>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                            <div className="space-y-2.5 md:space-y-5">
                                                <SubHeading>
                                                    Social links
                                                </SubHeading>

                                                <div className="flex items-center gap-2.5">
                                                    {contactSocialLinks.map(
                                                        (info, i) => (
                                                            <Link
                                                                href={info.href}
                                                                key={i}
                                                            >
                                                                <Image
                                                                    src={
                                                                        info.src
                                                                    }
                                                                    alt={
                                                                        info.alt
                                                                    }
                                                                    width={0}
                                                                    height={0}
                                                                    draggable={
                                                                        false
                                                                    }
                                                                    className="w-[32px] h-[32px] md:w-[48px] xl:h-[48px] "
                                                                />
                                                            </Link>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* right form card */}
                                <div className="p-4 sm:p-8  grid place-items-center lg:place-items-stretch">
                                    <div className="w-full max-w-[731px] rounded-lg md:rounded-xl lg:rounded-2xl bg-[#1A1A1A] backdrop-blur-[20px] p-4 sm:p-7 2xl:p-[58px]">
                                        <span className="capitalize rounded-full border border-foreground px-3 p-1.5 xl:px-[15px] xl:py-[12px] text-xs xl:text-lg text-muted-foreground-secondary">
                                            contact us
                                        </span>

                                        <h3 className="mt-4 xl:mt-[30px]  text-lg sm:text-2xl 2xl:text-[42px] font-semibold leading-snug xl:leading-[1.2]">
                                            Let&apos;s discuss how we can
                                            transform your operations with
                                            intelligent systems.
                                        </h3>

                                        <form className="mt-4 xl:mt-[50px] space-y-4">
                                            {right.fields.map((f) => (
                                                <div
                                                    key={f.name}
                                                    className="md:space-y-2"
                                                >
                                                    <label
                                                        className="text-xs sm:text-sm lg:text-base text-muted-foreground-secondary/30"
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

                                            <div className="inline-block xl:mt-[50px]">
                                                <Button
                                                    type="submit"
                                                    variant="white"
                                                    iconVariant="black"
                                                    icon={<FiArrowRight />}
                                                >
                                                    {right.submitLabel}
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
