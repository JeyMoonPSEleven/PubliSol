<script lang="ts">
	import { Heading, Text, Breadcrumb } from "atomic-design-svelte";
	
	const breadcrumbItems = [
		{ label: "Inicio", href: "/" },
		{ label: "Aviso Legal", href: "/aviso-legal" }
	];
</script>

<section class="py-12 bg-surface-tertiary">
	<div class="container mx-auto px-4">
		<Breadcrumb items={breadcrumbItems} />
		<Heading level="h1" class="mt-4 mb-2">Aviso Legal</Heading>
		<Text class="text-text-muted">
			Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
		</Text>
	</div>
</section>

<article class="py-16">
	<div class="container mx-auto px-4 max-w-4xl">
		<div class="prose prose-lg max-w-none">
			<Text class="mb-8">
				En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa a los usuarios de los datos identificativos del titular del presente sitio web.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">1. Datos Identificativos</Heading>
			<ul class="list-none space-y-2 mb-8">
				<li><Text><strong>Titular:</strong> Publisol S.L.</Text></li>
				<li><Text><strong>NIF:</strong> B-XXXXXXXX</Text></li>
				<li><Text><strong>Domicilio:</strong> Calle Ejemplo, 123, 28001 Madrid, España</Text></li>
				<li><Text><strong>Email:</strong> info@publisol.com</Text></li>
				<li><Text><strong>Teléfono:</strong> +34 XXX XXX XXX</Text></li>
				<li><Text><strong>Registro Mercantil:</strong> [Datos del registro]</Text></li>
			</ul>
			
			<Heading level="h2" class="mt-12 mb-4">2. Objeto</Heading>
			<Text class="mb-8">
				El presente sitio web tiene por objeto proporcionar información sobre la actividad de Publisol, dedicada a la venta de agendas escolares, merchandising empresarial y productos de personalización para colegios, empresas y asociaciones.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">3. Condiciones de Uso</Heading>
			<Text class="mb-4">
				El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación de todas las condiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado del sitio web y de sus contenidos, conforme a la legislación vigente, la moral, las buenas costumbres y el orden público.
			</Text>
			<Text class="mb-8">
				Queda expresamente prohibido el uso del sitio web con fines ilícitos o lesivos, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el sitio web o impedir la normal utilización del mismo por parte de otros usuarios.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">4. Propiedad Intelectual e Industrial</Heading>
			<Text class="mb-4">
				Todos los contenidos de este sitio web (textos, fotografías, gráficos, logotipos, iconos, software, diseño gráfico, códigos fuente, etc.) son titularidad de Publisol S.L. o de terceros que han autorizado su uso.
			</Text>
			<Text class="mb-4">
				Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de dichos contenidos sin autorización expresa y por escrito del titular, salvo en los casos legalmente permitidos.
			</Text>
			<Text class="mb-8">
				Las marcas y nombres comerciales presentes en el sitio pertenecen a su legítimo propietario, sin que el acceso al sitio atribuya ningún derecho sobre los mismos.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">5. Exclusiones de Garantías y Responsabilidad</Heading>
			<Text class="mb-4">
				<strong>a) Información del sitio web:</strong> Publisol no garantiza que los contenidos estén permanentemente actualizados, completos o exentos de errores, y no se hace responsable de las decisiones adoptadas únicamente en base a la información contenida en la web.
			</Text>
			<Text class="mb-4">
				<strong>b) Enlaces externos:</strong> El sitio puede contener enlaces a páginas web de terceros. Publisol no se responsabiliza del contenido, exactitud ni funcionamiento de dichas páginas, que se incluyen únicamente a efectos informativos.
			</Text>
			<Text class="mb-4">
				<strong>c) Funcionamiento técnico:</strong> Publisol no garantiza la ausencia de virus ni de otros elementos que puedan causar daños en los sistemas informáticos de los usuarios. No se hace responsable de los perjuicios derivados de interrupciones o fallos en el sitio web.
			</Text>
			<Text class="mb-8">
				<strong>d) Menores de edad:</strong> El acceso al sitio web por parte de menores requiere el consentimiento previo y expreso de sus padres, tutores o representantes legales. Publisol no se responsabiliza de los datos proporcionados por menores sin autorización.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">6. Protección de Datos</Heading>
			<Text class="mb-8">
				El tratamiento de datos personales de los usuarios se regula en la <a href="/privacidad" class="text-primary hover:underline">Política de Privacidad</a> de Publisol, elaborada conforme al RGPD y a la LOPDGDD.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">7. Cookies</Heading>
			<Text class="mb-8">
				Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación. El usuario puede consultar información detallada en la <a href="/cookies" class="text-primary hover:underline">Política de Cookies</a>.
			</Text>
			
			<Heading level="h2" class="mt-12 mb-4">8. Legislación Aplicable</Heading>
			<Text class="mb-4">
				El presente Aviso Legal se rige por la legislación española.
			</Text>
			<Text class="mb-8">
				Para la resolución de cualquier conflicto que pudiera derivarse del acceso o uso de este sitio web, el usuario y el titular acuerdan someterse a los Juzgados y Tribunales de Madrid, salvo disposición legal en contrario.
			</Text>
		</div>
	</div>
</article>

