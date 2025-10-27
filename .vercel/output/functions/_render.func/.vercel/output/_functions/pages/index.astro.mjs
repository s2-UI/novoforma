import { c as createComponent, r as renderTemplate, f as addAttribute, a as renderComponent, m as maybeRenderHead, b as createAstro, d as renderTransition } from '../chunks/astro/server_Bl5KEvft.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BQFebK9b.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BSJeS5Bs.mjs';
/* empty css                                 */
import { p as projects } from '../chunks/projects_D7fqbpf1.mjs';
/* empty css                                 */
import { Hammer, PaintBucket, Building2 } from 'lucide-react';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const heroImages = [
    "/projects/barcelona-balmes/barcelona-balmes-01.jpeg",
    "/projects/barcelona-balmes/barcelona-balmes-03.jpeg",
    "/projects/barcelona-balmes/barcelona-balmes-05.jpeg",
    "/projects/barcelona-balmes/barcelona-balmes-07.jpeg"
  ];
  const heroAlts = [
    "Reforma integral de piso en Barcelona - Sal\xF3n moderno",
    "Reforma de cocina completa Barcelona",
    "Reforma de ba\xF1o moderno Barcelona",
    "Espacios reformados Barcelona Novoforma"
  ];
  return renderTemplate(_a || (_a = __template(["", '<section class="relative w-full h-screen overflow-hidden bg-zinc-900" role="banner" aria-label="Hero section" data-astro-cid-bbe6dxrz> <!-- Slider de im\xE1genes de fondo --> <div class="absolute inset-0 z-0" role="img" aria-label="Im\xE1genes de proyectos de reformas" data-astro-cid-bbe6dxrz> ', ' <!-- Overlay degradado --> <div class="absolute inset-0 bg-gradient-to-br from-zinc-950/90 via-zinc-950/70 to-zinc-950/90" data-astro-cid-bbe6dxrz></div> </div> <!-- Contenido principal --> <div class="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center" data-astro-cid-bbe6dxrz> <div class="max-w-3xl mx-auto text-center text-white" data-astro-cid-bbe6dxrz> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-600/20 backdrop-blur-sm border border-primary-600/30 rounded-full" data-astro-cid-bbe6dxrz> <span class="text-xs font-semibold text-primary-300" data-astro-cid-bbe6dxrz>+20 A\xF1os de Experiencia</span> </div> <!-- T\xEDtulo --> <h1 class="text-4xl font-bold mb-6 tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in" data-astro-cid-bbe6dxrz>\nConstrucci\xF3n y Reformas<br data-astro-cid-bbe6dxrz> <span class="text-primary-400" data-astro-cid-bbe6dxrz>de Calidad</span> </h1> <!-- Descripci\xF3n --> <p class="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto animate-fade-in delay-100" data-astro-cid-bbe6dxrz>\nTransforma tu hogar o negocio con nuestros expertos en construcci\xF3n y reformas. \n        Soluciones personalizadas con los m\xE1s altos est\xE1ndares de calidad.\n</p> <!-- Botones CTA --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-200" data-astro-cid-bbe6dxrz> <a href="#contacto" class="group relative px-8 py-4 bg-primary-600 text-white font-semibold rounded-sm hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" data-astro-cid-bbe6dxrz> <span class="relative z-10" data-astro-cid-bbe6dxrz>Obtener Presupuesto</span> <div class="absolute inset-0 bg-primary-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" data-astro-cid-bbe6dxrz></div> </a> <a href="#galeria" class="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm" data-astro-cid-bbe6dxrz>\nVer Proyectos\n</a> </div> <!-- Indicadores (dots) --> <div class="flex gap-2 justify-center mt-12" data-astro-cid-bbe6dxrz> ', " </div> </div> </div> <!-- Script para el slider autom\xE1tico --> <script>\n    document.addEventListener('DOMContentLoaded', function() {\n      const slides = document.querySelectorAll('[data-slide]');\n      const dots = document.querySelectorAll('[data-dot]');\n      let currentSlide = 0;\n      const totalSlides = slides.length;\n\n      function goToSlide(index) {\n        // Ocultar todas las slides\n        slides.forEach((slide, i) => {\n          slide.classList.toggle('opacity-0', i !== index);\n          slide.classList.toggle('opacity-100', i === index);\n        });\n\n        // Actualizar dots\n        dots.forEach((dot, i) => {\n          if (i === index) {\n            dot.classList.remove('w-2', 'bg-white/40');\n            dot.classList.add('w-8', 'bg-primary-600');\n          } else {\n            dot.classList.remove('w-8', 'bg-primary-600');\n            dot.classList.add('w-2', 'bg-white/40');\n          }\n        });\n\n        currentSlide = index;\n      }\n\n      // Navegaci\xF3n por dots\n      dots.forEach((dot, index) => {\n        dot.addEventListener('click', () => {\n          goToSlide(index);\n        });\n      });\n\n      // Auto-play cada 5 segundos\n      setInterval(() => {\n        const nextSlide = (currentSlide + 1) % totalSlides;\n        goToSlide(nextSlide);\n      }, 5000);\n\n      // Pausar en hover\n      const heroSection = document.querySelector('[data-slide]')?.closest('section');\n      let intervalId = setInterval(() => {\n        const nextSlide = (currentSlide + 1) % totalSlides;\n        goToSlide(nextSlide);\n      }, 5000);\n\n      if (heroSection) {\n        heroSection.addEventListener('mouseenter', () => clearInterval(intervalId));\n        heroSection.addEventListener('mouseleave', () => {\n          intervalId = setInterval(() => {\n            const nextSlide = (currentSlide + 1) % totalSlides;\n            goToSlide(nextSlide);\n          }, 5000);\n        });\n      }\n    });\n  <\/script> <!-- Estilos de animaci\xF3n -->  </section>"])), maybeRenderHead(), heroImages.map((src, index) => renderTemplate`<div${addAttribute(`absolute inset-0 transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-0"}`, "class")}${addAttribute(index, "data-slide")} data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": heroAlts[index] || `Proyecto de reforma Barcelona ${index + 1} - Novoforma`, "width": 1920, "height": 1080, "class": "w-full h-full object-cover", "loading": index === 0 ? "eager" : "lazy", "data-astro-cid-bbe6dxrz": true })} </div>`), heroImages.map((_, index) => renderTemplate`<button${addAttribute(`w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? "bg-primary-600 w-8" : "bg-white/40 hover:bg-white/60"}`, "class")}${addAttribute(index, "data-dot")}${addAttribute(`Slide ${index + 1}`, "aria-label")} data-astro-cid-bbe6dxrz></button>`));
}, "C:/Proyectos/novoforma/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$GalleryImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GalleryImage;
  const { src, alt, link, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(alt, "title")} class="relative group cursor-pointer"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "width": 600, "height": 400, "class": "w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105", "loading": "lazy" })} <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"> <p class="text-white text-center p-4">${title}</p> </div> </a>`;
}, "C:/Proyectos/novoforma/src/components/GalleryImage.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="galeria" class="w-full py-12 md:py-24 lg:py-32"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-zinc-900">
Proyectos de Reformas y Construcción en Barcelona
</h2> <p class="text-lg text-zinc-600 max-w-2xl mx-auto">
Descubre algunos de nuestros proyectos realizados en Barcelona. Reformas integrales, construcción de obra nueva y proyectos comerciales.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${projects.slice(0, 5).map((project) => renderTemplate`${renderComponent($$result, "GalleryImage", $$GalleryImage, { "title": project.title, "src": `/projects/${project.slug}/${project.cover}`, "alt": project.alt, "link": `/projects/${project.slug}`, "data-astro-transition-scope": renderTransition($$result, "bgwxxdrl", "", `image-${project.slug}`) })}`)} </div> </div> </section>`;
}, "C:/Proyectos/novoforma/src/components/Gallery.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reformas y Construcci\xF3n en Barcelona | Expertos M\xE1s de 20 A\xF1os | Novoforma", "robots": true, "description": "Novoforma es tu empresa de confianza para reformas y construcci\xF3n en Barcelona. M\xE1s de 20 a\xF1os de experiencia en reformas integrales, construcci\xF3n de obra nueva y proyectos comerciales. Presupuesto gratuito y sin compromiso." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "Hero", $$Hero, {})} <section id="servicios" class="w-full py-12 md:py-24 lg:py-32 bg-zinc-100"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-zinc-900">
Servicios de Construcción y Reformas en Barcelona
</h2> <p class="text-lg text-zinc-600 max-w-2xl mx-auto">
Especialistas en reformas integrales, construcción de obra nueva y proyectos comerciales. Soluciones personalizadas con más de 20 años de experiencia en Barcelona.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <article class="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-zinc-100"> <div class="mb-4 p-4 rounded-full bg-primary-100"> ${renderComponent($$result2, "Hammer", Hammer, { "className": "h-12 w-12 text-primary-600", "aria-hidden": "true" })} </div> <h3 class="text-xl font-bold mb-3 text-zinc-900">Construcción de Obra Nueva</h3> <p class="text-zinc-600 leading-relaxed">
Proyectamos y construimos tu vivienda o edificio desde cero. Gestión integral del proyecto: arquitectura, licencias, ejecución y dirección de obra. Calidad garantizada en Barcelona y área metropolitana.
</p> </article> <article class="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-zinc-100"> <div class="mb-4 p-4 rounded-full bg-primary-100"> ${renderComponent($$result2, "PaintBucket", PaintBucket, { "className": "h-12 w-12 text-primary-600", "aria-hidden": "true" })} </div> <h3 class="text-xl font-bold mb-3 text-zinc-900">Reformas Integrales en Barcelona</h3> <p class="text-zinc-600 leading-relaxed">
Transformamos tu hogar o negocio con reformas completas. Reformas de pisos, baños y cocinas. Gestión completa: albañilería, fontanería, electricidad y acabados. Soluciones llave en mano.
</p> </article> <article class="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-zinc-100"> <div class="mb-4 p-4 rounded-full bg-primary-100"> ${renderComponent($$result2, "Building2", Building2, { "className": "h-12 w-12 text-primary-600", "aria-hidden": "true" })} </div> <h3 class="text-xl font-bold mb-3 text-zinc-900">Proyectos Comerciales y Oficinas</h3> <p class="text-zinc-600 leading-relaxed">
Reformas de locales comerciales, oficinas y espacios de trabajo en Barcelona. Diseño funcional, ejecución rápida y adaptada a tus horarios. Maximizamos el rendimiento de tu negocio.
</p> </article> </div> </div> </section> ${renderComponent($$result2, "Gallery", $$Gallery, {})} <section id="nosotros" class="w-full py-12 md:py-24 lg:py-32"> <div class="container mx-auto px-4 md:px-6"> <div class="grid justify-center items-center gap-8 lg:grid-cols-2"> <div class="flex flex-col justify-center space-y-4"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-900 mb-2">Empresa de Construcción y Reformas con 20 Años en Barcelona</h2> <p class="text-lg text-zinc-700 leading-relaxed"> <strong class="text-primary-600">Novoforma</strong> es una empresa líder en construcción y reformas en Barcelona con más de <strong>20 años de experiencia</strong>. 
              Nuestro equipo de arquitectos, aparejadores y profesionales especializados trabaja en toda el área metropolitana de Barcelona, ofreciendo soluciones completas 
              para reformas de viviendas, construcción de obra nueva y proyectos comerciales.
</p> <p class="text-lg text-zinc-700 leading-relaxed">
Nos especializamos en reformas integrales de pisos, baños, cocinas y locales comerciales. Gestionamos todo el proceso: permisos, licencias, 
              dirección de obra y entrega final. Garantizamos calidad, cumplimiento de plazos y presupuestos cerrados sin sorpresas.
</p> <ul class="grid gap-3 py-4"> <li class="flex items-center gap-3"> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"> <svg class="h-5 w-5 fill-current text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path> </svg> </div> <span class="text-zinc-700">Profesionales licenciados: arquitectos, aparejadores y especialistas certificados</span> </li> <li class="flex items-center gap-3"> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"> <svg class="h-5 w-5 fill-current text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path> </svg> </div> <span class="text-zinc-700">Compromiso con la calidad: certificados de calidad y seguros de responsabilidad civil</span> </li> <li class="flex items-center gap-3"> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"> <svg class="h-5 w-5 fill-current text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path> </svg> </div> <span class="text-zinc-700">Construcción sostenible: diseño innovador y prácticas respetuosas con el medio ambiente</span> </li> <li class="flex items-center gap-3"> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"> <svg class="h-5 w-5 fill-current text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path> </svg> </div> <span class="text-zinc-700">Presupuesto gratuito y sin compromiso en menos de 48 horas</span> </li> </ul> </div> <div class="hidden lg:flex items-center justify-center"> <div class="w-full max-w-md h-64 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg shadow-xl flex items-center justify-center"> <div class="text-center text-white px-8"> <p class="text-4xl font-black mb-2">20+</p> <p class="text-xl font-bold">Años Transformando<br>Espacios en Barcelona</p> </div> </div> </div> </div> </div> </section> <section id="testimonios" class="w-full py-12 md:py-24 lg:py-32 bg-zinc-100"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-zinc-900">
Opiniones de Nuestros Clientes en Barcelona
</h2> <p class="text-lg text-zinc-600 max-w-2xl mx-auto">
Miles de clientes satisfechos con nuestros servicios de reformas y construcción en Barcelona desde 2004
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${[
    {
      name: "Carlos Mart\xEDnez",
      role: "Propietario en el Eixample, Barcelona",
      comment: "Contratamos a Novoforma para una reforma integral de nuestro piso en el Eixample. El resultado super\xF3 nuestras expectativas. Profesionales, puntuales y con acabados de primera calidad. Totalmente recomendable."
    },
    {
      name: "Luc\xEDa Fern\xE1ndez",
      role: "Directora en Gr\xE0cia, Barcelona",
      comment: "Renovamos nuestra oficina en Gr\xE0cia con Novoforma. Cumplieron todos los plazos, trabajaron respetando nuestros horarios comerciales y el resultado ha elevado la imagen de nuestra empresa. Excelente servicio."
    },
    {
      name: "Javier L\xF3pez",
      role: "Administrador en Sant Mart\xED, Barcelona",
      comment: "Novoforma gestion\xF3 la renovaci\xF3n completa de nuestro edificio en Sant Mart\xED. Manejo profesional de permisos, coordinaci\xF3n con vecinos y ejecuci\xF3n impecable. Un equipo de confianza para proyectos complejos."
    }
  ].map((testimonial, index) => renderTemplate`<article class="flex flex-col bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-zinc-100"> <svg class="h-10 w-10 mb-4 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path> </svg> <p class="mb-6 text-zinc-700 italic flex-grow leading-relaxed">&ldquo;${testimonial.comment}&rdquo;</p> <div class="mt-auto"> <h3 class="font-bold text-zinc-900">${testimonial.name}</h3> <p class="text-sm text-zinc-600">${testimonial.role}</p> </div> </article>`)} </div> </div> </section> </main> ` })}`;
}, "C:/Proyectos/novoforma/src/pages/index.astro", void 0);

const $$file = "C:/Proyectos/novoforma/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
