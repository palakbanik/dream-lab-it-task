import { notFound } from "next/navigation";
import CaseStudyDetails from "@/components/pages/case-study-sections/CaseStudyDetails";
import { caseStudy } from "@/data/case-study";

export function generateStaticParams() {
    return caseStudy.map((o) => ({ id: o.id }));
}

export default async function CaseStudyDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const item = caseStudy.find((o) => o.id === slug);

    if (!item) return notFound();

    return <CaseStudyDetails item={item} />;
}
