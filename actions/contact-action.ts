"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function handleSubmit(formData: FormData) {
  try {
    console.log("API Key exists:", !!process.env.RESEND_API_KEY)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const interest = formData.get("interest") as string
    const message = formData.get("message") as string

    if (!name || !email) {
      console.log("Missing required fields")
      return {
        status: 400,
        message: "Por favor complete los campos requeridos (Nombre y Email)",
      }
    }

    console.log("Processing form submission:", { name, email, company, interest, message })

    const interestLabelMap: Record<string, string> = {
      estrategia: "Estrategia comercial",
      esg: "Acciones ESG",
      talleres: "Talleres",
      eventos: "Eventos",
      otros: "Otros",
    }
    const interestLabel = interestLabelMap[interest] ?? interest

    const { data, error } = await resend.emails.send({
      from: "Solicitud@sostenibilidadcomercial.com.ar",
      to: ["consultorianicoclu@gmail.com"],
      subject: "Nueva solicitud de Contacto - Sostenibilidad Comercial",
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
      return {
        status: 500,
        message: "Error al enviar el email. Por favor intente nuevamente.",
      }
    }

    console.log("Email sent successfully:", data)
    return {
      status: 200,
      message: "¡Gracias por contactarnos! Hemos recibido tu solicitud y nos pondremos en contacto contigo a la brevedad.",
    }
  } catch (error) {
    console.error("Full error object:", error)
    return {
      status: 500,
      message: "Error al enviar el email. Por favor intente nuevamente.",
    }
  }
}
