import Header from "@/components/Header";

export default function HowItWorks() {
    return (
        <div className="min-h-screen ui-bg-secondary">
            <Header />
            <main className="flex min-h-screen max-w-3xl flex-col py-32 px-16 sm:items-start">
                <h1 className="text-6xl font-staatliches text-shadow-sm ui-fg-primary-2">How It Works</h1>
                <section className="py-8">
                    <h2 className="text-2xl font-bold ui-fg-primary-2">1. Request a quote</h2>
                    <p className="mt-4 ui-fg-primary-2">Head over to our <a href="/contact" className="font-bold ui-fg-primary-2">contact page</a> to let us know your
                     desired quantity and shipping destination.  This allows us to provide you with the most accurate pricing and shipping rates for your order</p>
                </section>
                <section className="py-8">
                    <h2 className="text-2xl font-bold ui-fg-primary-2">2. Secure Checkout via Email</h2>
                    <p className="mt-4 ui-fg-primary-2">Once we review your request we will send a personalized payment link directly to your inbox. This ensures your
                        transaction is handled through a secure payment processor.</p>
                </section>
                <section className="py-8">
                    <h2 className="text-2xl font-bold ui-fg-primary-2">3. Custom Programming & Shipping</h2>
                    <p className="mt-4 ui-fg-primary-2">Once your payment is confirmed, we will begin custom programming and prepare your order for shipping. This ensures 
                        that your order is tailored to your specifications and delivered promptly.  You'll receive updates throughout the process to keep you informed.</p>
                </section>
                <section className="py-8">
                    <h2 className="text-2xl font-bold ui-fg-primary-2">4. Lifetime Access</h2>
                    <p className="mt-4 ui-fg-primary-2">Once your cards arrive, they are yours for good.  Tap to share your info instantly with no recurring subscription fees - 
                        you'll have full access to the platform for the life of the card.</p>
                </section>
                <section className="pt-4">
                    <p className="ui-fg-primary-2 italic">If any issues arise please use our contact page to let us know and we'll help address any problems</p>
                </section>
            </main>
        </div>
    );
}