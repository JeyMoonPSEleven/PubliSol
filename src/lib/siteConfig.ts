/**
 * Configuración centralizada del sitio Publisol
 * Única fuente de la verdad para datos del sitio
 */

export interface ContactInfo {
	phone: {
		main: string;
		commercial?: string;
		customerService?: string;
	};
	email: string;
	address: {
		street: string;
		city: string;
		postalCode: string;
		province: string;
		full: string;
	};
	schedule: {
		weekdays: string;
		saturday?: string;
		sunday?: string;
	};
}

export interface SocialLinks {
	linkedin?: string;
	instagram?: string;
	facebook?: string;
	twitter?: string;
	youtube?: string;
}

export interface SEOInfo {
	companyName: string;
	slogan: string;
	defaultTitle: string;
	defaultDescription: string;
	defaultImage: string;
	siteUrl: string;
}

export interface ProductCategory {
	id: string;
	name: string;
	href: string;
	description?: string;
}

export interface NavigationItem {
	label: string;
	href: string;
}

export interface SiteConfig {
	company: {
		name: string;
		description: string;
		certifications: string[];
	};
	contact: ContactInfo;
	social: SocialLinks;
	seo: SEOInfo;
	products: {
		categories: ProductCategory[];
	};
	navigation: {
		main: NavigationItem[];
		company: NavigationItem[];
		resources: NavigationItem[];
	};
	legal: {
		terms: string;
		privacy: string;
		cookies: string;
		legal: string;
	};
}

export const siteConfig: SiteConfig = {
	company: {
		name: "Publisol",
		description:
			"Tu Socio Estratégico Escolar. Especialistas en personalización de agendas escolares, textil corporativo y merchandising educativo. No vendemos papel ni tela; ofrecemos orden académico para directores y soluciones de financiación para AMPAs.",
		certifications: ["ISO 9001", "FSC"],
	},
	contact: {
		phone: {
			main: "+34 653 18 95 99",
			commercial: "95-287-52-56",
			customerService: "95-287-50-13",
		},
		email: "publisolronda@gmail.com",
		address: {
			street: "Carretera de Coin Nº 56 - 4º A",
			city: "Cártama",
			postalCode: "29700",
			province: "Málaga",
			full: "Carretera de Coin Nº 56 - 4º A, 29700 Cártama, Málaga",
		},
		schedule: {
			weekdays: "Lun-Vie: 9:00 - 18:00",
			saturday: "Sáb: 10:00 - 14:00",
		},
	},
	social: {
		linkedin: "https://linkedin.com/company/publisol",
		instagram: "https://instagram.com/publisol",
		facebook: "https://facebook.com/publisol",
	},
	seo: {
		companyName: "Publisol",
		slogan: "Tu Socio Estratégico Escolar",
		defaultTitle: "Publisol - Agendas y Merchandising Personalizado",
		defaultDescription:
			"Desde 1975 creando productos únicos para colegios, empresas y asociaciones. Calidad, compromiso y rapidez en la entrega.",
		defaultImage: "/images/hero/main-hero-bg.jpg",
		siteUrl: "https://publisolronda.com",
	},
	products: {
		categories: [
			{
				id: "agendas-escolares",
				name: "Agendas Escolares",
				href: "/productos/agendas-escolares",
			},
			{
				id: "agendas-personalizadas",
				name: "Agendas Personalizadas",
				href: "/productos/agendas-escolares",
			},
			{
				id: "merchandising-empresarial",
				name: "Merchandising Empresarial",
				href: "/productos/merchandising",
			},
			{
				id: "textil-corporativo",
				name: "Textil Corporativo",
				href: "/productos/textil",
			},
			{
				id: "material-oficina",
				name: "Material de Oficina",
				href: "/productos/papeleria",
			},
			{
				id: "papeleria-premium",
				name: "Papelería Premium",
				href: "/productos/papeleria",
			},
			{
				id: "productos-sostenibles",
				name: "Productos Sostenibles",
				href: "/productos/sostenibles",
			},
		],
	},
	navigation: {
		main: [
			{ label: "Catálogos", href: "/catalogos" },
			{ label: "Blog", href: "/blog" },
			{ label: "Sobre Nosotros", href: "/nosotros" },
			{ label: "Contacto", href: "/contacto" },
		],
		company: [
			{ label: "Sobre Nosotros", href: "/nosotros" },
			{ label: "Nuestro Equipo", href: "/nosotros#equipo" },
			{ label: "Historia y Valores", href: "/nosotros#historia" },
			{ label: "Sostenibilidad", href: "/nosotros#sostenibilidad" },
			{ label: "Contacto", href: "/contacto" },
		],
		resources: [
			{ label: "Blog / Noticias", href: "/blog" },
			{ label: "Catálogos Descargables", href: "/catalogos" },
			{ label: "Preguntas Frecuentes", href: "/faq" },
			{ label: "Guía de Tallas", href: "/catalogos#guia-tallas" },
			{ label: "Carta de Colores", href: "/catalogos#carta-colores" },
		],
	},
	legal: {
		terms: "/terminos",
		privacy: "/privacidad",
		cookies: "/cookies",
		legal: "/aviso-legal",
	},
};

