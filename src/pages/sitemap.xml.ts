import { resourceEntries } from '../data/resources';
import { skills } from '../data/skills';
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const paths = ['/', '/about/', '/resources/', ...skills.map(skill => `/skills/${skill.slug}/`), ...resourceEntries.map(resource => resource.href)];
  const urls = paths.map(path => `  <url><loc>${new URL(path, site)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
