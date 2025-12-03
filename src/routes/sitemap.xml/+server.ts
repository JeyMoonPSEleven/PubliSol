import type { RequestHandler } from './$types';

const site = 'https://publisol.com';

// Rutas estáticas principales
const staticRoutes = [
	{ url: '', changefreq: 'daily', priority: 1.0 },
	{ url: '/productos', changefreq: 'weekly', priority: 0.9 },
	{ url: '/productos/agendas-escolares', changefreq: 'weekly', priority: 0.8 },
	{ url: '/productos/merchandising', changefreq: 'weekly', priority: 0.8 },
	{ url: '/productos/papeleria', changefreq: 'weekly', priority: 0.8 },
	{ url: '/productos/sostenibles', changefreq: 'weekly', priority: 0.8 },
	{ url: '/productos/textil', changefreq: 'weekly', priority: 0.8 },
	{ url: '/nosotros', changefreq: 'monthly', priority: 0.7 },
	{ url: '/contacto', changefreq: 'monthly', priority: 0.8 },
	{ url: '/blog', changefreq: 'weekly', priority: 0.7 },
	{ url: '/faq', changefreq: 'monthly', priority: 0.6 },
	{ url: '/catalogos', changefreq: 'monthly', priority: 0.6 },
	{ url: '/aviso-legal', changefreq: 'yearly', priority: 0.3 },
	{ url: '/privacidad', changefreq: 'yearly', priority: 0.3 },
	{ url: '/cookies', changefreq: 'yearly', priority: 0.3 },
	{ url: '/terminos', changefreq: 'yearly', priority: 0.3 }
];

// Generar XML del sitemap
function generateSitemap(routes: typeof staticRoutes): string {
	const urls = routes
		.map(
			(route) => `  <url>
    <loc>${site}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
		)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const GET: RequestHandler = async () => {
	const sitemap = generateSitemap(staticRoutes);

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600, s-maxage=3600'
		}
	});
};

