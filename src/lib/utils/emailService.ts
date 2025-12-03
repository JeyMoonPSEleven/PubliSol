/**
 * Servicio de envío de emails
 * 
 * INSTRUCCIONES PARA CONFIGURAR:
 * 
 * OPCIÓN 1: EmailJS (Recomendado para proyectos sin backend)
 * 1. Crea una cuenta en https://www.emailjs.com/
 * 2. Crea un servicio de email (Gmail, Outlook, etc.)
 * 3. Crea una plantilla de email
 * 4. Obtén tu Public Key y Service ID
 * 5. Añade las siguientes variables a tu archivo .env:
 *    - VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
 *    - VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
 *    - VITE_EMAILJS_TEMPLATE_ID_CONTACT=tu_template_id_contacto
 *    - VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER=tu_template_id_newsletter
 * 
 * OPCIÓN 2: Formspree (Alternativa simple)
 * 1. Crea una cuenta en https://formspree.io/
 * 2. Crea un nuevo formulario
 * 3. Obtén tu Form ID
 * 4. Añade a tu archivo .env:
 *    - VITE_FORMSPREE_CONTACT_FORM_ID=tu_form_id_aqui
 *    - VITE_FORMSPREE_NEWSLETTER_FORM_ID=tu_newsletter_form_id_aqui
 * 
 * OPCIÓN 3: SvelteKit Form Actions (Si tienes backend)
 * 1. Crea un endpoint en src/routes/api/contact/+server.ts
 * 2. Configura tu servicio de email (Nodemailer, SendGrid, etc.)
 * 3. Usa las form actions de SvelteKit
 */

export interface ContactFormData {
	nombre: string;
	apellidos?: string;
	email: string;
	telefono: string;
	empresa?: string;
	tipoProyecto: string;
	cantidad?: string;
	fechaNecesaria?: string;
	mensaje: string;
	privacidad: boolean;
	newsletter?: boolean;
}

export interface NewsletterFormData {
	email: string;
}

export interface CTAFormData {
	nombre: string;
	telefono: string;
	email?: string;
	fechaHora?: string;
	tipo: 'appointment' | 'callback';
}

/**
 * Enviar formulario de contacto
 */
export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
	try {
		// OPCIÓN 1: EmailJS
		if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
			try {
				// @ts-ignore - EmailJS es opcional, se instala solo si se usa
				const emailjs = await import('@emailjs/browser');
				
				const templateParams = {
					from_name: `${data.nombre} ${data.apellidos || ''}`.trim(),
					from_email: data.email,
					telefono: data.telefono,
					empresa: data.empresa || 'No especificada',
					tipo_proyecto: data.tipoProyecto,
					cantidad: data.cantidad || 'No especificada',
					fecha_necesaria: data.fechaNecesaria || 'No especificada',
					mensaje: data.mensaje,
					newsletter: data.newsletter ? 'Sí' : 'No',
				};

				await emailjs.send(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
					templateParams,
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY
				);

				return { success: true, message: 'Mensaje enviado correctamente' };
			} catch (importError) {
				console.warn('EmailJS no está instalado. Ejecuta: pnpm add @emailjs/browser');
				// Continuar con otras opciones
			}
		}

		// OPCIÓN 2: Formspree
		if (import.meta.env.VITE_FORMSPREE_CONTACT_FORM_ID) {
			const response = await fetch('https://formspree.io/f/' + import.meta.env.VITE_FORMSPREE_CONTACT_FORM_ID, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				return { success: true, message: 'Mensaje enviado correctamente' };
			} else {
				throw new Error('Error al enviar el formulario');
			}
		}

		// OPCIÓN 3: SvelteKit Form Action (si existe endpoint)
		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			return { success: true, message: 'Mensaje enviado correctamente' };
		} else {
			throw new Error('Error al enviar el formulario');
		}
	} catch (error) {
		console.error('Error enviando email de contacto:', error);
		return { 
			success: false, 
			message: error instanceof Error ? error.message : 'Error desconocido al enviar el formulario' 
		};
	}
}

/**
 * Suscribir a newsletter
 */
export async function subscribeNewsletter(data: NewsletterFormData): Promise<{ success: boolean; message?: string }> {
	try {
		// OPCIÓN 1: EmailJS
		if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
			try {
				// @ts-ignore - EmailJS es opcional, se instala solo si se usa
				const emailjs = await import('@emailjs/browser');
				
				const templateParams = {
					email: data.email,
				};

				await emailjs.send(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER,
					templateParams,
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY
				);

				return { success: true, message: 'Suscripción realizada correctamente' };
			} catch (importError) {
				console.warn('EmailJS no está instalado. Ejecuta: pnpm add @emailjs/browser');
				// Continuar con otras opciones
			}
		}

		// OPCIÓN 2: Formspree
		if (import.meta.env.VITE_FORMSPREE_NEWSLETTER_FORM_ID) {
			const response = await fetch('https://formspree.io/f/' + import.meta.env.VITE_FORMSPREE_NEWSLETTER_FORM_ID, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				return { success: true, message: 'Suscripción realizada correctamente' };
			} else {
				throw new Error('Error al suscribirse');
			}
		}

		// OPCIÓN 3: SvelteKit Form Action
		const response = await fetch('/api/newsletter', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			return { success: true, message: 'Suscripción realizada correctamente' };
		} else {
			throw new Error('Error al suscribirse');
		}
	} catch (error) {
		console.error('Error suscribiendo a newsletter:', error);
		return { 
			success: false, 
			message: error instanceof Error ? error.message : 'Error desconocido al suscribirse' 
		};
	}
}

/**
 * Enviar formulario CTA (Agendar Cita / Te llamamos)
 */
export async function sendCTAEmail(data: CTAFormData): Promise<{ success: boolean; message?: string }> {
	try {
		// Similar a sendContactEmail pero con estructura diferente
		const contactData: ContactFormData = {
			nombre: data.nombre,
			email: data.email || '',
			telefono: data.telefono,
			tipoProyecto: data.tipo === 'appointment' ? 'Agendar Cita' : 'Te llamamos',
			mensaje: data.tipo === 'appointment' 
				? `Solicitud de cita para: ${data.fechaHora || 'Fecha no especificada'}`
				: 'Solicitud de llamada telefónica',
			privacidad: true,
		};

		return await sendContactEmail(contactData);
	} catch (error) {
		console.error('Error enviando CTA:', error);
		return { 
			success: false, 
			message: error instanceof Error ? error.message : 'Error desconocido' 
		};
	}
}

