import { Resend } from "resend";

const resend = new Resend(
    typeof Netlify !== "undefined" && Netlify.env ?
        Netlify.env.get("RESEND_API_KEY")
    :   process.env.RESEND_API_KEY
);

export default async (req: Request) => {
    if (req.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
    }

    try {
        const formData = await req.formData();

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const workshop = formData.get("workshop") as string;
        const time = formData.get("time") as string;
        const eventName = formData.get("event") as string;

        await resend.emails.send({
            from: "no-reply@keeptreal.nl",
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

        return new Response(
            JSON.stringify({
                success: true,
                message: "Confirmation email sent",
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error sending confirmation email:", error);

        return new Response(
            JSON.stringify({
                success: false,
                error: "Failed to send confirmation email",
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
};
