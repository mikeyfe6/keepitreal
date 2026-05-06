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

        const { firstName, lastName, institution, contactPerson, phone, email, message } = data;
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

        const adminEmailResult = await resend.emails.send({
            from: "Keep It Real <no-reply@keeptreal.nl>",
            to: "secretariaat@keeptreal.nl",
            replyTo: email,
            subject: "Nieuwe aanmelding persoonlijke begeleiding",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Nieuwe aanmelding persoonlijke begeleiding</h2>
                    <p>Er is een nieuwe aanmelding ontvangen via het formulier op de website.</p>

                    <p><strong>Naam verwijzer:</strong> ${escapeHtml(fullName)}</p>
                    <p><strong>Verwijzende instantie:</strong> ${escapeHtml(institution ?? "-")}</p>
                    <p><strong>Contactpersoon:</strong> ${escapeHtml(contactPerson ?? "-")}</p>
                    <p><strong>Telefoonnummer:</strong> ${escapeHtml(phone)}</p>
                    <p><strong>E-mailadres:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Korte toelichting aanmelding:</strong><br>${escapeHtml(message ?? "-")}</p>

                    <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
                    <p style="font-size: 12px; color: #666;">
                        Deze email is automatisch gegenereerd via het aanmeldformulier op keeptreal.nl.
                    </p>
                </div>
            `,
        });

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
                message: "Signup and confirmation emails sent",
                adminEmailId: adminEmailResult.data?.id,
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
