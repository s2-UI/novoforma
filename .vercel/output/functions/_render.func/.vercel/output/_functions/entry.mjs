import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_fSOi8iAf.mjs';
import { manifest } from './manifest_D_igiEwU.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/sendemail.json.astro.mjs');
const _page3 = () => import('./pages/conditions-use.astro.mjs');
const _page4 = () => import('./pages/privacity.astro.mjs');
const _page5 = () => import('./pages/projects/_id_.astro.mjs');
const _page6 = () => import('./pages/sitemap.xml.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/sendEmail.json.ts", _page2],
    ["src/pages/conditions-use.astro", _page3],
    ["src/pages/privacity.astro", _page4],
    ["src/pages/projects/[id].astro", _page5],
    ["src/pages/sitemap.xml.ts", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "aef570c3-6960-4729-a4e4-78943ebc7727",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
