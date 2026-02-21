import ContactCard from "@/components/ContactCard";
import { getContact } from "@/lib/data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const contact = await getContact(slug);
    if (!contact) {
        return {
            title: "Profile Not Found",
            description: "The requested profile could not be found.",
        };
    }
    return {
        title: contact.name,
        description: contact.description,
    };
}

export default async function ProfilePage({params}: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <ContactCard slug={slug} />;
}