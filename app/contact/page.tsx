import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export default function Contact() {
    return (
        <div className="min-h-screen ui-bg-secondary">
            <Header />
            <main className="flex min-h-screen max-w-3xl flex-col py-32 px-16 sm:items-start">
                <h1 className="text-6xl font-staatliches text-shadow-sm ui-fg-primary-2">Contact Us</h1>
                <QuoteForm />
            </main>
        </div>
    );
}