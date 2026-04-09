export type LegalBlock =
    | { type: "paragraph"; text: string }
    | { type: "bullets"; items: string[] };

export type LegalSection = {
    id: string;
    title: string;
    blocks: LegalBlock[];
};

export type TermsOfUsePageData = {
    title: string;
    lastUpdated: string;
    introLines: string[]; // intro multiple lines (dynamic)
    sections: LegalSection[];
    cta: {
        title: string;
        buttonLabel: string;
        href: string;
        image: { src: string; alt: string };
    };
};

export const termsOfUseData: TermsOfUsePageData = {
    title: "Terms of Use",
    lastUpdated: "Last updated: 29 March 2026",
    introLines: [
        "Welcome to Beyond Code!",
        "These Terms of Use outline the rules and regulations for using Beyond Code’s websites and services, accessible at: www.beyondcode.ae",
        "Beyond Code is an MVP design and development agency operating in Abu Dhabi (UAE), London (UK), and Dhaka (Bangladesh).",
        "By accessing or using our Website or Services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our Website or Services.",
    ],

    sections: [
        {
            id: "interpretation-definitions",
            title: "Interpretation and Definitions",
            blocks: [
                {
                    type: "paragraph",
                    text: "The following terminology applies to these Terms of Use, Privacy Policy, Disclaimer Notice, and all Agreements:",
                },
                {
                    type: "bullets",
                    items: [
                        "“Client”, “You”, and “Your” refers to the individual or legal entity accessing this Website and complying with these Terms.",
                        "“Company”, “Beyond Code”, “We”, “Us”, and “Our” refers to Beyond Code.",
                        "“Party” or “Parties” refers to both the Client and Beyond Code.",
                    ],
                },
                {
                    type: "paragraph",
                    text: "Any use of the above terminology in the singular, plural, capitalization, or gender is taken as interchangeable.",
                },
            ],
        },
        {
            id: "use-of-website",
            title: "Use of the Website",
            blocks: [
                {
                    type: "paragraph",
                    text: "By using this Website, you warrant that you are at least 18 years of age or are accessing the Website under the supervision of a legal guardian, and that you will use the Website in compliance with all applicable laws and regulations.",
                },
                {
                    type: "paragraph",
                    text: "You agree not to use the Website for any unlawful or prohibited purpose.",
                },
            ],
        },
        {
            id: "cookies",
            title: "Cookies",
            blocks: [
                {
                    type: "paragraph",
                    text: "We use cookies and similar technologies to enhance user experience and website functionality. By accessing Beyond Code, you agree to the use of cookies in accordance with our Privacy Policy.",
                },
                {
                    type: "paragraph",
                    text: "Some third-party partners or service providers may also use cookies.",
                },
            ],
        },
        {
            id: "intellectual-property",
            title: "Intellectual Property Rights",
            blocks: [
                {
                    type: "paragraph",
                    text: "Unless otherwise stated, Beyond Code and/or its licensors own all intellectual property rights for all content, materials, designs, text, graphics, and software available on the Website.",
                },
                {
                    type: "paragraph",
                    text: "All intellectual property rights are reserved. You may access the Website for your personal or internal business use, subject to the restrictions set out in these Terms.",
                },
                { type: "paragraph", text: "You must not:" },
                {
                    type: "bullets",
                    items: [
                        "Republish material from Beyond Code",
                        "Sell, rent, or sub-license material from Beyond Code",
                        "Reproduce, duplicate, or copy material from Beyond Code",
                        "Redistribute content from Beyond Code without prior written permission",
                    ],
                },
                {
                    type: "paragraph",
                    text: "This Agreement shall begin on the date you first access the Website.",
                },
            ],
        },
        {
            id: "hyperlinking",
            title: "Hyperlinking to Our Content",
            blocks: [
                {
                    type: "paragraph",
                    text: "Organizations may link to Beyond Code’s Website provided that the link:",
                },
                {
                    type: "bullets",
                    items: [
                        "Is not deceptive or misleading",
                        "Does not falsely imply sponsorship, endorsement, or approval",
                        "Fits within the context of the linking party’s site",
                    ],
                },
                {
                    type: "paragraph",
                    text: "We may approve link requests from:",
                },
                {
                    type: "bullets",
                    items: [
                        "Commonly-known consumer or business information sources",
                        "Online communities and directories",
                        "Charitable organizations and associations",
                        "Educational institutions and trade associations",
                        "Professional service firms (e.g., legal, accounting, consulting)",
                    ],
                },
                {
                    type: "paragraph",
                    text: "No use of Beyond Code’s logo or brand assets is permitted without prior written trademark or brand license approval.",
                },
            ],
        },
        {
            id: "iframes",
            title: "iFrames",
            blocks: [
                {
                    type: "paragraph",
                    text: "Without prior written permission, you may not create frames around our Webpages that alter the visual presentation or appearance of the Website.",
                },
            ],
        },
        {
            id: "content-liability",
            title: "Content Liability",
            blocks: [
                {
                    type: "paragraph",
                    text: "We shall not be held responsible for any content that appears on your Website. You agree to indemnify and defend Beyond Code against all claims arising from content on your Website.",
                },
                {
                    type: "paragraph",
                    text: "No link(s) should appear on any Website that may be interpreted as defamatory, obscene, illegal, or which infringes third-party rights.",
                },
            ],
        },
        {
            id: "reservation-of-rights",
            title: "Reservation of Rights",
            blocks: [
                {
                    type: "paragraph",
                    text: "We reserve the right to request removal of any links to our Website. You agree to remove such links immediately upon request.",
                },
                {
                    type: "paragraph",
                    text: "We also reserve the right to amend these Terms of Use and our linking policy at any time. Continued use of the Website constitutes acceptance of any changes.",
                },
            ],
        },
        {
            id: "removal-of-links",
            title: "Removal of Links from Our Website",
            blocks: [
                {
                    type: "paragraph",
                    text: "If you find any link on our Website offensive for any reason, you may contact us. We will consider requests, but are not obligated to remove links or respond directly.",
                },
            ],
        },
        {
            id: "accuracy",
            title: "Accuracy of Information",
            blocks: [
                {
                    type: "paragraph",
                    text: "We do not guarantee the information on this Website is accurate, complete, or up to date. We do not warrant that the Website will always be available or that its content will remain current.",
                },
            ],
        },
        {
            id: "disclaimer",
            title: "Disclaimer",
            blocks: [
                {
                    type: "paragraph",
                    text: "To the maximum extent permitted by applicable law, Beyond Code excludes all representations, warranties, and conditions relating to the Website and its use.",
                },
                {
                    type: "bullets",
                    items: [
                        "Limit or exclude liability for fraud or fraudulent misrepresentation",
                        "Limit liabilities in any way not permitted under applicable law",
                        "Exclude liabilities that cannot be excluded under applicable law",
                    ],
                },
                {
                    type: "paragraph",
                    text: "As long as the Website and its information are provided free of charge, Beyond Code shall not be liable for any loss or damage of any nature.",
                },
            ],
        },
        {
            id: "governing-law",
            title: "Governing Law",
            blocks: [
                {
                    type: "paragraph",
                    text: "These Terms of Use shall be governed by and construed in accordance with applicable laws relevant to Beyond Code’s operating jurisdictions, without regard to conflict of law principles.",
                },
            ],
        },
        {
            id: "changes",
            title: "Changes to These Terms",
            blocks: [
                {
                    type: "paragraph",
                    text: "We may revise these Terms of Use at any time. Updates will be posted on this page with an updated “Last updated” date. Continued use after changes constitutes acceptance of the revised terms.",
                },
            ],
        },
        {
            id: "contact",
            title: "Contact Us",
            blocks: [
                {
                    type: "paragraph",
                    text: "If you have any questions or concerns about these Terms of Use, please contact us:\nEmail: info@beyondcode.ae",
                },
            ],
        },
    ],

    cta: {
        title: "Transform Your Operations\nwith Intelligence",
        buttonLabel: "Book for Consultation",
        href: "#",
        image: { src: "/privacy/cta.jpg", alt: "AI in operations" },
    },
};
