import { Resend } from "resend";

export default async (req: Request) => {
    if (req.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
    }

    try {
        // Check if API key exists
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("RESEND_API_KEY is not set");
            return new Response(
                JSON.stringify({
                    success: false,
                    error: "Email service not configured",
                }),
                {
                    status: 500,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const resend = new Resend(apiKey);

        // Parse JSON instead of FormData
        const data = await req.json();
        console.log("Received data:", data);

        const { name, email, workshop, time, event: eventName } = data;

        // Validate required fields
        if (!name || !email || !workshop || !time || !eventName) {
            console.error("Missing required fields:", {
                name,
                email,
                workshop,
                time,
                eventName,
            });
            return new Response(
                JSON.stringify({
                    success: false,
                    error: "Missing required fields",
                }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        console.log(`Attempting to send email to: ${email}`);

        const emailResult = await resend.emails.send({
            from: "no-reply@send.keeptreal.nl", // Make sure this domain is verified in Resend
            to: email,
            subject: `Bevestiging aanmelding - ${eventName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Bedankt voor je aanmelding!</h2>
                    
                    <p>Beste ${name},</p>

                    <p>Bedankt voor jouw aanmelding voor deelname aan de workshop: <strong>${workshop}</strong> voor het <strong>${time}</strong>. Als je onverhoopt toch niet aanwezig kan zijn, stuur dan een email naar <a href="mailto:secretariaat@keeptreal.nl">secretariaat@keeptreal.nl</a>.</p>

                    <p>Tot 15 augustus!</p>

                    <p>Met vriendelijke groet,<br>
                    Keep It Real</p>

                    <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
                    <p style="font-size: 12px; color: #666;">
                        Deze email is automatisch gegenereerd. Antwoord niet op deze email.
                    </p>
                </div>
            `,
        });

        console.log("Email sent successfully:", emailResult);

        return new Response(
            JSON.stringify({
                success: true,
                message: "Confirmation email sent",
                emailId: emailResult.data?.id,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error sending confirmation email:", error);

        // Log the full error details
        if (error instanceof Error) {
            console.error("Error message:", error.message);
            console.error("Error stack:", error.stack);
        }

        return new Response(
            JSON.stringify({
                success: false,
                error: "Failed to send confirmation email",
                details:
                    error instanceof Error ? error.message : "Unknown error",
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
};
