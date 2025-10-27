import { c as createComponent, r as renderTemplate, f as addAttribute, b as createAstro, m as maybeRenderHead, a as renderComponent, g as renderSlot, h as renderHead, u as unescapeHTML } from './astro/server_Bl5KEvft.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_BSJeS5Bs.mjs';
import 'clsx';
/* empty css                                  */
import { Mail, Phone } from 'lucide-react';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Html, Head, Preview, Body, Container, Img, Text, Hr, render } from '@react-email/components';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Proyectos/novoforma/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Whatsaap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://wa.me/667757013?text=Hola, gracias por ponerte en contacto con Novoforma, como podemos ayudarte?" title="Whatsapp" target="_blank" aria-label="Whatsapp" data-astro-cid-lqmvzakl> <svg focusable="false" viewBox="0 0 24 24" width="55" height="55" data-astro-cid-lqmvzakl><path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" data-astro-cid-lqmvzakl></path></svg> </a> `;
}, "C:/Proyectos/novoforma/src/components/Whatsaap.astro", void 0);

const SampleEmail = ({ userFirstname }) => /* @__PURE__ */ jsxs(Html, { children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsx(Preview, { children: "Gracias por contactar con Novoforma" }),
  /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
    /* @__PURE__ */ jsx(
      Img,
      {
        src: `https://www.novoformaserveis.es/logo.png`,
        width: "170",
        height: "50",
        alt: "Novoforma Logo",
        style: logo
      }
    ),
    /* @__PURE__ */ jsxs(Text, { style: paragraph, children: [
      "Estimado/a ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx(Text, { style: paragraph, children: "¡Gracias por ponerte en contacto con Novoforma! Nos complace saber que estás interesado/a en nuestros servicios de construcción y reformas. Nuestro equipo se especializa en ofrecer soluciones personalizadas tanto para hogares como para negocios, y estamos aquí para ayudarte a transformar tus espacios." }),
    /* @__PURE__ */ jsx(Text, { style: paragraph, children: "Hemos recibido tu consulta y nos pondremos a trabajar en tu solicitud lo antes posible. En breve uno de nuestros expertos revisará los detalles de tu proyecto y se pondrá en contacto contigo para proporcionarte un presupuesto gratuito y discutir cualquier duda que puedas tener." }),
    /* @__PURE__ */ jsx(Text, { style: paragraph, children: "Si tienes alguna preferencia en cuanto a fechas para una llamada o visita, por favor háznoslo saber y lo coordinaremos." }),
    /* @__PURE__ */ jsx(Text, { style: paragraph, children: "Si tienes cualquier otra pregunta, no dudes en responder a este correo o llamarnos directamente al +34 667 757 013." }),
    /* @__PURE__ */ jsx(Text, { style: paragraph, children: "Gracias nuevamente por elegir Novoforma. Estamos entusiasmados por la oportunidad de trabajar contigo." }),
    /* @__PURE__ */ jsxs(Text, { style: paragraph, children: [
      "Saludos cordiales",
      /* @__PURE__ */ jsx("br", {}),
      "Novoforma",
      /* @__PURE__ */ jsx("br", {}),
      "info@novoformaserveis.es | +34 667 757 013 / +34 696 460 538",
      /* @__PURE__ */ jsx("br", {}),
      "https://www.novoformaserveis.es/"
    ] }),
    /* @__PURE__ */ jsx(Hr, { style: hr }),
    /* @__PURE__ */ jsx(Text, { style: footer, children: "© 2024 Novoforma. Todos los derechos reservados." })
  ] }) })
] });
SampleEmail.PreviewProps = {
  userFirstname: "Alan"
};
const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
const container = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
const logo = {
  margin: "0 auto"
};
const paragraph = {
  fontSize: "16px",
  lineHeight: "26px"
};
const hr = {
  borderColor: "#cccccc",
  margin: "20px 0"
};
const footer = {
  color: "#8898aa",
  fontSize: "12px"
};

const EmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    const formData = new FormData(e.currentTarget);
    const { name, phone, email, message: userMessage } = Object.fromEntries(formData);
    try {
      const finalHtml = await render(/* @__PURE__ */ jsx(SampleEmail, { userFirstname: name }), {
        pretty: true
      });
      const finalText = await render(/* @__PURE__ */ jsx(SampleEmail, { userFirstname: name }), {
        plainText: true
      });
      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "info@novoformaserveis.es",
          to: [email],
          subject: `Gracias ${name} por contactarnos - Novoforma`,
          html: finalHtml,
          text: finalText
        })
      });
      if (res.ok) {
        setMessage({ type: "success", text: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto." });
        e.target.reset();
      } else {
        setMessage({ type: "error", text: "Error al enviar el mensaje. Por favor, inténtalo de nuevo." });
      }
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Error al enviar el mensaje. Por favor, inténtalo de nuevo." });
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: "space-y-4",
      onSubmit: handleSubmit,
      children: [
        message && /* @__PURE__ */ jsx(
          "div",
          {
            className: `p-3 rounded-sm ${message.type === "success" ? "bg-green-900/50 text-green-100" : "bg-red-900/50 text-red-100"}`,
            children: message.text
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "name",
                className: "text-white",
                children: "Nombre"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                required: true,
                id: "name",
                name: "name",
                placeholder: "Tu nombre",
                type: "text",
                className: "bg-zinc-800 text-primary-50 border-zinc-700 rounded-sm p-2 w-full outline-none focus:border-primary-600 focus:border-2 transition-colors",
                disabled: isLoading
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "phone",
                className: "text-white",
                children: "Teléfono"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                required: true,
                id: "phone",
                name: "phone",
                type: "tel",
                placeholder: "Tu teléfono",
                className: "bg-zinc-800 text-primary-50 border-zinc-700 rounded-sm p-2 w-full outline-none focus:border-primary-600 focus:border-2 transition-colors",
                disabled: isLoading
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 flex flex-col", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "email",
              className: "text-white",
              children: "Correo Electrónico"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              required: true,
              id: "email",
              name: "email",
              placeholder: "tu@email.com",
              type: "email",
              className: "bg-zinc-800 text-primary-50 border-zinc-700 rounded-sm p-2 outline-none focus:border-primary-600 focus:border-2 transition-colors",
              disabled: isLoading
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 flex flex-col", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "message",
              className: "text-white",
              children: "Mensaje"
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              required: true,
              name: "message",
              className: "min-h-[100px] bg-zinc-800 text-primary-50 border-zinc-700 p-2 rounded-sm outline-none focus:border-primary-600 focus:border-2 transition-colors resize-none",
              id: "message",
              placeholder: "Tu mensaje",
              disabled: isLoading
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "w-full bg-primary-600 text-primary-50 hover:bg-primary-700 rounded-sm p-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            disabled: isLoading,
            children: isLoading ? "Enviando..." : "Enviar Mensaje"
          }
        )
      ]
    }
  );
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, robots = true, description = "Novoforma es una empresa especializada en construcci\xF3n y reformas en Barcelona con m\xE1s de 20 a\xF1os de experiencia. Ofrecemos servicios de construcci\xF3n, reformas integrales y proyectos comerciales con los m\xE1s altos est\xE1ndares de calidad." } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/logo.png"><!-- SEO Meta Tags --><title>', '</title><meta name="description"', '><meta name="keywords" content="construcci\xF3n Barcelona, reformas Barcelona, reformas integrales, empresa construcci\xF3n Barcelona, reformas pisos Barcelona, reformas oficinas Barcelona, construcci\xF3n de obra nueva, presupuesto reforma Barcelona, arquitectos Barcelona, constructora Barcelona, reformas ba\xF1os Barcelona, reformas cocinas Barcelona, alba\xF1iles Barcelona, fontaneros Barcelona, electricistas Barcelona"><meta name="author" content="Novoforma"><meta name="robots"', '><meta name="language" content="Spanish"><meta name="geo.region" content="ES-CT"><meta name="geo.placename" content="Barcelona"><!-- Canonical URL --><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:site_name" content="Novoforma"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="https://www.novoformaserveis.es/social-img.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Novoforma - Construcci\xF3n y Reformas en Barcelona"><meta property="og:locale" content="es_ES"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@Novoforma"><meta name="twitter:creator" content="@Novoforma"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content="https://www.novoformaserveis.es/social-img.png"><meta name="twitter:image:alt" content="Novoforma - Construcci\xF3n y Reformas en Barcelona"><!-- Structured Data (Schema.org) --><script type="application/ld+json">', '<\/script><!-- Organization Schema --><script type="application/ld+json">', '<\/script><meta name="generator"', ">", "", '</head> <body> <div class="flex flex-col min-h-screen bg-zinc-50 text-zinc-900 overflow-x-hidden"> <header class="px-2 bg-zinc-950 text-zinc-50 fixed top-0 w-full z-50 border-b border-primary-900 shadow-sm" role="banner"> <nav class="container mx-auto flex items-center justify-between gap-8 h-16" role="navigation" aria-label="Men\xFA principal"> <a class="flex items-center justify-center gap-2" href="/" title="Novoforma - Inicio" aria-label="Ir a la p\xE1gina de inicio"> ', ' <span class="font-semibold text-xl uppercase"><span class="font-black text-primary-600">Novo</span>forma</span> </a> <div class="hidden items-center justify-center gap-8 flex-1 lg:flex"> <div class="flex items-center"> ', ' <span class="prose prose-invert"><a href="tel:667757013" title="+34 667 757 013" class="hover:text-primary-400">+34 667 757 013</a></span> </div> <div class="flex items-center"> ', ' <span class="prose prose-invert"><a href="tel:696460538" title="+34 696 460 538" class="hover:text-primary-400">+34 696 460 538</a></span> </div> </div> <nav class="ml-auto hidden gap-4 lg:flex"> <a class="text-sm font-medium hover:text-primary-500 transition-colors" href="#servicios">\nServicios\n</a> <a class="text-sm font-medium hover:text-primary-500 transition-colors" href="#galeria">\nGaler\xEDa\n</a> <a class="text-sm font-medium hover:text-primary-500 transition-colors" href="#nosotros">\nNosotros\n</a> <a class="text-sm font-medium hover:text-primary-500 transition-colors" href="#testimonios">\nTestimonios\n</a> <a class="text-sm font-medium hover:text-primary-500 transition-colors" href="#contacto">\nContacto\n</a> </nav> <div class="flex items-center gap-4 lg:flex-row-reverse"> <a href="#contacto" class="bg-primary-600 text-nowrap text-primary-50 font-semibold py-2 px-4 cursor-pointer rounded-sm hover:bg-primary-700 hover:transition-all">Pide Presupuesto</a> </div> </nav></header></div> ', " ", ' <section id="contacto" class="w-full py-12 md:py-24 lg:py-32 bg-black text-zinc-50"> <div class="container mx-auto px-4 md:px-6"> <div class="grid items-center gap-6 lg:grid-cols-2 lg:gap-12"> <div class="space-y-4"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl prose prose-invert">Cont\xE1ctanos</h2> <p class="max-w-[600px] prose text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">\n\xBFEst\xE1s listo para llevar tu proyecto al siguiente nivel? <strong class="prose-invert">Cont\xE1ctanos</strong>\nhoy mismo para una consulta gratuita y obt\xE9n un presupuesto adaptado a tus necesidades.\n</p> <div class="space-y-2"> <div class="flex items-center"> ', ' <span class="prose prose-invert"><a href="tel:667757013" title="+34 667 757 013" class="hover:text-primary-400">+34 667 757 013</a></span> </div> <div class="flex items-center"> ', ' <span class="prose prose-invert"><a href="tel:696460538" title="+34 696 460 538" class="hover:text-primary-400">+34 696 460 538</a></span> </div> <div class="flex items-center"> ', ' <a href="mailto:info@novoformaserveis.es" title="info@novoformaserveis.es" class="prose prose-invert">info@novoformaserveis.es</a> </div> </div> </div> ', ' </div> </div> </section> <footer class="py-6 w-full px-4 md:px-6 border-t border-zinc-300 bg-zinc-900 text-zinc-50"> <div class="container mx-auto flex flex-col gap-2 sm:flex-row shrink-0 items-center"> <p class="text-xs text-zinc-400">\xA9 2024 Novoforma. Todos los derechos reservados.</p> <nav class="sm:ml-auto flex gap-4 sm:gap-6"> <a class="text-xs hover:underline underline-offset-4 text-zinc-400 hover:text-primary-500" href="/conditions-use">\nT\xE9rminos de Servicio\n</a> <a class="text-xs hover:underline underline-offset-4 text-zinc-400 hover:text-primary-500" href="/privacity">\nPrivacidad\n</a> </nav> </div> </footer> </body></html>'])), title, addAttribute(description, "content"), addAttribute(robots ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" : "noindex, nofollow", "content"), addAttribute(`https://www.novoformaserveis.es${Astro2.url.pathname}`, "href"), addAttribute(`https://www.novoformaserveis.es${Astro2.url.pathname}`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Novoforma",
    description,
    url: "https://www.novoformaserveis.es",
    logo: "https://www.novoformaserveis.es/logo.png",
    image: "https://www.novoformaserveis.es/social-img.png",
    telephone: ["+34 667 757 013", "+34 696 460 538"],
    email: "info@novoformaserveis.es",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3851,
      longitude: 2.1734
    },
    areaServed: {
      "@type": "City",
      name: "Barcelona"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Construcci\xF3n y Reformas",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construcci\xF3n de Obra Nueva",
            description: "Construcci\xF3n de viviendas y edificios desde los cimientos hasta los acabados"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reformas Integrales",
            description: "Reformas completas de viviendas y espacios comerciales"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Proyectos Comerciales",
            description: "Dise\xF1o y ejecuci\xF3n de reformas para oficinas y locales comerciales"
          }
        }
      ]
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Novoforma",
    url: "https://www.novoformaserveis.es",
    logo: "https://www.novoformaserveis.es/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34-667-757-013",
      contactType: "customer service",
      areaServed: "ES",
      availableLanguage: "es"
    },
    sameAs: [
      "https://www.facebook.com/novoforma",
      "https://www.instagram.com/novoforma"
    ]
  })), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Image", $$Image, { "src": "/logo.png", "alt": "Novoforma - Empresa de construcci\xF3n y reformas en Barcelona", "width": 214, "height": 161, "class": "w-14", "loading": "eager" }), renderComponent($$result, "Phone", Phone, { "className": "mr-2 h-4 w-4 text-primary-400" }), renderComponent($$result, "Phone", Phone, { "className": "mr-2 h-4 w-4 text-primary-400" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Whatsaap", $$Whatsaap, {}), renderComponent($$result, "Phone", Phone, { "className": "mr-2 h-4 w-4 text-primary-600" }), renderComponent($$result, "Phone", Phone, { "className": "mr-2 h-4 w-4 text-primary-600" }), renderComponent($$result, "Mail", Mail, { "className": "mr-2 h-4 w-4 text-primary-600" }), renderComponent($$result, "EmailForm", EmailForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/EmailForm", "client:component-export": "default" }));
}, "C:/Proyectos/novoforma/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
