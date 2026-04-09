export type OperationBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "image"; src: string; alt: string; aspectClass?: string };

export type OperationSection = {
  id: string;        // anchor id (overview, challenge...)
  label: string;     // top pill label
  heading?: string;  // section heading (না দিলে label দেখাবে)
  blocks: OperationBlock[];
};

export type OperationItem = {
  slug: string;
  title: string;
  cardTitle: string;
  cardDescription: string;

  // card media
  cardImage: {
    src: string;
    alt: string;
    // top-row card গুলোর মতো colored background চাইলে:
    frameClassName?: string; // e.g. "bg-accent-yellow"
    imageClassName?: string; // e.g. "object-contain p-10"
  };

  // details page
  detailsTitle: string;
  sections: OperationSection[];
};

export const operations: OperationItem[] = [
  {
    slug: "system-capability",
    title: "System capability",
    cardTitle: "System capability",
    cardDescription:
      "Evaluates the system’s ability to deliver core intelligence functions, including data processing, automation...",
    cardImage: {
      src: "/operations/cards/system-capability.png",
      alt: "System capability",
      frameClassName: "bg-accent-yellow",
      imageClassName: "object-contain p-10",
    },
    detailsTitle: "Transforming Operational Efficiency\nThrough Intelligent Systems",
    sections: [
      {
        id: "overview",
        label: "Overview",
        blocks: [
          {
            type: "paragraph",
            text:
              "Operational intelligence helps organizations turn data into action—reducing delays, improving decisions, and enabling reliable automation.",
          },
          {
            type: "image",
            src: "/operations/details/ai-cube.jpg",
            alt: "AI cube",
            aspectClass: "aspect-[16/8]",
          },
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        heading: "Challenge",
        blocks: [
          {
            type: "paragraph",
            text:
              "Operational teams often struggle with fragmented tools, manual workflows, and limited visibility across systems.",
          },
          {
            type: "bullets",
            items: [
              "Disconnected operational data and reporting",
              "High manual workload and inconsistent execution",
              "Slow response to changes and exceptions",
            ],
          },
        ],
      },
      {
        id: "solution",
        label: "Solution",
        heading: "Solution",
        blocks: [
          {
            type: "paragraph",
            text:
              "We design intelligent workflows that unify data, automate decisions, and provide real-time operational feedback loops.",
          },
          {
            type: "image",
            src: "/operations/details/robot.jpg",
            alt: "Robot",
            aspectClass: "aspect-[16/9]",
          },
        ],
      },
      {
        id: "capability",
        label: "System Capability",
        heading: "System Capability",
        blocks: [
          {
            type: "bullets",
            items: [
              "Automation coverage across key workflows",
              "Accuracy and reliability of decision logic",
              "Scalable processing for operational volume",
            ],
          },
        ],
      },
      {
        id: "integration",
        label: "Integration Readiness",
        heading: "Integration Readiness",
        blocks: [
          {
            type: "bullets",
            items: [
              "Works with your existing ERP/CRM stack",
              "Secure data access and governance controls",
              "Low-friction deployment and monitoring",
            ],
          },
        ],
      },
      {
        id: "impact",
        label: "Operational Impact",
        heading: "Operational Impact",
        blocks: [
          {
            type: "bullets",
            items: [
              "Reduced operational cycle time",
              "Improved visibility and exception handling",
              "Higher consistency and lower error rates",
            ],
          },
          {
            type: "image",
            src: "/operations/details/hands.jpg",
            alt: "Hands and automation",
            aspectClass: "aspect-[16/9]",
          },
        ],
      },
      {
        id: "results",
        label: "Results",
        heading: "Results",
        blocks: [
          {
            type: "paragraph",
            text:
              "After implementation, teams gain faster execution, clearer visibility, and more reliable day-to-day operations.",
          },
          {
            type: "bullets",
            items: [
              "Less manual work",
              "Faster turnaround time",
              "Improved accountability via measurable metrics",
            ],
          },
        ],
      },
      {
        id: "conclusion",
        label: "Conclusion",
        heading: "Conclusion",
        blocks: [
          {
            type: "paragraph",
            text:
              "Intelligent systems make operations predictable, scalable, and continuously improvable—without adding complexity.",
          },
        ],
      },
    ],
  },

  // বাকিগুলো আপনি একই structure এ add করবেন
  {
    slug: "integration-readiness",
    title: "Integration Readiness",
    cardTitle: "Integration Readiness",
    cardDescription:
      "Assesses how seamlessly the system can integrate with existing infrastructure, including ERP systems, databases...",
    cardImage: {
      src: "/operations/cards/integration-readiness.png",
      alt: "Integration Readiness",
      frameClassName: "bg-accent-aqua",
      imageClassName: "object-contain p-10",
    },
    detailsTitle: "Integration Readiness\nfor Intelligent Systems",
    sections: [
      { id: "overview", label: "Overview", blocks: [{ type: "paragraph", text: "Details content here..." }] },
      { id: "challenge", label: "Challenge", blocks: [{ type: "paragraph", text: "Details content here..." }] },
      { id: "solution", label: "Solution", blocks: [{ type: "paragraph", text: "Details content here..." }] },
    ],
  },

  {
    slug: "operational-impact",
    title: "Operational Impact",
    cardTitle: "Operational Impact",
    cardDescription:
      "Measures the system’s effectiveness in improving execution, reducing manual workload, enhancing visibility...",
    cardImage: {
      src: "/operations/cards/operational-impact.png",
      alt: "Operational Impact",
      frameClassName: "bg-accent-blue",
      imageClassName: "object-contain p-10",
    },
    detailsTitle: "Operational Impact\nThat You Can Measure",
    sections: [
      { id: "overview", label: "Overview", blocks: [{ type: "paragraph", text: "Details content here..." }] },
      { id: "results", label: "Results", blocks: [{ type: "paragraph", text: "Details content here..." }] },
    ],
  },

  {
    slug: "automation-system",
    title: "Automation System",
    cardTitle: "Automation System",
    cardDescription:
      "Evaluates the system’s ability to deliver core intelligence functions, including data processing, automation...",
    cardImage: {
      src: "/operations/cards/automation-system.jpg",
      alt: "Automation System",
      frameClassName: "bg-white/0",
      imageClassName: "object-cover",
    },
    detailsTitle: "Automation Systems\nfor Modern Operations",
    sections: [{ id: "overview", label: "Overview", blocks: [{ type: "paragraph", text: "Details content here..." }] }],
  },

  {
    slug: "system-deployment",
    title: "System Deployment",
    cardTitle: "System Deployment",
    cardDescription:
      "Assesses how seamlessly the system can integrate with existing infrastructure, including ERP systems, databases...",
    cardImage: {
      src: "/operations/cards/system-deployment.jpg",
      alt: "System Deployment",
      frameClassName: "bg-white/0",
      imageClassName: "object-cover",
    },
    detailsTitle: "System Deployment\nWithout Friction",
    sections: [{ id: "overview", label: "Overview", blocks: [{ type: "paragraph", text: "Details content here..." }] }],
  },

  {
    slug: "industry-impact",
    title: "How Impact on Your Industry",
    cardTitle: "How Impact on Your Industry",
    cardDescription:
      "Measures the system’s effectiveness in improving execution, reducing manual workload, enhancing visibility...",
    cardImage: {
      src: "/operations/cards/industry-impact.jpg",
      alt: "Industry Impact",
      frameClassName: "bg-white/0",
      imageClassName: "object-cover",
    },
    detailsTitle: "Industry Impact\nAcross Workflows",
    sections: [{ id: "overview", label: "Overview", blocks: [{ type: "paragraph", text: "Details content here..." }] }],
  },
];