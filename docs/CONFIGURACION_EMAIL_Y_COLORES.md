# Configuración de Email y Colores del Tema

## 📧 Configuración de Email

### Dónde se recibe la información de los formularios

Los formularios envían la información a través del servicio definido en:
**`src/lib/utils/emailService.ts`**

### Opciones de configuración:

#### OPCIÓN 1: EmailJS (Recomendado)
1. Crea una cuenta en https://www.emailjs.com/
2. Crea un servicio de email (Gmail, Outlook, etc.)
3. Crea una plantilla de email
4. Obtén tu Public Key y Service ID
5. Añade las siguientes variables a tu archivo `.env`:
   ```
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
   VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID_CONTACT=tu_template_id_contacto
   VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER=tu_template_id_newsletter
   ```

**El email de destino se configura en la plantilla de EmailJS**, no en el código.

#### OPCIÓN 2: Formspree
1. Crea una cuenta en https://formspree.io/
2. Crea un nuevo formulario
3. Obtén tu Form ID
4. Añade a tu archivo `.env`:
   ```
   VITE_FORMSPREE_CONTACT_FORM_ID=tu_form_id_aqui
   VITE_FORMSPREE_NEWSLETTER_FORM_ID=tu_newsletter_form_id_aqui
   ```

**El email de destino se configura en tu cuenta de Formspree**, en la configuración del formulario.

#### OPCIÓN 3: SvelteKit Form Actions (Backend propio)
1. Crea un endpoint en `src/routes/api/contact/+server.ts`
2. Configura tu servicio de email (Nodemailer, SendGrid, etc.)
3. **Aquí es donde puedes configurar el email de destino directamente en el código**

### Para cambiar el email de destino:

- **EmailJS**: Ve a tu cuenta de EmailJS → Plantillas → Edita la plantilla y configura el "To Email"
- **Formspree**: Ve a tu cuenta de Formspree → Formularios → Configuración → Email notifications
- **SvelteKit Form Actions**: Edita `src/routes/api/contact/+server.ts` y configura el email en el código

---

## 🎨 Colores del Tema

### Ubicación de los colores

Los colores del tema están definidos en:
**`src/app.css`**

### Estructura de colores:

#### 1. Variables CSS (Líneas 15-99)
```css
:root {
  /* Colores de Referencia */
  --color-ref-primary-500: #1E3A8A;
  --color-ref-secondary-500: #10B981;
  --color-ref-accent-500: #F59E0B;
  /* ... más colores ... */
}
```

#### 2. Tokens Semánticos (Líneas 104-163)
```css
:root {
  /* Colores Semánticos de Interacción */
  --color-primary: #1b824c;
  --color-primary-hover: #126339;
  --color-primary-active: #094425;
  /* ... más colores semánticos ... */
}
```

#### 3. Tailwind Theme (Líneas 502-552)
```css
@theme {
  /* Paleta Jade (Publisol Green) */
  --color-jade-600: #1b824c;
  --color-publisol-green: #1b824c;
  /* ... más colores ... */
}
```

### Nueva Paleta de Colores (Green Apple & Sky Blue)

Según la documentación en `docs/GUIA_COMPLETA_PROYECTO.md`, la nueva paleta es:

- **Primary (Apple Green)**: `#72CB10`
- **Primary Hover**: `#5AB507`
- **Primary Active**: `#3D7A05`
- **Secondary (Lime Bright)**: `#89D631`
- **Accent (Sky Blue)**: `#4EB7F7`
- **Deep Moss**: `#588100`

**Para aplicar estos colores**, actualiza las variables en `src/app.css` en las secciones mencionadas arriba.

### Cómo cambiar los colores:

1. Abre `src/app.css`
2. Busca la sección `:root` (línea 15)
3. Modifica las variables `--color-primary`, `--color-secondary`, etc.
4. O modifica la sección `@theme` (línea 502) para los colores de Tailwind

Los cambios se aplicarán automáticamente en todo el proyecto ya que todos los componentes usan estas variables CSS.

