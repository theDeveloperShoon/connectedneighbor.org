export interface ContactConfig {
    slug: string; // The URL slug (e.g., 'loyaltyglass')
    name: string;
    description: string;
    phone: string;
    email: string;
    imageUrl?: string;
}

export const contacts: Record<string, ContactConfig> = {
    "loyaltyglass": {
        slug: "loyaltyglass",
        name: "Loyalty Glass",
        description: "Loyalty Glass contact information",
        phone: "201-870-6671",
        email: "yuondy45@gmail.com",
        imageUrl: "https://8dmjj7pdiy9r34m1.public.blob.vercel-storage.com/title-images/loyalty-glass/IMG_9654.jpg"
    },
    // Add new pages here easily
    "estreets": {
        slug: "estreets",
        name: "E-Streets",
        description: "E-Streets contact info",
        phone: "973-382-2015",
        email: "estreets@gmail.com"
    }
};

export function getContact(slug: string) {
    return contacts[slug];
}
