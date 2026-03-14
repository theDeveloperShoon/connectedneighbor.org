export interface EmailTemplateProps {
  customer_name: string;
  customer_email: string;
  quantity_request: number;
  message: string;
}

export default function EmailTemplate
(
    {   
        customer_name, 
        customer_email, 
        quantity_request, 
        message 
    }: EmailTemplateProps
) {
    return <div>
        <h1>New Quote Request</h1>
        <p><strong>Name:</strong> {customer_name}</p>
        <p><strong>Email:</strong> {customer_email}</p>
        <p><strong>Quantity Requested:</strong> {quantity_request}</p>
        <p><strong>Message:</strong> {message}</p>
    </div>
}