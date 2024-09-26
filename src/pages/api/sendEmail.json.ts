import type { APIRoute } from 'astro'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json()
  const { from, to, subject, html, text } = body

  console.log({ from, to, subject, html, text })

  if (!from || !to || !subject || !html || !text) {
    return new Response(
      JSON.stringify({
        message: 'missing required fields',
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
        statusText: 'Bad Request',
      }
    )
  }

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
  })

  if (data) {
    return new Response(
      JSON.stringify({
        message: data,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
        statusText: 'OK',
      }
    )
  } else {
    return new Response(
      JSON.stringify({
        message: error,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
        statusText: 'Internal Server Error',
      }
    )
  }
}
