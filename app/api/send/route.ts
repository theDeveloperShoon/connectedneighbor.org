import EmailTemplate from "@/components/EmailTemplate";
import type { EmailTemplateProps } from "@/components/EmailTemplate";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
    request: NextRequest,
    
) {
    try {
        const body: EmailTemplateProps = await request.json();
        const { customer_name, customer_email, quantity_request, message } = body;

        const { data, error } = await resend.emails.send({
            from: process.env.NOREPLY_EMAIL || "",
            to: [process.env.QUOTES_EMAIL || ""],
            subject: 'New Quote Request',
            react: EmailTemplate({
                customer_name, 
                customer_email, 
                quantity_request, 
                message
            }),
        });

        if (error) {
            return Response.json({ error: error.message }, { status: 500 });
        }
        return Response.json(data);
    } catch (error: any) {
        return Response.json({ error: error.message || "Internal Server Error" } , { status: 500 });
    }
}