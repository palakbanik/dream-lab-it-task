"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiHeadphonesBold } from "react-icons/pi";
import { RiCloseLargeFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

type HeaderProps = {
    label: string;
    href: string;
};
const navItems: HeaderProps[] = [
    { label: "About", href: "/about" },
    { label: "Why Us", href: "/why-us" },
    { label: "Systems", href: "/systems" },
    { label: "Services", href: "/services" },
    { label: "Technology", href: "/technology" },
    { label: "Process", href: "/process" },
    { label: "Case Study", href: "/case-study" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 px-4 md:px-6 lg:px-8 xl:px-10 z-999">
            <div className="relative">
                <div
                    className={`w-full max-w-360 mx-auto mt-4 md:mt-6 lg:mt-8 px-5 md:px-8 xl:px-10 py-2.5 md:py-3.5 lg:py-5 flex items-center justify-between rounded-full ${pathname === "/" ? "bg-nav-bg/30" : "bg-nav-bg/70"} backdrop-blur-xl shadow-[inset_3px_3px_0px_-3px_rgba(0,0,0,0.5),inset_-2px_-2px_1px_-2px_rgba(179,179,179,1)]`}
                >
                    {/* logo */}
                    <Link href={"/"}>
                        <Image
                            src={"/logo.svg"}
                            alt="logo"
                            draggable={false}
                            width={50}
                            height={30}
                            className="w-7.5 h-5 md:w-9 md:h-7 lg:w-10 xl:w-12.5 lg:h-7.5 shrink-0"
                        />
                    </Link>

                    {/* mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <div className="flex items-center gap-1.5 px-2.5 font-semibold text-xs">
                            <button className="cursor-pointer">EN</button>
                            <span>
                                <TbWorld size={16} />
                            </span>
                            <button className="text-foreground/50 cursor-pointer">
                                AR
                            </button>
                        </div>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? (
                                <RiCloseLargeFill size={24} />
                            ) : (
                                <HiOutlineMenuAlt3 size={24} />
                            )}
                        </button>
                    </div>

                    {/* desktop navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-2.5 xl:gap-4">
                            {navItems.map((item) => (
                                <li
                                    key={item.href}
                                    className={`font-semibold text-sm xl:text-base leading-6 tracking-normal ${pathname === item.href ? "text-accent-pink" : ""} hover:text-accent-pink/90 transition-colors duration-500`}
                                >
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* cta */}
                    <div className="hidden md:flex items-center">
                        {/* language selector */}
                        <div className="flex items-center gap-1.5 xl:gap-2.5 px-2.5 xl:px-3.5 lg:-ml-16 xl:mr-7 font-semibold text-base">
                            <button className="cursor-pointer">EN</button>
                            <span>
                                <TbWorld size={24} />
                            </span>
                            <button className="text-foreground/50 cursor-pointer">
                                AR
                            </button>
                        </div>

                        {/* cta button */}
                        <Button icon={<PiHeadphonesBold />} className="py-1.5">
                            Request a Consultation
                        </Button>
                    </div>
                </div>

                {/* mobile navigation */}
                <div className="md:hidden relative">
                    <nav
                        className={`lg:hidden w-full min-h-[60vh] flex flex-col items-start justify-center gap-8 bg-nav-bg backdrop-blur-lg shadow-[inset_3px_3px_0px_-3px_rgba(0,0,0,0.5),inset_-2px_-2px_1px_-2px_rgba(179,179,179,1)] rounded-lg mt-2 py-4 px-6 z-999 absolute top-0 -left-[120%] ${isMenuOpen ? "left-0" : ""} transition-all duration-500`}
                    >
                        <ul className="flex flex-col items-start gap-5">
                            {navItems.map((item) => (
                                <li
                                    key={item.href}
                                    className={`font-semibold text-lg leading-none tracking-normal`}
                                >
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <Button icon={<PiHeadphonesBold />} className="py-1.5">
                            Request a Consultation
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
