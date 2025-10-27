import type { APIRoute } from 'astro';
import { projects } from '@/data/projects';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://www.novoformaserveis.es';
  const currentDate = new Date().toISOString();

  // Páginas estáticas
  const staticPages = [
    {
      url: `${baseUrl}/`,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#servicios`,
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#galeria`,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#nosotros`,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#testimonios`,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contacto`,
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conditions-use`,
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacity`,
      changefreq: 'yearly',
      priority: 0.3,
    },
  ];

  // Páginas dinámicas de proyectos
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changefreq: 'monthly',
    priority: 0.8,
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.concat(projectPages).map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
