<script lang="ts">
	import { Heading, Text, Breadcrumb } from "atomic-design-svelte";
	import Seo from "$lib/components/Seo.svelte";
	
	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Términos y Condiciones", href: "/terminos" }
	];
</script>

<Seo
	title="Términos y Condiciones - Publisol"
	description="Términos y condiciones de uso del sitio web de Publisol. Información sobre pedidos, garantías y condiciones de compra."
	url="/terminos"
/>

<section class="py-12 bg-surface-tertiary">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<Heading level="h1" class="mt-4 mb-2">Términos y Condiciones de Uso</Heading>
		<Text class="text-text-muted">
			Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
		</Text>
	</div>
</section>

<article class="py-16">
	<div class="container mx-auto px-4 max-w-4xl">
		<div class="prose prose-lg max-w-none">
			<Heading level="h2" class="mt-12 mb-4">1. Objeto</Heading>
			<Text class="mb-8">
				Los presentes Términos y Condiciones regulan el uso del sitio web de Publisol S.L., así como la relación entre Publisol y los usuarios que accedan o utilicen el sitio web. El acceso y uso del sitio web implica la aceptación de estos términos.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">2. Usuario</Heading>
			<Text class="mb-4">
				Se considera usuario a toda persona que acceda, navegue o utilice el sitio web de Publisol. El usuario se compromete a:
			</Text>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li><Text>Hacer un uso adecuado y lícito del sitio web.</Text></li>
				<li><Text>No utilizar el sitio web para fines contrarios a la ley, la moral o las buenas costumbres.</Text></li>
				<li><Text>No realizar actividades que puedan dañar, inutilizar o sobrecargar el sitio web.</Text></li>
				<li><Text>Proporcionar información veraz y actualizada en los formularios.</Text></li>
			</ul>
			
			<Heading level="h2" class="mt-12 mb-4">3. Uso del Sitio</Heading>
			<Text class="mb-4"><strong>3.1. Contenido permitido:</strong></Text>
			<ul class="list-disc space-y-2 mb-4 ml-6">
				<li><Text>Consulta de información sobre productos y servicios.</Text></li>
				<li><Text>Solicitud de presupuestos y consultas comerciales.</Text></li>
				<li><Text>Descarga de catálogos y materiales informativos.</Text></li>
				<li><Text>Suscripción a newsletter y comunicaciones.</Text></li>
			</ul>
			
			<Text class="mb-4"><strong>3.2. Prohibiciones:</strong></Text>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li><Text>Reproducir, copiar o distribuir contenidos sin autorización.</Text></li>
				<li><Text>Utilizar el sitio para actividades comerciales no autorizadas.</Text></li>
				<li><Text>Intentar acceder a áreas restringidas o vulnerar medidas de seguridad.</Text></li>
				<li><Text>Introducir virus, malware o cualquier código malicioso.</Text></li>
			</ul>
			
			<Heading level="h2" class="mt-12 mb-4">4. Propiedad Intelectual</Heading>
			<Text class="mb-4">
				Todos los contenidos del sitio web (textos, imágenes, logotipos, diseños, código fuente, etc.) son propiedad de Publisol S.L. o de terceros que han autorizado su uso.
			</Text>
			<Text class="mb-8">
				Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de dichos contenidos sin autorización expresa y por escrito de Publisol, salvo en los casos legalmente permitidos.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">5. Proceso de Compra / Presupuesto</Heading>
			
			<Text class="mb-4"><strong>5.1. Solicitud de presupuesto:</strong></Text>
			<Text class="mb-4">
				La solicitud de presupuesto a través del formulario del sitio web no constituye una oferta vinculante, sino una solicitud de información comercial. Publisol se reserva el derecho de aceptar o rechazar cualquier solicitud.
			</Text>
			
			<Text class="mb-4"><strong>5.2. Aceptación del presupuesto:</strong></Text>
			<Text class="mb-4">
				El presupuesto presentado por Publisol tendrá validez durante el plazo indicado en el mismo. La aceptación del presupuesto por parte del cliente se realizará mediante confirmación escrita o electrónica.
			</Text>
			
			<Text class="mb-4"><strong>5.3. Producción y plazos:</strong></Text>
			<Text class="mb-4">
				Los plazos de producción y entrega indicados en el presupuesto son estimados y pueden verse afectados por circunstancias ajenas a Publisol. Se informará al cliente de cualquier retraso significativo.
			</Text>
			
			<Text class="mb-4"><strong>5.4. Entrega:</strong></Text>
			<Text class="mb-4">
				La entrega se realizará en el lugar y forma acordados. El cliente deberá verificar el estado de la mercancía en el momento de la recepción y comunicar cualquier incidencia en un plazo máximo de 48 horas.
			</Text>
			
			<Text class="mb-4"><strong>5.5. Devoluciones y cambios:</strong></Text>
			<Text class="mb-8">
				Los productos personalizados no admiten devolución salvo defecto de fabricación o error imputable a Publisol. En caso de defecto, se procederá a la reposición o reembolso según corresponda.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">6. Precios y Pagos</Heading>
			<Text class="mb-4">
				Los precios indicados en el sitio web son orientativos y pueden variar. Los precios definitivos se establecerán en el presupuesto personalizado.
			</Text>
			<Text class="mb-4">
				Los precios no incluyen IVA salvo indicación expresa. Las formas de pago aceptadas se indicarán en cada presupuesto.
			</Text>
			<Text class="mb-8">
				En caso de pedidos de importe elevado, Publisol podrá solicitar un anticipo antes del inicio de la producción.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">7. Garantías</Heading>
			<Text class="mb-4">
				Publisol garantiza que los productos entregados cumplen con las especificaciones acordadas y con los estándares de calidad establecidos.
			</Text>
			<Text class="mb-4">
				En caso de productos defectuosos o errores de producción imputables a Publisol, se procederá a la reposición sin coste adicional para el cliente.
			</Text>
			<Text class="mb-8">
				La garantía no cubre daños derivados de un uso inadecuado, manipulación incorrecta o desgaste normal del producto.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">8. Limitación de Responsabilidad</Heading>
			<Text class="mb-4">
				Publisol no se hace responsable de:
			</Text>
			<ul class="list-disc space-y-2 mb-8 ml-6">
				<li><Text>Daños derivados de la imposibilidad de acceso al sitio web por causas ajenas a Publisol.</Text></li>
				<li><Text>Decisiones adoptadas únicamente en base a la información contenida en el sitio web.</Text></li>
				<li><Text>Contenidos o servicios de sitios web de terceros enlazados desde este sitio.</Text></li>
				<li><Text>Daños causados por virus o elementos maliciosos introducidos por terceros.</Text></li>
			</ul>
			
			<Heading level="h2" class="mt-12 mb-4">9. Modificaciones</Heading>
			<Text class="mb-8">
				Publisol se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web. Se recomienda su revisión periódica.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">10. Ley Aplicable y Jurisdicción</Heading>
			<Text class="mb-4">
				Los presentes Términos y Condiciones se rigen por la legislación española.
			</Text>
			<Text class="mb-8">
				Para la resolución de cualquier conflicto que pudiera derivarse del acceso o uso de este sitio web, el usuario y Publisol acuerdan someterse a los Juzgados y Tribunales de Madrid, salvo disposición legal en contrario.
			</Text>
			
			<div class="mt-12 p-6 bg-primary/5 rounded-lg">
				<Text class="font-semibold mb-2">¿Tienes dudas sobre estos términos?</Text>
				<Text>
					Puedes contactarnos en <a href="mailto:info@publisol.com" class="text-primary hover:underline">info@publisol.com</a> o consultar nuestra <a href="/aviso-legal" class="text-primary hover:underline">Aviso Legal</a>.
				</Text>
			</div>
		</div>
	</div>
</article>

