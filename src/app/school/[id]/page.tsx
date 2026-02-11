import { schools } from "@/data/schools";
import SchoolBrandClient from "./SchoolBrandClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return schools.map((school) => ({
        id: school.id,
    }));
}

export default async function SchoolBrandPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id } = params;
    const school = schools.find((s) => s.id === id);

    if (!school) {
        notFound();
    }

    return <SchoolBrandClient school={school} />;
}
