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
        name: "Eddie S",
        description: "E-Streets contact info",
        phone: "973-382-2015",
        email: "estreets1@gmail.com"
    },
    "omarramirez": {
        slug: "omarramirez",
        name: "Omar Ramirez",
        description: "Omar Ramirez contact information",
        phone: "973-704-5357",
        email: "ORamirez59@msn.com"
    },
    "juanrodriguez": {
        slug: "juanrodriguez",
        name: "Juan Rodriguez - Juancy",
        description: "Juan Rodriguez contact information",
        phone: "973-704-5357",
        email: "mercadoblanco07@gmail.com"
    },
    "seancotter": {
        slug: "seancotter",
        name: "Sean Cotter",
        description: "Sean Cotter contact information",
        phone: "845-826-2308",
        email: "seancotter04@gmail.com"
    }
};

export function getContact(slug: string) {
    return contacts[slug];
}