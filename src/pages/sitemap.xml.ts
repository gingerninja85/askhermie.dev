import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const pages = import.meta.glob('./*.astro');
  const urls = Object.keys(pages)
    .map((file) => file.slice(2, -6))
    .filter((page) => page !== '404')
    .map((page) => new URL(page === 'index' ? '/' : `/${page}/`, site));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url.href}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
