export type Leader = {
    name: string;
    role: string;
    imageSrc: string; // public folder path
};

export const leadershipData = {
    title: "Leadership",
    description:
        "Leadership is a deeply human process that empowers people and systems through clarity, alignment, and exceptional execution.\n\nThe team focuses on building operational intelligence by leveraging intelligent systems and real-world implementation.",
    leaders: [
        {
            name: "Reem Aljeali",
            role: "Director, Operations",
            imageSrc: "/team/leader-1.jpg",
        },
        {
            name: "Mohammed Alyfatai",
            role: "Head of Strategy",
            imageSrc: "/team/leader-2.jpg",
        },
        {
            name: "Yasir Arafat",
            role: "Technology Advisor",
            imageSrc: "/team/leader-3.jpg",
        },
    ] satisfies Leader[],
};
