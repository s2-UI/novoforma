import { p as projects } from '../chunks/projects_D7fqbpf1.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  const baseUrl = "https://www.novoformaserveis.es";
  const currentDate = (/* @__PURE__ */ new Date()).toISOString();
  const staticPages = [
    {
      url: `${baseUrl}/`,
      changefreq: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/#servicios`,
      changefreq: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/#galeria`,
      changefreq: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/#nosotros`,
      changefreq: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/#testimonios`,
      changefreq: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/#contacto`,
      changefreq: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/conditions-use`,
      changefreq: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/privacity`,
      changefreq: "yearly",
      priority: 0.3
    }
  ];
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changefreq: "monthly",
    priority: 0.8
  }));
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.concat(projectPages).map((page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
