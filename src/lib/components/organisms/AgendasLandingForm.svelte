<script lang="ts">
    import {
        Heading,
        Text,
        Input,
        Textarea,
        Button,
    } from "atomic-design-svelte";
    import {
        User,
        Building2,
        Mail,
        Phone,
        Package,
        MessageSquare,
    } from "lucide-svelte";
    import { sendContactEmail } from "$lib/utils/emailService";
    import type { ContactFormData } from "$lib/utils/emailService";
    import PublisolButton from "$lib/components/atoms/PublisolButton.svelte";

    type Props = {
        formId?: string;
        class?: string;
    };

    let { formId = "agendas-landing-form", class: className = "" }: Props =
        $props();

    let formData = $state<ContactFormData>({
        nombre: "",
        email: "",
        cantidad: "",
        mensaje: "",
        telefono: "",
        empresa: "",
        tipoProyecto: "agendas-escolares",
        fechaNecesaria: "",
        privacidad: false,
        newsletter: false,
    });

    let errors = $state<Record<string, string>>({});
    let isSubmitting = $state(false);
    let submitSuccess = $state(false);

    function validateEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone: string): boolean {
        return /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(
            phone,
        );
    }

    function validateForm(): boolean {
        errors = {};

        if (!formData.nombre.trim()) {
            errors.nombre = "El nombre es obligatorio";
        }

        if (!formData.empresa || !formData.empresa.trim()) {
            errors.empresa = "El nombre del centro es obligatorio";
        }

        if (!formData.email.trim() && !formData.telefono.trim()) {
            errors.contacto = "Debes proporcionar al menos un email o teléfono";
        }

        if (formData.email.trim() && !validateEmail(formData.email)) {
            errors.email = "El email no es válido";
        }

        if (formData.telefono.trim() && !validatePhone(formData.telefono)) {
            errors.telefono = "El teléfono no es válido";
        }

        if (!formData.privacidad) {
            errors.privacidad = "Debes aceptar la política de privacidad";
        }

        return Object.keys(errors).length === 0;
    }

    async function handleSubmit() {
        if (!validateForm()) {
            return;
        }

        isSubmitting = true;

        try {
            const result = await sendContactEmail(formData);
            if (result.success) {
                submitSuccess = true;
                // Reset form
                formData = {
                    nombre: "",
                    email: "",
                    cantidad: "",
                    mensaje: "",
                    telefono: "",
                    empresa: "",
                    tipoProyecto: "agendas-escolares",
                    fechaNecesaria: "",
                    privacidad: false,
                    newsletter: false,
                };
                setTimeout(() => {
                    submitSuccess = false;
                }, 5000);
            } else {
                errors.submit =
                    result.message || "Error al enviar el formulario";
            }
        } catch (error) {
            errors.submit =
                "Error al enviar el formulario. Por favor, inténtalo de nuevo.";
        } finally {
            isSubmitting = false;
        }
    }
</script>

<section
    class="py-12 sm:py-16 md:py-20 bg-surface-page {className}"
    aria-labelledby="form-heading"
>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <h2
                id="form-heading"
                class="text-center mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-text-default"
            >
                Solicita tu presupuesto personalizado
            </h2>
            <Text
                class="text-center text-lg text-text-muted mb-8 leading-relaxed"
            >
                Te responderemos en menos de 48h con tu propuesta personalizada.
            </Text>

            {#if submitSuccess}
                <div
                    class="mb-6 p-4 bg-success/10 border border-success/20 rounded-xl"
                    role="alert"
                >
                    <Text class="text-success font-semibold">
                        ¡Formulario enviado correctamente! Te contactaremos
                        pronto.
                    </Text>
                </div>
            {/if}

            {#if errors.submit}
                <div
                    class="mb-6 p-4 bg-error/10 border border-error/20 rounded-xl"
                    role="alert"
                >
                    <Text class="text-error">{errors.submit}</Text>
                </div>
            {/if}

            <form
                onsubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                class="space-y-6"
                aria-label="Formulario de contacto para agendas escolares"
            >
                <!-- Nombre y Apellidos -->
                <div>
                    <label
                        for="{formId}-nombre"
                        class="block text-sm font-medium mb-2 text-text-default"
                    >
                        Nombre y Apellidos <span class="text-error">*</span>
                    </label>
                    <div class="relative">
                        <User
                            class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
                            aria-hidden="true"
                        />
                        <Input
                            id="{formId}-nombre"
                            type="text"
                            bindValue={formData.nombre}
                            required
                            class="w-full pl-10 min-h-[48px] text-base rounded-xl {errors.nombre
                                ? 'border-error focus:border-error focus:ring-error'
                                : ''}"
                            placeholder="Tu nombre completo"
                            aria-label="Nombre y apellidos"
                        />
                    </div>
                    {#if errors.nombre}
                        <Text class="text-error text-xs mt-1"
                            >{errors.nombre}</Text
                        >
                    {/if}
                </div>

                <!-- Nombre del Centro Escolar o Asociación -->
                <div>
                    <label
                        for="{formId}-empresa"
                        class="block text-sm font-medium mb-2 text-text-default"
                    >
                        Nombre del centro escolar o asociación <span
                            class="text-error">*</span
                        >
                    </label>
                    <div class="relative">
                        <Building2
                            class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
                            aria-hidden="true"
                        />
                        <Input
                            id="{formId}-empresa"
                            type="text"
                            bindValue={formData.empresa}
                            required
                            class="w-full pl-10 min-h-[48px] text-base rounded-xl {errors.empresa
                                ? 'border-error focus:border-error focus:ring-error'
                                : ''}"
                            placeholder="Nombre del centro o asociación"
                            aria-label="Centro escolar o asociación"
                        />
                    </div>
                    {#if errors.empresa}
                        <Text class="text-error text-xs mt-1"
                            >{errors.empresa}</Text
                        >
                    {/if}
                </div>

                <!-- Email y Teléfono -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label
                            for="{formId}-email"
                            class="block text-sm font-medium mb-2 text-text-default"
                        >
                            Email
                        </label>
                        <div class="relative">
                            <Mail
                                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
                                aria-hidden="true"
                            />
                            <Input
                                id="{formId}-email"
                                type="email"
                                bindValue={formData.email}
                                class="w-full pl-10 min-h-[48px] text-base rounded-xl {errors.email
                                    ? 'border-error focus:border-error focus:ring-error'
                                    : ''}"
                                placeholder="tu@email.com"
                                inputmode="email"
                                aria-label="Dirección de correo electrónico"
                            />
                        </div>
                        {#if errors.email}
                            <Text class="text-error text-xs mt-1"
                                >{errors.email}</Text
                            >
                        {/if}
                    </div>

                    <div>
                        <label
                            for="{formId}-telefono"
                            class="block text-sm font-medium mb-2 text-text-default"
                        >
                            Teléfono
                        </label>
                        <div class="relative">
                            <Phone
                                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
                                aria-hidden="true"
                            />
                            <Input
                                id="{formId}-telefono"
                                type="tel"
                                bindValue={formData.telefono}
                                class="w-full pl-10 min-h-[48px] text-base rounded-xl {errors.telefono
                                    ? 'border-error focus:border-error focus:ring-error'
                                    : ''}"
                                placeholder="600 000 000"
                                inputmode="tel"
                                aria-label="Número de teléfono"
                            />
                        </div>
                        {#if errors.telefono}
                            <Text class="text-error text-xs mt-1"
                                >{errors.telefono}</Text
                            >
                        {/if}
                    </div>
                </div>
                {#if errors.contacto}
                    <Text class="text-error text-xs">{errors.contacto}</Text>
                {/if}

                <!-- Nº aproximado de agendas -->
                <div>
                    <label
                        for="{formId}-cantidad"
                        class="block text-sm font-medium mb-2 text-text-default"
                    >
                        Nº aproximado de agendas
                    </label>
                    <div class="relative">
                        <Package
                            class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
                            aria-hidden="true"
                        />
                        <Input
                            id="{formId}-cantidad"
                            type="text"
                            bindValue={formData.cantidad}
                            class="w-full pl-10 min-h-[48px] text-base rounded-xl"
                            placeholder="Ej: 100, 200, 500..."
                            aria-label="Número aproximado de agendas"
                        />
                    </div>
                </div>

                <!-- Observaciones o personalizaciones deseadas -->
                <div>
                    <label
                        for="{formId}-mensaje"
                        class="block text-sm font-medium mb-2 text-text-default"
                    >
                        Observaciones o personalizaciones deseadas
                    </label>
                    <div class="relative">
                        <MessageSquare
                            class="absolute left-3 top-3 w-5 h-5 text-text-muted"
                            aria-hidden="true"
                        />
                        <Textarea
                            id="{formId}-mensaje"
                            bindValue={formData.mensaje}
                            rows={4}
                            class="w-full pl-10 min-h-[120px] text-base rounded-xl resize-none"
                            placeholder="Cuéntanos qué necesitas: logo del centro, festivos locales, actividades, formato preferido, etc."
                            aria-label="Observaciones o personalizaciones"
                        />
                    </div>
                </div>

                <!-- Privacidad -->
                <div>
                    <label
                        class="flex items-start gap-3 cursor-pointer min-h-[48px]"
                    >
                        <input
                            type="checkbox"
                            bind:checked={formData.privacidad}
                            class="mt-1 w-5 h-5 rounded border-border-default text-primary focus:ring-2 focus:ring-primary"
                            aria-label="Aceptar política de privacidad"
                        />
                        <Text class="text-sm text-text-muted">
                            Acepto la{" "}
                            <a
                                href="/privacidad"
                                target="_blank"
                                class="text-primary hover:underline"
                            >
                                política de privacidad
                            </a>
                            <span class="text-error">*</span>
                        </Text>
                    </label>
                    {#if errors.privacidad}
                        <Text class="text-error text-xs mt-1"
                            >{errors.privacidad}</Text
                        >
                    {/if}
                </div>

                <!-- Botón de envío -->
                <div class="pt-4">
                    {#if isSubmitting}
                        <button
                            type="submit"
                            disabled
                            class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-8 py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 opacity-50 cursor-not-allowed min-h-[64px]"
                        >
                            <span>Enviando...</span>
                        </button>
                    {:else}
                        <PublisolButton
                            text="Solicitar presupuesto"
                            variant="primary"
                            size="lg"
                            type="submit"
                            class="w-full"
                        />
                    {/if}
                </div>
            </form>
        </div>
    </div>
</section>
