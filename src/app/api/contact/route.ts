import { render } from "@react-email/render";
import { Resend } from "resend";
import UserConfirmation from "../../../../emails/UserConfirmation";
import AdminNotification from "../../../../emails/AdminNotification";

const resend = new Resend(process.env.RESEND_API_KEY as string);

async function sendEmail(to: string[], subject: string, html: string) {
  try {
    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to,
      subject,
      html,
    });

    if (response.error) {
      console.error(`Error sending email (${subject}):`, response.error);
      throw new Error(`Email sending failed: ${response.error.message}`);
    }

    return response;
  } catch (error) {
    console.error(`Error in sendEmail function:`, error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const { email, name, subject, message } = await request.json();

    await sendEmail(
      [email],
      "Confirmation of Your Message",
      render(UserConfirmation({ name }))
    );
    await sendEmail(
      [process.env.EMAIL_TO as string],
      `New Message Received: ${subject}`,
      render(AdminNotification({ name, subject, message }))
    );

    return new Response(
      JSON.stringify({ message: "Emails sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
