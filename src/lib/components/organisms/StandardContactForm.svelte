<script lang="ts">
    import {
        Text,
        Input,
        Textarea,
        Button,
        Select,
        Checkbox,
    } from "atomic-design-svelte";
    import {
        Mail,
        User,
        Package,
        MessageSquare,
        Phone,
        Building2,
        ChevronDown,
    } from "lucide-svelte";
    import { sendContactEmail } from "$lib/utils/emailService";
    import type { ContactFormData } from "$lib/utils/emailService";

    // Características de Agendas Escolares
    const agendaCaracteristicas = [
        { value: "agenda-clasica", label: "Agenda Clásica" },
        { value: "agenda-dia-pagina", label: "Agenda Día Página" },
        { value: "agenda-doble-pagina", label: "Agendas de Doble Página" },
        { value: "agenda-personalizada", label: "Agendas Personalizadas" },
        { value: "gomillas-elasticas", label: "Gomillas Elásticas" },
        {
            value: "pegatinas-personalizadas",
            label: "Pegatinas Personalizadas",
        },
    ];

    // Servicios Textiles
    const serviciosTextiles = [
        { value: "sublimacion", label: "Sublimación" },
        { value: "dtf", label: "DTF (Direct Transfer Film)" },
        { value: "laser", label: "Láser" },
        { value: "serigrafia", label: "Serigrafía" },
        { value: "digital-directa", label: "Digital Directa" },
    ];

    // Opciones de cantidad
    const cantidadOpciones = [
        { value: "10", label: "10 unidades" },
        { value: "50", label: "50 unidades" },
        { value: "100", label: "100 unidades" },
        { value: "200", label: "200 unidades" },
        { value: "500", label: "500 unidades" },
        { value: "1000", label: "1000+ unidades" },
        { value: "na", label: "N/A" },
    ];

    type Props = {
        heading?: string;
        description?: string;
        formId?: string;
        class?: string;
    };

    let {
        heading = "Solicita tu presupuesto personalizado",
        description = "Completa el formulario y recibirás un presupuesto personalizado en menos de 48 horas.",
        formId = "standard-contact-form",
        class: className = "",
    }: Props = $props();

    let formData = $state<ContactFormData>({
        nombre: "",
        email: "",
        cantidad: "",
        mensaje: "",
        telefono: "",
        empresa: "",
        tipoProyecto: "",
        fechaNecesaria: "",
        privacidad: false,
        newsletter: false,
    });

    let tipoProductoSeleccionado = $state<string[]>([]);
    let caracteristicasAgenda = $state<string[]>([]);
    let serviciosTextil = $state<string[]>([]);
    let cantidadSeleccionada = $state("");
    let isAgendaExpanded = $state(false);
    let isTextilExpanded = $state(false);

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
            errors.nombre = "El nombre y apellidos son obligatorios";
        }

        if (!formData.empresa || !formData.empresa.trim()) {
            errors.empresa = "El centro escolar o asociación es obligatorio";
        }

        // Email o Teléfono (al menos uno)
        const hasEmail = formData.email.trim() && validateEmail(formData.email);
        const hasPhone =
            formData.telefono.trim() && validatePhone(formData.telefono);

        if (!hasEmail && !hasPhone) {
            errors.contacto =
                "Debes proporcionar al menos un email o teléfono válido";
        } else {
            if (formData.email.trim() && !validateEmail(formData.email)) {
                errors.email = "El email no es válido";
            }
            if (formData.telefono.trim() && !validatePhone(formData.telefono)) {
                errors.telefono = "El teléfono no es válido";
            }
        }

        if (tipoProductoSeleccionado.length === 0) {
            errors.tipoProducto =
                "Debes seleccionar al menos un tipo de producto";
        }

        // Validar características según tipo seleccionado
        if (
            tipoProductoSeleccionado.includes("agendas") &&
            caracteristicasAgenda.length === 0
        ) {
            errors.caracteristicasAgenda =
                "Debes seleccionar al menos una característica de agenda";
        }

        if (
            tipoProductoSeleccionado.includes("textil") &&
            serviciosTextil.length === 0
        ) {
            errors.serviciosTextil =
                "Debes seleccionar al menos un servicio textil";
        }

        if (!cantidadSeleccionada) {
            errors.cantidad = "Debes seleccionar una cantidad aproximada";
        }

        if (!formData.privacidad) {
            errors.privacidad = "Debes aceptar la política de privacidad";
        }

        return Object.keys(errors).length === 0;
    }

    // Construir tipoProyecto desde las selecciones
    $effect(() => {
        const tipos: string[] = [];
        if (
            tipoProductoSeleccionado.includes("agendas") &&
            caracteristicasAgenda.length > 0
        ) {
            tipos.push(
                `Agendas: ${caracteristicasAgenda
                    .map(
                        (c) =>
                            agendaCaracteristicas.find((a) => a.value === c)
                                ?.label,
                    )
                    .filter(Boolean)
                    .join(", ")}`,
            );
        }
        if (
            tipoProductoSeleccionado.includes("textil") &&
            serviciosTextil.length > 0
        ) {
            tipos.push(
                `Textil: ${serviciosTextil
                    .map(
                        (s) =>
                            serviciosTextiles.find((t) => t.value === s)?.label,
                    )
                    .filter(Boolean)
                    .join(", ")}`,
            );
        }
        formData.tipoProyecto = tipos.join(" | ");
    });

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Construir mensaje completo
        let mensajeCompleto = formData.mensaje || "";
        mensajeCompleto += `\n\n--- INFORMACIÓN DEL FORMULARIO ---\n`;
        mensajeCompleto += `Tipo de producto: ${tipoProductoSeleccionado.join(", ")}\n`;
        if (caracteristicasAgenda.length > 0) {
            mensajeCompleto += `Características de agendas: ${caracteristicasAgenda
                .map(
                    (c) =>
                        agendaCaracteristicas.find((a) => a.value === c)?.label,
                )
                .filter(Boolean)
                .join(", ")}\n`;
        }
        if (serviciosTextil.length > 0) {
            mensajeCompleto += `Servicios textiles: ${serviciosTextil
                .map((s) => serviciosTextiles.find((t) => t.value === s)?.label)
                .filter(Boolean)
                .join(", ")}\n`;
        }
        mensajeCompleto += `Cantidad aproximada: ${cantidadSeleccionada === "na" ? "N/A" : cantidadSeleccionada}\n`;

        formData.mensaje = mensajeCompleto;
        formData.cantidad =
            cantidadSeleccionada === "na" ? "N/A" : cantidadSeleccionada;

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
                    tipoProyecto: "",
                    fechaNecesaria: "",
                    privacidad: false,
                    newsletter: false,
                };
                tipoProductoSeleccionado = [];
                caracteristicasAgenda = [];
                serviciosTextil = [];
                cantidadSeleccionada = "";
                isAgendaExpanded = false;
                isTextilExpanded = false;
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

    function toggleTipoProducto(value: string) {
        if (tipoProductoSeleccionado.includes(value)) {
            tipoProductoSeleccionado = tipoProductoSeleccionado.filter(
                (item) => item !== value,
            );
            if (value === "agendas") {
                caracteristicasAgenda = [];
                isAgendaExpanded = false;
            }
            if (value === "textil") {
                serviciosTextil = [];
                isTextilExpanded = false;
            }
        } else {
            tipoProductoSeleccionado = [...tipoProductoSeleccionado, value];
            if (value === "agendas") {
                isAgendaExpanded = true;
            }
            if (value === "textil") {
                isTextilExpanded = true;
            }
        }
    }

    function toggleCaracteristica(value: string) {
        if (caracteristicasAgenda.includes(value)) {
            caracteristicasAgenda = caracteristicasAgenda.filter(
                (item) => item !== value,
            );
        } else {
            caracteristicasAgenda = [...caracteristicasAgenda, value];
        }
    }

    function toggleServicioTextil(value: string) {
        if (serviciosTextil.includes(value)) {
            serviciosTextil = serviciosTextil.filter((item) => item !== value);
        } else {
            serviciosTextil = [...serviciosTextil, value];
        }
    }

    // Clear errors when field is corrected
    $effect(() => {
        if (formData.nombre && errors.nombre) delete errors.nombre;
        if (formData.empresa && errors.empresa) delete errors.empresa;
        if (
            (formData.email && validateEmail(formData.email)) ||
            (formData.telefono && validatePhone(formData.telefono))
        ) {
            delete errors.contacto;
            delete errors.email;
            delete errors.telefono;
        }
        if (tipoProductoSeleccionado.length > 0 && errors.tipoProducto)
            delete errors.tipoProducto;
        if (caracteristicasAgenda.length > 0 && errors.caracteristicasAgenda)
            delete errors.caracteristicasAgenda;
        if (serviciosTextil.length > 0 && errors.serviciosTextil)
            delete errors.serviciosTextil;
        if (cantidadSeleccionada && errors.cantidad) delete errors.cantidad;
        if (formData.privacidad && errors.privacidad) delete errors.privacidad;
    });
</script>

<section
    id={formId}
    class="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5 {className}"
    aria-labelledby="{formId}-heading"
>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2
                id="{formId}-heading"
                class="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold"
            >
                {heading}
            </h2>
            <Text class="text-lg text-text-muted max-w-2xl mx-auto">
                {description}
            </Text>
        </div>

        <div class="max-w-2xl mx-auto">
            {#if submitSuccess}
                <div
                    class="mb-6 p-6 bg-success/10 border-2 border-success/20 rounded-xl"
                >
                    <div class="flex items-center gap-3">
                        <svg
                            class="w-6 h-6 text-success flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div>
                            <Text
                                class="text-success font-semibold text-lg mb-1"
                            >
                                ¡Formulario enviado correctamente!
                            </Text>
                            <Text class="text-success/80 text-sm">
                                Te responderemos en menos de 48 horas con tu
                                presupuesto personalizado.
                            </Text>
                        </div>
                    </div>
                </div>
            {/if}

            {#if errors.submit}
                <div
                    class="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg"
                >
                    <Text class="text-error text-sm">{errors.submit}</Text>
                </div>
            {/if}

            <form onsubmit={handleSubmit} class="space-y-6" novalidate>
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
                        <Text
                            class="text-error text-xs mt-1 flex items-center gap-1"
                        >
                            {errors.nombre}
                        </Text>
                    {/if}
                </div>

                <!-- Centro Escolar / Asociación -->
                <div>
                    <label
                        for="{formId}-empresa"
                        class="block text-sm font-medium mb-2 text-text-default"
                    >
                        Centro Escolar / Asociación <span class="text-error"
                            >*</span
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
                        <Text
                            class="text-error text-xs mt-1 flex items-center gap-1"
                        >
                            {errors.empresa}
                        </Text>
                    {/if}
                </div>

                <!-- Email y Teléfono (al menos uno obligatorio) -->
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
                            <Text
                                class="text-error text-xs mt-1 flex items-center gap-1"
                            >
                                {errors.email}
                            </Text>
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
                            <Text
                                class="text-error text-xs mt-1 flex items-center gap-1"
                            >
                                {errors.telefono}
                            </Text>
                        {/if}
                    </div>
                </div>
                {#if errors.contacto}
                    <Text class="text-error text-xs flex items-center gap-1">
                        {errors.contacto}
                    </Text>
                {/if}

                <!-- Tipo de Producto -->
                <div>
                    <div
                        class="block text-sm font-medium mb-3 text-text-default"
                    >
                        Tipo de Producto <span class="text-error">*</span>
                    </div>
                    <div class="space-y-3">
                        <label
                            class="flex items-center gap-3 cursor-pointer min-h-[48px] p-3 rounded-xl border-2 border-border-default hover:border-primary transition-colors {tipoProductoSeleccionado.includes(
                                'agendas',
                            )
                                ? 'border-primary bg-primary/5'
                                : ''}"
                        >
                            <input
                                type="checkbox"
                                checked={tipoProductoSeleccionado.includes(
                                    "agendas",
                                )}
                                onchange={() => toggleTipoProducto("agendas")}
                                class="w-5 h-5 rounded border-border-default text-primary focus:ring-2 focus:ring-primary"
                                aria-label="Agendas Escolares"
                            />
                            <Text class="text-base font-medium"
                                >Agendas Escolares</Text
                            >
                        </label>
                        <label
                            class="flex items-center gap-3 cursor-pointer min-h-[48px] p-3 rounded-xl border-2 border-border-default hover:border-primary transition-colors {tipoProductoSeleccionado.includes(
                                'textil',
                            )
                                ? 'border-primary bg-primary/5'
                                : ''}"
                        >
                            <input
                                type="checkbox"
                                checked={tipoProductoSeleccionado.includes(
                                    "textil",
                                )}
                                onchange={() => toggleTipoProducto("textil")}
                                class="w-5 h-5 rounded border-border-default text-primary focus:ring-2 focus:ring-primary"
                                aria-label="Textil Corporativo"
                            />
                            <Text class="text-base font-medium"
                                >Textil Corporativo</Text
                            >
                        </label>
                    </div>
                    {#if errors.tipoProducto}
                        <Text
                            class="text-error text-xs mt-1 flex items-center gap-1"
                        >
                            {errors.tipoProducto}
                        </Text>
                    {/if}
                </div>

                <!-- Características de Agendas (Desplegable) -->
                {#if tipoProductoSeleccionado.includes("agendas")}
                    <div
                        class="space-y-3 p-4 bg-primary/5 rounded-xl border border-primary/20"
                    >
                        <button
                            type="button"
                            onclick={() =>
                                (isAgendaExpanded = !isAgendaExpanded)}
                            class="w-full flex items-center justify-between text-sm font-semibold mb-3 text-text-default"
                        >
                            <span>Características de Agendas Escolares</span>
                            <ChevronDown
                                class="w-5 h-5 transition-transform duration-300 {isAgendaExpanded
                                    ? 'rotate-180'
                                    : ''}"
                            />
                        </button>
                        {#if isAgendaExpanded}
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {#each agendaCaracteristicas as caracteristica}
                                    <label
                                        class="flex items-center gap-3 cursor-pointer min-h-[48px] p-3 rounded-lg border border-border-default hover:border-primary transition-colors {caracteristicasAgenda.includes(
                                            caracteristica.value,
                                        )
                                            ? 'border-primary bg-white'
                                            : 'bg-white'}"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={caracteristicasAgenda.includes(
                                                caracteristica.value,
                                            )}
                                            onchange={() =>
                                                toggleCaracteristica(
                                                    caracteristica.value,
                                                )}
                                            class="w-5 h-5 rounded border-border-default text-primary focus:ring-2 focus:ring-primary"
                                        />
                                        <Text class="text-sm"
                                            >{caracteristica.label}</Text
                                        >
                                    </label>
                                {/each}
                            </div>
                            {#if errors.caracteristicasAgenda}
                                <Text
                                    class="text-error text-xs mt-2 flex items-center gap-1"
                                >
                                    {errors.caracteristicasAgenda}
                                </Text>
                            {/if}
                        {/if}
                    </div>
                {/if}

                <!-- Servicios Textiles (Desplegable) -->
                {#if tipoProductoSeleccionado.includes("textil")}
                    <div
                        class="space-y-3 p-4 bg-primary/5 rounded-xl border border-primary/20"
                    >
                        <button
                            type="button"
                            onclick={() =>
                                (isTextilExpanded = !isTextilExpanded)}
                            class="w-full flex items-center justify-between text-sm font-semibold mb-3 text-text-default"
                        >
                            <span>Servicios Textiles</span>
                            <ChevronDown
                                class="w-5 h-5 transition-transform duration-300 {isTextilExpanded
                                    ? 'rotate-180'
                                    : ''}"
                            />
                        </button>
                        {#if isTextilExpanded}
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {#each serviciosTextiles as servicio}
                                    <label
                                        class="flex items-center gap-3 cursor-pointer min-h-[48px] p-3 rounded-lg border border-border-default hover:border-primary transition-colors {serviciosTextil.includes(
                                            servicio.value,
                                        )
                                            ? 'border-primary bg-white'
                                            : 'bg-white'}"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={serviciosTextil.includes(
                                                servicio.value,
                                            )}
                                            onchange={() =>
                                                toggleServicioTextil(
                                                    servicio.value,
                                                )}
                                            class="w-5 h-5 rounded border-border-default text-primary focus:ring-2 focus:ring-primary"
                                        />
                                        <Text class="text-sm"
                                            >{servicio.label}</Text
                                        >
                                    </label>
                                {/each}
                            </div>
                            {#if errors.serviciosTextil}
                                <Text
                                    class="text-error text-xs mt-2 flex items-center gap-1"
                                >
                                    {errors.serviciosTextil}
                                </Text>
                            {/if}
                        {/if}
                    </div>
                {/if}

                <!-- Cantidad Aproximada -->
                <div>
                    <label
                        for="{formId}-cantidad"
                        class="block text-sm font-medium mb-2 text-text-default"
                    >
                        Cantidad aproximada <span class="text-error">*</span>
                    </label>
                    <div class="relative">
                        <Package
                            class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted z-10"
                            aria-hidden="true"
                        />
                        <select
                            id="{formId}-cantidad"
                            bind:value={cantidadSeleccionada}
                            required
                            class="w-full pl-10 min-h-[48px] text-base rounded-xl border border-border-default bg-white {errors.cantidad
                                ? 'border-error focus:border-error focus:ring-error'
                                : 'focus:border-primary focus:ring-primary'} focus:outline-none focus:ring-2"
                            aria-label="Selecciona cantidad aproximada"
                        >
                            <option value="">Selecciona una cantidad...</option>
                            {#each cantidadOpciones as opcion}
                                <option value={opcion.value}
                                    >{opcion.label}</option
                                >
                            {/each}
                        </select>
                    </div>
                    {#if errors.cantidad}
                        <Text
                            class="text-error text-xs mt-1 flex items-center gap-1"
                        >
                            {errors.cantidad}
                        </Text>
                    {/if}
                </div>

                <!-- Observaciones (Opcional) -->
                <div>
                    <label
                        for="{formId}-mensaje"
                        class="block text-sm font-medium mb-2 text-text-default"
                    >
                        Observaciones
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
                            class="w-full pl-10 min-h-[120px] text-base resize-y rounded-xl"
                            placeholder="Cuéntanos sobre tu proyecto, necesidades específicas, fechas importantes..."
                            aria-label="Observaciones del proyecto"
                        />
                    </div>
                </div>

                <!-- Privacidad -->
                <div class="flex items-start gap-3">
                    <input
                        type="checkbox"
                        id="{formId}-privacidad"
                        bind:checked={formData.privacidad}
                        required
                        class="mt-1 w-5 h-5 rounded border-border-default text-primary focus:ring-2 focus:ring-primary {errors.privacidad
                            ? 'border-error'
                            : ''}"
                        aria-label="Aceptar política de privacidad"
                    />
                    <label
                        for="{formId}-privacidad"
                        class="text-sm text-text-muted leading-relaxed flex-1 {errors.privacidad
                            ? 'text-error'
                            : ''}"
                    >
                        Acepto el tratamiento de mis datos personales según la <a
                            href="/privacidad"
                            target="_blank"
                            class="text-primary hover:underline"
                            >política de privacidad</a
                        > <span class="text-error">*</span>
                    </label>
                </div>
                {#if errors.privacidad}
                    <Text
                        class="text-error text-xs ml-8 flex items-center gap-1"
                    >
                        {errors.privacidad}
                    </Text>
                {/if}

                <!-- Botón Submit -->
                <Button
                    type="submit"
                    intent="primary"
                    size="lg"
                    class="w-full min-h-[56px] text-base font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    disabled={isSubmitting}
                    aria-label="Enviar solicitud de presupuesto"
                >
                    {#if isSubmitting}
                        <span class="flex items-center gap-2">
                            <svg
                                class="animate-spin h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                ></circle>
                                <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Enviando...
                        </span>
                    {:else}
                        Solicitar Presupuesto Gratis
                    {/if}
                </Button>
            </form>
        </div>
    </div>
</section>
