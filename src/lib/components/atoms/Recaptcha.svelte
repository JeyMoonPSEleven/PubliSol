<script lang="ts">
	import { onMount } from "svelte";

	interface Props {
		siteKey?: string;
		onVerify?: (token: string) => void;
	}

	let { siteKey = "", onVerify = () => {} }: Props = $props();

	let recaptchaLoaded = $state(false);
	let recaptchaToken = $state<string | null>(null);

	onMount(() => {
		if (!siteKey) {
			console.warn("reCAPTCHA site key no configurada");
			return;
		}

		// Cargar script de reCAPTCHA v3
		const script = document.createElement("script");
		script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
		script.async = true;
		script.defer = true;
		script.onload = () => {
			recaptchaLoaded = true;
		};
		document.head.appendChild(script);

		return () => {
			// Cleanup si es necesario
		};
	});

	export function execute(): Promise<string | null> {
		if (!recaptchaLoaded || !siteKey) {
			return Promise.resolve(null);
		}

		try {
			// @ts-ignore - grecaptcha se carga dinámicamente
			return window.grecaptcha.execute(siteKey, {
				action: "submit",
			}).then((token: string) => {
				recaptchaToken = token;
				onVerify(token);
				return token;
			}).catch((error: Error) => {
				console.error("Error ejecutando reCAPTCHA:", error);
				return null;
			});
		} catch (error) {
			console.error("Error ejecutando reCAPTCHA:", error);
			return Promise.resolve(null);
		}
	}
</script>

<!-- reCAPTCHA v3 se ejecuta automáticamente, no necesita UI visible -->

