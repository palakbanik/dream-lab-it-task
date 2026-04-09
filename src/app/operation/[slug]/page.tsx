import { notFound } from "next/navigation";
import { operations } from "@/data/operations";
import OperationDetails from "@/components/pages/operation/OperationDetails";

export function generateStaticParams() {
    return operations.map((o) => ({ slug: o.slug }));
}

export default async function OperationDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const item = operations.find((o) => o.slug === slug);

    if (!item) return notFound();

    return <OperationDetails item={item} />;
}
