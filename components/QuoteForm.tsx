'use client';

import { useState } from "react";



export default function QuoteForm() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);

        const rawDataForm = {
            customer_name: formData.get("customer_name") as string,
            customer_email: formData.get("customer_email") as string,
            quantity_request: Number(formData.get("quantity_request")),
            message: formData.get("message") as string,
        }

        try{
            const reponse = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(rawDataForm),
            });
        } catch (error) {
            console.error("Error sending quote request:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col pxsm:mr-2">
                    <label htmlFor="customer_name" className="block text-sm font-medium ui-fg-primary-2 mb-1">Customer Name*</label>
                    <input type="text" name="customer_name" placeholder="Your Name" required className="ui-fg-primary-2 ui-bg-transparent-white p-4 rounded-lg" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="customer_email" className="block text-sm font-medium ui-fg-primary-2 mb-1">Customer Email*</label>
                    <input type="email" name="customer_email" placeholder="Your Email" required className="ui-fg-primary-2 ui-bg-transparent-white p-4 rounded-lg" />
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="quantity_request" className="block text-sm font-medium ui-fg-primary-2 mb-1">Quantity Requested*</label>
                <input type="number" name="quantity_request" placeholder="Quantity Requested" required className="ui-fg-primary-2 ui-bg-transparent-white p-4 rounded-lg" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="block text-sm font-medium ui-fg-primary-2 mb-1">Additional Message</label>
                <textarea name="message" placeholder="Additional Message (optional)" className="ui-fg-primary-2 ui-bg-transparent-white p-4 rounded-lg" />
            </div>
            <button type="submit" className={`ui-fg-primary ui-bg-primary p-4 rounded-lg ${loading ? "loading" : ""}`} disabled={loading}>
                {loading ? "Sending..." : "Send Quote Request"}
            </button>
        </form>
    )
}