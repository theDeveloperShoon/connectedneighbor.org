import Header from "@/components/Header";

export default function HowItWorks() {
    return (
        <div className="min-h-screen ui-bg-secondary dark:bg-background-2">
            <Header />
            <main className="flex min-h-screen max-w-3xl flex-col py-32 px-16 sm:items-start">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">How It Works</h1>
                <section className="py-8">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">1. Sign Up</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Create an account to get started with Connected Neighbor. It's quick and easy!</p>
                </section>
                <section className="py-8">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">2. Connect with Neighbors</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Find and connect with neighbors in your area to share resources, organize events, and build a stronger community.</p>
                </section>
                <section className="py-8">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">3. Share and Collaborate</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Use our platform to share resources, collaborate on projects, and stay informed about local happenings.</p>
                </section>
            </main>
        </div>
    );
}