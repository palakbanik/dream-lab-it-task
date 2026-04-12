import { notFound } from "next/navigation";
import OperationDetails from "@/components/pages/case-study-sections/CaseStudyDetails";
import { caseStudy } from "@/data/case-study";

export function generateStaticParams() {
    return caseStudy.map((o) => ({ id: o.id }));
}

export default async function OperationDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const item = caseStudy.find((o) => o.id === id);

    if (!item) return notFound();

    return <OperationDetails item={item} />;
}
