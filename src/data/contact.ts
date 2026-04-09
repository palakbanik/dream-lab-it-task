export type ContactDetail = {
    label: string;
    value: string;
    href?: string;
};

export type SocialLink = {
    label: string;
    href: string;
    icon: "instagram" | "facebook" | "linkedin" | "x";
};

export type ContactField =
    | {
          name: string;
          label: string;
          type: "text" | "email";
          placeholder?: string;
          required?: boolean;
      }
    | {
          name: string;
          label: string;
          type: "textarea";
          placeholder?: string;
          required?: boolean;
          rows?: number;
      };

export const contactSectionData = {
    left: {
        title: "Book a consultation\nunlock operational intelligence.",
        cta: { label: "Book a Consultation", href: "#" },
        blocks: [
            {
                heading: "Contact Details",
                items: [
                    {
                        label: "Email",
                        value: "hello@company.com",
                        href: "mailto:hello@company.com",
                    },
                    {
                        label: "Phone",
                        value: "+1 (555) 012-3456",
                        href: "tel:+15550123456",
                    },
                    { label: "Location", value: "San Francisco, USA" },
                ] satisfies ContactDetail[],
            },
            {
                heading: "Social Links",
                socials: [
                    { label: "Instagram", href: "#", icon: "instagram" },
                    { label: "Facebook", href: "#", icon: "facebook" },
                    { label: "LinkedIn", href: "#", icon: "linkedin" },
                    { label: "X", href: "#", icon: "x" },
                ] satisfies SocialLink[],
            },
        ],
    },
    right: {
        badge: "Consult Us",
        title: "Let’s discuss how we can\ntransform your operations\nwith intelligent systems.",
        fields: [
            {
                name: "name",
                label: "Name",
                type: "text",
                placeholder: "Your name",
                required: true,
            },
            {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "you@company.com",
                required: true,
            },
            {
                name: "message",
                label: "Message",
                type: "textarea",
                placeholder: "Tell us about your goals...",
                required: true,
            },
        ] satisfies ContactField[],
        submitLabel: "Send Message",
    },
};
