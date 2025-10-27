import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BH9qOghm.mjs';
import 'es-module-lexer';
import { e as decodeKey } from './chunks/astro/server_Bl5KEvft.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Proyectos/novoforma/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/page.BNYwb576.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/hoisted.Dn2bebqY.js"},{"type":"external","value":"/_assets/page.BNYwb576.js"}],"styles":[{"type":"external","src":"/_assets/conditions-use.Du5oymvQ.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/page.BNYwb576.js"}],"styles":[],"routeData":{"route":"/api/sendemail.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.json.ts","pathname":"/api/sendEmail.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/hoisted.Dn2bebqY.js"},{"type":"external","value":"/_assets/page.BNYwb576.js"}],"styles":[{"type":"external","src":"/_assets/conditions-use.Du5oymvQ.css"}],"routeData":{"route":"/conditions-use","isIndex":false,"type":"page","pattern":"^\\/conditions-use\\/?$","segments":[[{"content":"conditions-use","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/conditions-use.astro","pathname":"/conditions-use","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/hoisted.Dn2bebqY.js"},{"type":"external","value":"/_assets/page.BNYwb576.js"}],"styles":[{"type":"external","src":"/_assets/conditions-use.Du5oymvQ.css"}],"routeData":{"route":"/privacity","isIndex":false,"type":"page","pattern":"^\\/privacity\\/?$","segments":[[{"content":"privacity","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacity.astro","pathname":"/privacity","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/page.BNYwb576.js"}],"styles":[],"routeData":{"route":"/sitemap.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap\\.xml\\/?$","segments":[[{"content":"sitemap.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap.xml.ts","pathname":"/sitemap.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/hoisted.Dn2bebqY.js"},{"type":"external","value":"/_assets/page.BNYwb576.js"}],"styles":[{"type":"external","src":"/_assets/conditions-use.Du5oymvQ.css"},{"type":"inline","content":"@keyframes fade-in{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in[data-astro-cid-bbe6dxrz]{animation:fade-in 1s ease-out forwards}.delay-100[data-astro-cid-bbe6dxrz]{animation-delay:.2s;opacity:0}.delay-200[data-astro-cid-bbe6dxrz]{animation-delay:.4s;opacity:0}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Proyectos/novoforma/src/pages/projects/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Proyectos/novoforma/src/components/Gallery.astro",{"propagation":"in-tree","containsHead":false}],["C:/Proyectos/novoforma/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Proyectos/novoforma/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Proyectos/novoforma/src/pages/conditions-use.astro",{"propagation":"none","containsHead":true}],["C:/Proyectos/novoforma/src/pages/privacity.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/sendEmail.json@_@ts":"pages/api/sendemail.json.astro.mjs","\u0000@astro-page:src/pages/conditions-use@_@astro":"pages/conditions-use.astro.mjs","\u0000@astro-page:src/pages/privacity@_@astro":"pages/privacity.astro.mjs","\u0000@astro-page:src/pages/projects/[id]@_@astro":"pages/projects/_id_.astro.mjs","\u0000@astro-page:src/pages/sitemap.xml@_@ts":"pages/sitemap.xml.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Proyectos/novoforma/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Proyectos/novoforma/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_D_igiEwU.mjs","@/components/EmailForm":"_assets/EmailForm.F8Ue_9G4.js","@astrojs/react/client.js":"_assets/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_assets/hoisted.Dn2bebqY.js","astro:scripts/page.js":"_assets/page.BNYwb576.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_assets/conditions-use.Du5oymvQ.css","/02.jpeg","/03.jpeg","/04.jpeg","/05.jpeg","/06.jpeg","/07.jpeg","/08.jpeg","/favicon.svg","/logo.png","/robots.txt","/sitemap.xml","/social-img.jpeg","/_assets/client.BIGLHmRd.js","/_assets/EmailForm.F8Ue_9G4.js","/_assets/hoisted.Dn2bebqY.js","/_assets/index.Bel2lkwj.js","/_assets/index.DhYZZe0J.js","/_assets/page.BNYwb576.js","/_assets/server.browser.DKI00ixF.js","/projects/barcelona-balmes/barcelona-balmes-01.jpeg","/projects/barcelona-balmes/barcelona-balmes-02.jpeg","/projects/barcelona-balmes/barcelona-balmes-03.jpeg","/projects/barcelona-balmes/barcelona-balmes-04.jpeg","/projects/barcelona-balmes/barcelona-balmes-05.jpeg","/projects/barcelona-balmes/barcelona-balmes-06.jpeg","/projects/barcelona-balmes/barcelona-balmes-07.jpeg","/projects/barcelona-balmes/barcelona-balmes-08.jpeg","/projects/barcelona-balmes/barcelona-balmes-09.jpeg","/projects/barcelona-balmes/barcelona-balmes-10.jpeg","/projects/barcelona-balmes/barcelona-balmes-thumbail.jpeg","/projects/barcelona-example/barcelona-example-01.jpeg","/projects/barcelona-example/barcelona-example-02.jpeg","/projects/barcelona-example/barcelona-example-03.jpeg","/projects/barcelona-example/barcelona-example-04.jpeg","/projects/barcelona-example/barcelona-example-05.jpeg","/projects/barcelona-example/barcelona-example-06.jpeg","/projects/barcelona-example/barcelona-example-07.jpeg","/projects/barcelona-example/barcelona-example-08.jpeg","/projects/barcelona-example/barcelona-example-09.jpeg","/projects/barcelona-example/barcelona-example-10.jpeg","/projects/barcelona-example/barcelona-example-thumbail.jpeg","/_assets/page.BNYwb576.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"9TGRX/19qjGVDt/bUNE/Mh0BqJ5npLL+VEiN8c0SJdg=","experimentalEnvGetSecretEnabled":false});

export { manifest };
