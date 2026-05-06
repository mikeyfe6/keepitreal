import { Resend } from "resend";

const escapeHtml = (value: string) =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

export default async function sendSignupConfirmation(req: Request) {
    if (req.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
    }

    try {
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
                },
            );
        }

        const resend = new Resend(apiKey);

        const data = await req.json();

        const { firstName, lastName, phone, email } = data;
        const fullName = `${firstName ?? ""} ${lastName ?? ""}`.trim();

        if (!firstName || !lastName || !phone || !email) {
            console.error("Missing required fields:", {
                firstName,
                lastName,
                phone,
                email,
            });
            return new Response(
                JSON.stringify({
                    success: false,
                    error: "Missing required fields",
                }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                },
            );
        }

        const userEmailResult = await resend.emails.send({
            from: "Keep It Real <no-reply@keeptreal.nl>",
            to: email,
            replyTo: "secretariaat@keeptreal.nl",
            subject: "Bevestiging aanmelding",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Bedankt voor je aanmelding bij Keep It Real.</h2>

                    <p>Beste <strong>${escapeHtml(fullName)}</strong>,</p>

                    <p>Wij hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.</p>

                    <p>Je ontvangt binnenkort een officieel aanmeldformulier.</p>

                    <p>Met vriendelijke groet,<br>
                    Team Keep It Real</p>

                    <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
                    <p style="font-size: 12px; color: #666;">
                        Deze email is automatisch gegenereerd. Antwoord niet op deze email.
                    </p>
                </div>
            `,
        });

        return new Response(
            JSON.stringify({
                success: true,
                message: "Confirmation email sent",
                userEmailId: userEmailResult.data?.id,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            },
        );
    } catch (error) {
        console.error("Error sending confirmation email:", error);

        if (error instanceof Error) {
            console.error("Error message:", error.message);
            console.error("Error stack:", error.stack);
        }

        return new Response(
            JSON.stringify({
                success: false,
                error: "Failed to send confirmation email",
                details: error instanceof Error ? error.message : "Unknown error",
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            },
        );
    }
}
