import type { Handle } from '@sveltejs/kit';

/**
 * Server hooks para añadir security headers y optimizaciones
 * Se ejecuta en cada request al servidor
 */
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Security Headers
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set(
		'Permissions-Policy',
		'geolocation=(), microphone=(), camera=(), payment=()'
	);

	// Content Security Policy (CSP)
	// Ajustar según las necesidades del proyecto
	const csp = [
		"default-src 'self'",
		"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://www.google-analytics.com",
		"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
		"font-src 'self' https://fonts.gstatic.com data:",
		"img-src 'self' data: https: blob:",
		"connect-src 'self' https://api.emailjs.com https://www.google-analytics.com https://www.google.com",
		"frame-src 'self' https://www.google.com",
		"object-src 'none'",
		"base-uri 'self'",
		"form-action 'self'",
		"frame-ancestors 'none'",
		"upgrade-insecure-requests"
	].join('; ');

	response.headers.set('Content-Security-Policy', csp);

	// HSTS (HTTP Strict Transport Security)
	// Solo en producción con HTTPS
	if (event.url.protocol === 'https:') {
		response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
	}

	// Cache Control para assets estáticos
	if (event.url.pathname.startsWith('/_app/') || event.url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2)$/)) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	}

	// No cache para HTML
	if (event.url.pathname.endsWith('.html') || !event.url.pathname.includes('.')) {
		response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
		response.headers.set('Pragma', 'no-cache');
		response.headers.set('Expires', '0');
	}

	return response;
};

