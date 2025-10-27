import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_EiJMhh3t_5MPAndedXAoT1tyqTX8GJ6nw");
const POST = async ({ params, request }) => {
  const body = await request.json();
  const { from, to, subject, html, text } = body;
  if (!from || !to || !subject || !html || !text) {
    return new Response(
      JSON.stringify({
        message: "missing required fields"
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 400,
        statusText: "Bad Request"
      }
    );
  }
  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text
  });
  if (data) {
    return new Response(
      JSON.stringify({
        message: data
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
        statusText: "OK"
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: error
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
