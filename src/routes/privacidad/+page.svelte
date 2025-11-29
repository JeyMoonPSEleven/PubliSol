<script lang="ts">
	import { Heading, Text, Breadcrumb, Card } from "atomic-design-svelte";
	import { Link } from "atomic-design-svelte";
	import Seo from "$lib/components/Seo.svelte";
	
	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Política de Privacidad", href: "/privacidad" }
	];
</script>

<Seo
	title="Política de Privacidad - Publisol | RGPD"
	description="Política de privacidad de Publisol. Información sobre el tratamiento de datos personales conforme al RGPD y LOPDGDD."
	url="/privacidad"
/>

<section class="py-12 bg-surface-tertiary">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<Heading level="h1" class="mt-4 mb-2">Política de Privacidad</Heading>
		<Text class="text-text-muted">
			Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
		</Text>
	</div>
</section>

<article class="py-16">
	<div class="container mx-auto px-4 max-w-4xl">
		<div class="prose prose-lg max-w-none">
			<Text class="mb-8">
				En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (en adelante, RGPD), así como en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios del presente sitio web acerca de la política de privacidad aplicada en el tratamiento de los datos personales.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">1. Responsable del Tratamiento</Heading>
			<Card padding="md" class="mb-8">
				<ul class="list-none space-y-2">
					<li><Text><strong>Nombre / Denominación:</strong> Publisol S.L.</Text></li>
					<li><Text><strong>NIF:</strong> B-XXXXXXXX</Text></li>
					<li><Text><strong>Domicilio:</strong> Calle Ejemplo, 123, 28001 Madrid, España</Text></li>
					<li><Text><strong>Teléfono:</strong> +34 XXX XXX XXX</Text></li>
					<li><Text><strong>Correo electrónico:</strong> privacidad@publisol.com</Text></li>
				</ul>
			</Card>
			
			<Heading level="h2" class="mt-12 mb-4">2. Datos que Recopilamos</Heading>
			<Text class="mb-4"><strong>2.1. Datos de navegación:</strong></Text>
			<Text class="mb-4">
				Información sobre la navegación del usuario en el sitio web, dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia, etc.
			</Text>
			
			<Text class="mb-4"><strong>2.2. Datos del formulario de contacto:</strong></Text>
			<Text class="mb-4">
				Datos identificativos básicos (nombre, apellidos, teléfono, correo electrónico, empresa/centro educativo) y los relativos a la consulta o solicitud de presupuesto planteada.
			</Text>
			
			<Text class="mb-4"><strong>2.3. Datos de suscripción newsletter:</strong></Text>
			<Text class="mb-4">
				Dirección de correo electrónico y, en su caso, nombre y empresa, para el envío de comunicaciones comerciales.
			</Text>
			
			<Text class="mb-4"><strong>2.4. Cookies:</strong></Text>
			<Text class="mb-8">
				Este sitio web utiliza cookies. Para más información, consulte nuestra <Link href="/cookies" class="text-primary hover:underline">Política de Cookies</Link>.
			</Text>
			
			<Text class="mb-4"><strong>Veracidad de los datos:</strong></Text>
			<Text class="mb-8">
				El usuario garantiza la autenticidad, exactitud y veracidad de los datos facilitados, siendo responsable de los perjuicios que la inexactitud de estos pudiera causar a Publisol o a terceros.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">3. Finalidad del Tratamiento</Heading>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li><Text>Gestión de consultas y solicitudes de presupuesto realizadas a través del formulario de contacto.</Text></li>
				<li><Text>Envío de comunicaciones comerciales (con consentimiento expreso del usuario) sobre productos, servicios, ofertas y novedades.</Text></li>
				<li><Text>Mejora de la experiencia de usuario y análisis estadístico del uso del sitio web.</Text></li>
				<li><Text>Cumplimiento de obligaciones legales y administrativas.</Text></li>
			</ul>
			
			<Heading level="h2" class="mt-12 mb-4">4. Base Legal</Heading>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li><Text><strong>Consentimiento del interesado:</strong> Para el envío de comunicaciones comerciales y newsletter.</Text></li>
				<li><Text><strong>Ejecución de contrato:</strong> Para la gestión de solicitudes de presupuesto y contratación de servicios.</Text></li>
				<li><Text><strong>Interés legítimo:</strong> Para el análisis estadístico y mejora del sitio web.</Text></li>
				<li><Text><strong>Cumplimiento de obligación legal:</strong> Para el cumplimiento de obligaciones fiscales, contables y administrativas.</Text></li>
			</ul>
			
			<Heading level="h2" class="mt-12 mb-4">5. Conservación de Datos</Heading>
			<Text class="mb-4">
				Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y, en todo caso, durante los plazos legalmente establecidos:
			</Text>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li><Text><strong>Formulario de contacto:</strong> Durante el tiempo necesario para atender la consulta o solicitud planteada.</Text></li>
				<li><Text><strong>Newsletter:</strong> Hasta que el usuario se dé de baja o retire su consentimiento.</Text></li>
				<li><Text><strong>Datos contractuales:</strong> Durante la vigencia del contrato y, posteriormente, durante los plazos legalmente exigidos (generalmente 5 años en materia fiscal y contable).</Text></li>
			</ul>
			
			<Heading level="h2" class="mt-12 mb-4">6. Destinatarios</Heading>
			<Text class="mb-4">
				Los datos personales no se cederán a terceros salvo:
			</Text>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li><Text>Cuando sea necesario para la prestación del servicio (proveedores de hosting, servicios de email marketing, etc.), siempre con las garantías adecuadas.</Text></li>
				<li><Text>Cuando exista una obligación legal.</Text></li>
				<li><Text>Cuando el usuario haya dado su consentimiento expreso.</Text></li>
			</ul>
			<Text class="mb-8">
				No se realizarán transferencias internacionales de datos fuera del Espacio Económico Europeo, salvo que se garanticen las medidas adecuadas de protección.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">7. Derechos del Usuario</Heading>
			<Text class="mb-4">
				El usuario podrá ejercer, en cualquier momento y de forma gratuita, los siguientes derechos:
			</Text>
			<ul class="list-disc space-y-2 mb-4 ml-6">
				<li><Text><strong>Acceso:</strong> Obtener información sobre sus datos personales que tratamos.</Text></li>
				<li><Text><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</Text></li>
				<li><Text><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</Text></li>
				<li><Text><strong>Limitación:</strong> Solicitar la limitación del tratamiento en determinadas circunstancias.</Text></li>
				<li><Text><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para determinadas finalidades.</Text></li>
				<li><Text><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado y de uso común.</Text></li>
				<li><Text><strong>Retirada del consentimiento:</strong> Retirar el consentimiento prestado en cualquier momento.</Text></li>
			</ul>
			
			<Card padding="md" class="mb-8 bg-primary/5">
				<Text class="font-semibold mb-2">¿Cómo ejercer tus derechos?</Text>
				<Text>
					Puedes ejercer tus derechos mediante correo electrónico dirigido a <strong>privacidad@publisol.com</strong>, indicando en el asunto "Ejercicio de Derechos RGPD" y acompañando copia de tu DNI o documento identificativo válido.
				</Text>
				<Text class="mt-4">
					En caso de discrepancia, tienes derecho a presentar una reclamación ante la <Link href="https://www.aepd.es" target="_blank" class="text-primary hover:underline">Agencia Española de Protección de Datos (AEPD)</Link>.
				</Text>
			</Card>
			
			<Heading level="h2" class="mt-12 mb-4">8. Medidas de Seguridad</Heading>
			<Text class="mb-4">
				Publisol aplica las medidas técnicas y organizativas necesarias para garantizar la confidencialidad, integridad y disponibilidad de los datos personales, adaptadas al estado de la técnica y al riesgo del tratamiento:
			</Text>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li><Text>Cifrado SSL/TLS en todas las comunicaciones.</Text></li>
				<li><Text>Servidores seguros con medidas de protección adecuadas.</Text></li>
				<li><Text>Copias de seguridad periódicas.</Text></li>
				<li><Text>Control de acceso y autenticación.</Text></li>
			</ul>
			
			<Heading level="h2" class="mt-12 mb-4">9. Reclamaciones</Heading>
			<Text class="mb-4">
				Si consideras que el tratamiento de tus datos personales no se ajusta a la normativa vigente, puedes presentar una reclamación ante la autoridad de control competente:
			</Text>
			<Text class="mb-8">
				<strong>Autoridad de Control:</strong> <Link href="https://www.aepd.es" target="_blank" class="text-primary hover:underline">Agencia Española de Protección de Datos (AEPD)</Link><br />
				<strong>Dirección:</strong> C/ Jorge Juan, 6, 28001 Madrid<br />
				<strong>Teléfono:</strong> 912 663 517<br />
				<strong>Web:</strong> www.aepd.es
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">10. Modificaciones</Heading>
			<Text class="mb-8">
				La presente Política de Privacidad podrá ser actualizada en cualquier momento para adaptarla a cambios normativos, criterios de la AEPD o necesidades propias de la prestación de servicios. Publisol se reserva el derecho a modificar esta política sin previo aviso, recomendándose su revisión periódica.
			</Text>
		</div>
	</div>
</article>

