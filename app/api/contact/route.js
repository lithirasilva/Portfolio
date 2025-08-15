import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request) {
  try {
  const { name, email, message, phone } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ ok: false, error: "RESEND_API_KEY not set" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.MAIL_TO;
    const from = process.env.MAIL_FROM || "onboarding@resend.dev"; // sandbox sender

    if (!to) {
      return Response.json({ ok: false, error: "MAIL_TO not set" }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `Portfolio contact from ${name}`,
      reply_to: email,
      text: `From: ${name} <${email}>${phone ? `\nPhone: ${phone}` : ''}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ ok: false, error: error.message || "Failed to send" }, { status: 502 });
    }

    return Response.json({ ok: true, id: data?.id || null });
  } catch (e) {
    console.error("Contact API error:", e);
    const msg = typeof e?.message === "string" ? e.message : "Failed to send";
    return Response.json({ ok: false, error: msg }, { status: 500 });
  }
}
