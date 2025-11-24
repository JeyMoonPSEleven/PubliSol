<script lang="ts">
	import { Footer, Link, Input, Button } from "atomic-design-svelte";
	import { Heading, Text } from "atomic-design-svelte";
	
	let email = $state('');
	
	function subscribeNewsletter() {
		console.log('Subscribing email:', email);
		alert('Gracias por suscribirte!');
		email = '';
	}
</script>

<Footer>
	{#snippet children()}
		<div class="space-y-8 sm:space-y-12">
			<!-- Newsletter Section Mejorada -->
			<div class="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 rounded-xl p-6 sm:p-8 text-center border border-primary/20 shadow-lg">
				<div class="flex items-center justify-center gap-2 mb-4">
					<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					<Heading level="h3" class="text-2xl sm:text-3xl">Suscríbete a nuestra newsletter</Heading>
				</div>
				<Text class="mb-6 text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
					Recibe novedades, ofertas exclusivas y consejos para tus proyectos de personalización
				</Text>
				<form 
					class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" 
					onsubmit={(e) => { e.preventDefault(); subscribeNewsletter(); }}
				>
					<Input 
						type="email" 
						placeholder="tu@email.com" 
						bindValue={email}
						class="flex-1 min-h-[48px] text-base"
						inputmode="email"
						required
					/>
					<Button intent="primary" class="min-h-[48px] text-base w-full sm:w-auto px-6" type="submit">
						Suscribirse
					</Button>
				</form>
				<div class="flex items-center justify-center gap-2 mt-4">
					<svg class="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
					<Text class="text-sm text-text-muted">
						No enviamos spam. Darse de baja en cualquier momento
					</Text>
				</div>
			</div>
			
			<!-- Main Footer Content -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
				<!-- Columna 1: Identidad -->
				<div>
					<Link href="/" class="flex items-center mb-4">
						<span class="text-2xl font-bold text-primary">Publisol</span>
					</Link>
					<Text class="text-sm text-text-muted mb-4 leading-relaxed">
						Tu socio en personalización desde 1995. Agendas y merchandising de calidad para colegios y empresas.
					</Text>
					<div class="flex flex-wrap gap-2 mb-4">
						<span class="inline-flex items-center gap-1 text-xs bg-success/10 text-success px-3 py-1.5 rounded-full font-medium border border-success/20">
							<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							ISO 9001
						</span>
						<span class="inline-flex items-center gap-1 text-xs bg-success/10 text-success px-3 py-1.5 rounded-full font-medium border border-success/20">
							<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							FSC
						</span>
					</div>
				</div>
				
				<!-- Columna 2: Productos -->
				<div>
					<Heading level="h4" class="mb-4 text-text-default">Productos</Heading>
					<ul class="space-y-2.5 text-sm">
						<li>
							<Link href="/productos/agendas-escolares" class="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
								<svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
								<span>Agendas Escolares</span>
							</Link>
						</li>
						<li>
							<Link href="/productos/agendas-personalizadas" class="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
								<svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
								<span>Agendas Personalizadas</span>
							</Link>
						</li>
						<li>
							<Link href="/productos/merchandising-empresarial" class="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
								<svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
								<span>Merchandising Empresarial</span>
							</Link>
						</li>
						<li>
							<Link href="/productos/textil-corporativo" class="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
								<svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
								<span>Textil Corporativo</span>
							</Link>
						</li>
						<li>
							<Link href="/productos/material-oficina" class="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
								<svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
								<span>Material de Oficina</span>
							</Link>
						</li>
						<li>
							<Link href="/productos/papeleria-premium" class="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
								<svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
								<span>Papelería Premium</span>
							</Link>
						</li>
						<li>
							<Link href="/productos/sostenibles" class="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
								<svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
								<span>Productos Sostenibles</span>
							</Link>
						</li>
						<li class="pt-2 border-t border-border-default mt-2">
							<Link href="/productos" class="text-primary hover:text-primary-hover font-semibold transition-colors flex items-center gap-2">
								<span>Ver Catálogo Completo</span>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</li>
					</ul>
				</div>
				
				<!-- Columna 3: Empresa -->
				<div>
					<Heading level="h4" class="mb-4">Conoce Publisol</Heading>
					<ul class="space-y-2 text-sm">
						<li><Link href="/nosotros" class="text-text-muted hover:text-primary">Sobre Nosotros</Link></li>
						<li><Link href="/nosotros#equipo" class="text-text-muted hover:text-primary">Nuestro Equipo</Link></li>
						<li><Link href="/nosotros#historia" class="text-text-muted hover:text-primary">Historia y Valores</Link></li>
						<li><Link href="/nosotros#sostenibilidad" class="text-text-muted hover:text-primary">Sostenibilidad</Link></li>
						<li><Link href="/contacto" class="text-text-muted hover:text-primary">Contacto</Link></li>
					</ul>
				</div>
				
				<!-- Columna 4: Recursos -->
				<div>
					<Heading level="h4" class="mb-4">Recursos Útiles</Heading>
					<ul class="space-y-2 text-sm">
						<li><Link href="/blog" class="text-text-muted hover:text-primary">Blog / Noticias</Link></li>
						<li><Link href="/catalogos" class="text-text-muted hover:text-primary">Catálogos Descargables</Link></li>
						<li><Link href="/faq" class="text-text-muted hover:text-primary">Preguntas Frecuentes</Link></li>
						<li><Link href="/catalogos#guia-tallas" class="text-text-muted hover:text-primary">Guía de Tallas</Link></li>
						<li><Link href="/catalogos#carta-colores" class="text-text-muted hover:text-primary">Carta de Colores</Link></li>
					</ul>
				</div>
				
				<!-- Columna 5: Atención al Cliente -->
				<div>
					<Heading level="h4" class="mb-4 text-text-default">¿Necesitas ayuda?</Heading>
					<div class="space-y-4 text-sm">
						<div class="flex items-start gap-3">
							<svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<div>
								<Text class="font-semibold text-text-default">Teléfono</Text>
								<Link href="tel:+34XXXXXXXXX" class="text-text-muted hover:text-primary transition-colors block">+34 XXX XXX XXX</Link>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<div>
								<Text class="font-semibold text-text-default">Email</Text>
								<Link href="mailto:info@publisol.com" class="text-text-muted hover:text-primary transition-colors block">info@publisol.com</Link>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<div>
								<Text class="font-semibold text-text-default">Horario</Text>
								<Text class="text-text-muted">Lun-Vie: 9:00 - 18:00<br />Sáb: 10:00 - 14:00</Text>
							</div>
						</div>
						<Button intent="primary" class="w-full mt-4 min-h-[48px]" href="/contacto">Solicitar Presupuesto</Button>
					</div>
				</div>
			</div>
			
			<!-- Bottom Bar Mejorado -->
			<div class="border-t border-border-default pt-6 sm:pt-8">
				<div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
					<div class="text-text-muted text-center sm:text-left">
						© 2025 Publisol. Todos los derechos reservados.
					</div>
					<div class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-text-muted">
						<Link href="/terminos" class="hover:text-primary transition-colors min-h-[44px] flex items-center">Términos</Link>
						<span class="text-border-default">•</span>
						<Link href="/privacidad" class="hover:text-primary transition-colors min-h-[44px] flex items-center">Privacidad</Link>
						<span class="text-border-default">•</span>
						<Link href="/cookies" class="hover:text-primary transition-colors min-h-[44px] flex items-center">Cookies</Link>
						<span class="text-border-default">•</span>
						<Link href="/aviso-legal" class="hover:text-primary transition-colors min-h-[44px] flex items-center">Aviso Legal</Link>
					</div>
					<div class="flex gap-3 sm:gap-4">
						<a href="#" class="text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-surface-tertiary" aria-label="LinkedIn">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
							</svg>
						</a>
						<a href="#" class="text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-surface-tertiary" aria-label="Instagram">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
							</svg>
						</a>
						<a href="#" class="text-text-muted hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-surface-tertiary" aria-label="Facebook">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Footer>

