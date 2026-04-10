export type FooterLink = {
    label: string;
    href: string;
};

export type FooterColumn = {
    title: string;
    links: FooterLink[];
};

export type FooterData = {
    brand: {
        title: string;
        description: string;
    };
    columns: FooterColumn[];
    bottomLinks: FooterLink[];
    copyright: string;

    cta: {
        title: string;
        buttonLabel: string;
        href: string;
        image: { src: string; alt: string };
    };
};

export const footerData: FooterData = {
    brand: {
        title: "Beyond Code",
        description:
            "AI operational intelligence\ninfrastructure for institutional\nexecution and reporting automation.",
    },

    columns: [
        {
            title: "Company",
            links: [
                { label: "About", href: "/about" },
                { label: "Why Us", href: "/why-us" },
                { label: "Systems", href: "/systems" },
                { label: "Services", href: "/services" },
            ],
        },
        {
            title: "Use Cases",
            links: [
                { label: "Technology", href: "/technology" },
                { label: "Process", href: "/process" },
                { label: "Case Study", href: "/case-study" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Leadership", href: "/leadership" },
                { label: "FAQs", href: "/faqs" },
            ],
        },
    ],

    bottomLinks: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Use", href: "/terms-of-use" },
    ],

    copyright: "© 2026 beyond code All Rights Reserved",

    cta: {
        title: "Transform Your Operations\nwith Intelligence",
        buttonLabel: "Book for Consultation",
        href: "#",
        image: { src: "/images/footer-robot.png", alt: "AI in operations" },
    },
};
