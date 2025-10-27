import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bl5KEvft.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BQFebK9b.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - P\xE1gina no encontrada | Novoforma", "robots": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1 py-20"> <div class="container mx-auto px-4 md:px-6 max-w-4xl"> <div class="flex flex-col items-center justify-center text-center min-h-[60vh]"> <div class="mb-8"> <h1 class="text-9xl font-black text-primary-600 mb-4 leading-none">404</h1> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-zinc-900">
Página no encontrada
</h2> <p class="text-lg text-zinc-600 max-w-md mx-auto mb-8">
Lo sentimos, la página que estás buscando no existe o ha sido movida. 
            Puede que el enlace esté roto o que hayas ingresado una URL incorrecta.
</p> </div> <div class="flex flex-col sm:flex-row gap-4 items-center justify-center"> <a href="/" class="bg-primary-600 text-primary-50 font-semibold px-6 py-3 rounded-sm hover:bg-primary-700 transition-colors inline-block">
Volver al inicio
</a> <a href="#contacto" class="text-zinc-900 border-2 border-zinc-300 font-semibold px-6 py-3 rounded-sm hover:bg-zinc-100 transition-colors inline-block">
Contactarnos
</a> </div> <div class="mt-12 text-sm text-zinc-500"> <p>
O vuelve a la${" "} <a href="/" class="text-primary-600 hover:underline font-medium">
página principal
</a>${" "}
para explorar nuestros servicios.
</p> </div> </div> </div> </main> ` })}`;
}, "C:/Proyectos/novoforma/src/pages/404.astro", void 0);

const $$file = "C:/Proyectos/novoforma/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
