import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key check
const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not defined in environment variables")
}
const resend = new Resend(resendApiKey)

export async function POST(req: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      {
        error: "Server configuration error: Missing API key",
        details: "Please contact the administrator",
      },
      { status: 500 },
    )
  }

  try {
    const formData = await req.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const interest = formData.get("interest") as string
    const message = formData.get("message") as string

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields (name and email)" }, { status: 400 })
    }

    const interestLabelMap: Record<string, string> = {
      estrategia: "",
      esg: "",
      talleres: "",
      eventos: "",
      otros: "",
    }
    const interestLabel = interestLabelMap[interest] ?? interest

    const { data, error } = await resend.emails.send({
      from: "",
      to: [""],
      subject: "Nueva solicitud de Contacto - MYL Servicios Industriales",
      html: `
          <h2 style="color: #15AFA9; margin-bottom: 20px;">Nueva solicitud de contacto</h2>
          <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${company ? `<p style=\"margin: 10px 0;\"><strong>Empresa:</strong> ${company}</p>` : ''}
            ${interest ? `<p style=\"margin: 10px 0;\"><strong>Interés:</strong> ${interestLabel}</p>` : ''}
            ${message ? `<p style="margin: 10px 0;"><strong>Mensaje:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: error.message,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      status: 200,
      message: "¡Gracias por contactarnos! Hemos recibido tu solicitud y nos pondremos en contacto contigo a la brevedad.",
      data,
    })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
