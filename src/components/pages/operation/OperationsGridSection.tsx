import { operations } from "@/data/operations";
import { OperationCard } from "@/components/ui/OperationCard";

export default function OperationsGridSection() {
    return (
        <section className="py-14">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-center text-3xl sm:text-4xl font-semibold leading-tight">
                    Transforming operations through
                    <br />
                    intelligence and automation
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {operations.map((item) => (
                        <OperationCard key={item.slug} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
