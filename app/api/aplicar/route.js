import { Resend } from "resend";

const REQUIRED_FIELDS = ["nombre", "marca", "whatsapp", "correo", "facturacion", "cuello", "mentalidad", "urgencia", "liquidez"];

const FIELD_LABELS = {
  nombre: "Nombre",
  marca: "Marca",
  whatsapp: "WhatsApp",
  correo: "Correo",
  marcaLink: "Link de la marca",
  facturacion: "Facturación mensual",
  cuello: "Cuello de botella principal",
  mentalidad: "Disposición a dirigir como CEO (1-10)",
  urgencia: "Por qué ahora",
  liquidez: "Liquidez disponible",
};

function buildEmailText(data) {
  const lines = Object.entries(FIELD_LABELS).map(([key, label]) => {
    const value = (data[key] ?? "").toString().trim() || "—";
    return `${label}:\n${value}\n`;
  });
  return `Nueva aplicación al programa APMTex\n\n${lines.join("\n")}`;
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Cuerpo de la solicitud inválido." }, { status: 400 });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!data?.[field] || String(data[field]).trim() === "") {
      return Response.json({ error: `Falta el campo requerido: ${FIELD_LABELS[field] || field}.` }, { status: 400 });
    }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.correo)) {
    return Response.json({ error: "El correo electrónico no es válido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.APPLICATION_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or APPLICATION_TO_EMAIL environment variables");
    return Response.json({ error: "El envío de correo no está configurado todavía." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "APMTex Aplicaciones <onboarding@resend.dev>",
      to: toEmail,
      replyTo: data.correo,
      subject: `Nueva aplicación APMTex — ${data.marca} (${data.nombre})`,
      text: buildEmailText(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "No se pudo enviar el correo. Intenta de nuevo." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending application email:", err);
    return Response.json({ error: "No se pudo enviar el correo. Intenta de nuevo." }, { status: 502 });
  }
}
