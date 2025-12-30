/**
 * Índice centralizado de productos para búsqueda
 * Única fuente de verdad para el buscador del Header
 */

export interface ProductSearchItem {
	id: string;
	name: string;
	category: string;
	href: string;
	description?: string;
	tags?: string[];
}

export const productsIndex: ProductSearchItem[] = [
	// Agendas Escolares (Producto Principal)
	{
		id: "agenda-clasica",
		name: "Agenda Clásica",
		category: "Agendas Escolares",
		href: "/producto/agenda-clasica",
		description: "Agenda escolar clásica personalizada para tu centro educativo",
		tags: ["agenda", "escolar", "clásica", "personalizada", "centro educativo"],
	},
	{
		id: "agenda-dia-pagina",
		name: "Agenda Día Página",
		category: "Agendas Escolares",
		href: "/producto/agenda-dia-pagina",
		description: "Agenda escolar con formato día página, ideal para planificación detallada",
		tags: ["agenda", "escolar", "día página", "planificación", "detallada"],
	},
	{
		id: "agenda-doble-pagina",
		name: "Agendas de Doble Página",
		category: "Agendas Escolares",
		href: "/producto/agenda-doble-pagina",
		description: "Agenda escolar con formato doble página para visión semanal completa",
		tags: ["agenda", "escolar", "doble página", "semanal", "visión completa"],
	},
	{
		id: "agenda-personalizada",
		name: "Agendas Personalizadas",
		category: "Agendas Escolares",
		href: "/producto/agenda-personalizada",
		description: "Agendas completamente personalizadas con logo, festivos y actividades de tu centro",
		tags: ["agenda", "personalizada", "logo", "festivos", "actividades", "AMPA"],
	},
	{
		id: "agenda-sostenible",
		name: "Agenda Sostenible Reciclada",
		category: "Sostenibles",
		href: "/producto/agenda-sostenible",
		description: "Agenda ecológica con papel reciclado",
		tags: ["agenda", "sostenible", "ecológica", "reciclada", "eco"],
	},

	// Merchandising
	{
		id: "kit-bienvenida",
		name: "Kit Corporativo Bienvenida",
		category: "Merchandising",
		href: "/producto/kit-corporativo-bienvenida",
		description: "Kit de bienvenida para nuevos empleados",
		tags: ["kit", "bienvenida", "corporativo", "onboarding"],
	},
	{
		id: "kit-corporativo",
		name: "Kit Corporativo Premium",
		category: "Merchandising",
		href: "/producto/kit-corporativo",
		description: "Kit corporativo completo personalizado",
		tags: ["kit", "corporativo", "premium"],
	},
	{
		id: "botella-termica",
		name: "Botella Térmica Personalizada",
		category: "Merchandising",
		href: "/producto/botella-termica",
		description: "Botella térmica con personalización",
		tags: ["botella", "térmica", "personalizada", "merchandising"],
	},
	{
		id: "bolsa-tote",
		name: "Bolsa Tote Personalizada",
		category: "Merchandising",
		href: "/producto/bolsa-tote",
		description: "Bolsa tote ecológica personalizada",
		tags: ["bolsa", "tote", "ecológica", "personalizada"],
	},
	{
		id: "pack-regalo",
		name: "Pack Regalo Empresarial",
		category: "Merchandising",
		href: "/producto/pack-regalo",
		description: "Pack de regalo corporativo",
		tags: ["pack", "regalo", "empresarial", "corporativo"],
	},
	{
		id: "usb-personalizado",
		name: "USB Personalizado",
		category: "Merchandising",
		href: "/producto/usb-personalizado",
		description: "USB con logo personalizado",
		tags: ["usb", "personalizado", "tecnológico"],
	},
	{
		id: "power-bank",
		name: "Power Bank Corporativo",
		category: "Merchandising",
		href: "/producto/power-bank",
		description: "Power bank con branding corporativo",
		tags: ["power", "bank", "cargador", "corporativo"],
	},

	// Textil
	{
		id: "camiseta-corporativa",
		name: "Camiseta Corporativa Premium",
		category: "Textil",
		href: "/producto/camiseta-corporativa",
		description: "Camiseta corporativa de alta calidad con múltiples técnicas de impresión",
		tags: ["camiseta", "corporativa", "textil", "premium", "sublimación", "serigrafía"],
	},
	{
		id: "camiseta-polo",
		name: "Camiseta Polo",
		category: "Textil",
		href: "/producto/camiseta-polo",
		description: "Camiseta polo clásica con cuello y botones",
		tags: ["camiseta", "polo", "textil", "clásica", "cuello"],
	},
	{
		id: "polo-empresarial",
		name: "Polo Empresarial",
		category: "Textil",
		href: "/producto/polo-empresarial",
		description: "Polo empresarial personalizado con bordado o serigrafía",
		tags: ["polo", "empresarial", "textil", "bordado", "serigrafía"],
	},
	{
		id: "polo-manga-larga",
		name: "Polo Manga Larga",
		category: "Textil",
		href: "/producto/polo-manga-larga",
		description: "Polo de manga larga para entornos profesionales",
		tags: ["polo", "manga larga", "textil", "profesional"],
	},
	{
		id: "sudadera-capucha",
		name: "Sudadera con Capucha",
		category: "Textil",
		href: "/producto/sudadera-capucha",
		description: "Sudadera con capucha personalizada, ideal para equipaciones deportivas",
		tags: ["sudadera", "capucha", "textil", "deportiva", "equipación"],
	},
	{
		id: "sudadera-sin-capucha",
		name: "Sudadera sin Capucha",
		category: "Textil",
		href: "/producto/sudadera-sin-capucha",
		description: "Sudadera clásica sin capucha para uso corporativo",
		tags: ["sudadera", "textil", "corporativa", "clásica"],
	},
	{
		id: "chaqueta-tecnica",
		name: "Chaqueta Técnica",
		category: "Textil",
		href: "/producto/chaqueta-tecnica",
		description: "Chaqueta técnica deportiva con múltiples bolsillos",
		tags: ["chaqueta", "técnica", "deportiva", "textil"],
	},
	{
		id: "chaqueta-softshell",
		name: "Chaqueta Softshell",
		category: "Textil",
		href: "/producto/chaqueta-softshell",
		description: "Chaqueta softshell impermeable y transpirable",
		tags: ["chaqueta", "softshell", "impermeable", "textil"],
	},
	{
		id: "pantalon-deportivo",
		name: "Pantalón Deportivo",
		category: "Textil",
		href: "/producto/pantalon-deportivo",
		description: "Pantalón deportivo para equipaciones y uniformes",
		tags: ["pantalón", "deportivo", "textil", "equipación"],
	},
	{
		id: "pantalon-laboral",
		name: "Pantalón Laboral",
		category: "Textil",
		href: "/producto/pantalon-laboral",
		description: "Pantalón de trabajo resistente y funcional",
		tags: ["pantalón", "laboral", "textil", "trabajo"],
	},
	{
		id: "uniformes-escolares",
		name: "Uniformes Escolares",
		category: "Textil",
		href: "/producto/uniformes-escolares",
		description: "Uniformes escolares personalizados para centros educativos",
		tags: ["uniformes", "escolares", "textil", "centro educativo"],
	},
	{
		id: "babero-delantal",
		name: "Babero y Delantal",
		category: "Textil",
		href: "/producto/babero-delantal",
		description: "Baberos y delantales personalizados para guarderías y cocinas",
		tags: ["babero", "delantal", "textil", "guardería", "cocina"],
	},
	{
		id: "gorra-personalizada",
		name: "Gorra Personalizada",
		category: "Textil",
		href: "/producto/gorra-personalizada",
		description: "Gorra con bordado o serigrafía personalizada",
		tags: ["gorra", "personalizada", "textil", "bordado"],
	},
	{
		id: "gorra-plana",
		name: "Gorra Plana (Snapback)",
		category: "Textil",
		href: "/producto/gorra-plana",
		description: "Gorra plana ajustable con personalización",
		tags: ["gorra", "plana", "snapback", "textil"],
	},
	{
		id: "mochila-textil",
		name: "Mochila Textil Personalizada",
		category: "Textil",
		href: "/producto/mochila-textil",
		description: "Mochila de tela personalizada con logo",
		tags: ["mochila", "textil", "personalizada", "logo"],
	},
	{
		id: "bolsa-deportiva",
		name: "Bolsa Deportiva",
		category: "Textil",
		href: "/producto/bolsa-deportiva",
		description: "Bolsa deportiva grande para equipaciones",
		tags: ["bolsa", "deportiva", "textil", "equipación"],
	},
	{
		id: "camiseta-manga-larga",
		name: "Camiseta Manga Larga",
		category: "Textil",
		href: "/producto/camiseta-manga-larga",
		description: "Camiseta de manga larga para uniformes y equipaciones",
		tags: ["camiseta", "manga larga", "textil", "uniforme"],
	},
	{
		id: "camiseta-manga-corta",
		name: "Camiseta Manga Corta",
		category: "Textil",
		href: "/producto/camiseta-manga-corta",
		description: "Camiseta básica de manga corta personalizada",
		tags: ["camiseta", "manga corta", "textil", "básica"],
	},
	{
		id: "camiseta-tank-top",
		name: "Camiseta Tank Top",
		category: "Textil",
		href: "/producto/camiseta-tank-top",
		description: "Camiseta sin mangas para actividades deportivas",
		tags: ["camiseta", "tank top", "sin mangas", "deportiva"],
	},
	{
		id: "chaleco-reflectante",
		name: "Chaleco Reflectante",
		category: "Textil",
		href: "/producto/chaleco-reflectante",
		description: "Chaleco de seguridad reflectante personalizado",
		tags: ["chaleco", "reflectante", "seguridad", "textil"],
	},
	{
		id: "bata-laboral",
		name: "Bata Laboral",
		category: "Textil",
		href: "/producto/bata-laboral",
		description: "Bata de trabajo personalizada para profesionales",
		tags: ["bata", "laboral", "textil", "trabajo"],
	},

	// Papelería
	{
		id: "libreta-ejecutiva",
		name: "Libreta Ejecutiva A5",
		category: "Papelería",
		href: "/producto/libreta-ejecutiva",
		description: "Libreta ejecutiva premium A5",
		tags: ["libreta", "ejecutiva", "papelería", "a5"],
	},
	{
		id: "cuaderno-tapa-dura",
		name: "Cuaderno Tapa Dura",
		category: "Papelería",
		href: "/producto/cuaderno-tapa-dura",
		description: "Cuaderno con tapa dura personalizado",
		tags: ["cuaderno", "tapa", "dura", "papelería"],
	},
	{
		id: "block-notas",
		name: "Block de Notas Personalizado",
		category: "Papelería",
		href: "/producto/block-notas",
		description: "Block de notas con logo",
		tags: ["block", "notas", "personalizado"],
	},
	{
		id: "agenda-ejecutiva",
		name: "Agenda Ejecutiva",
		category: "Papelería",
		href: "/producto/agenda-ejecutiva",
		description: "Agenda ejecutiva profesional",
		tags: ["agenda", "ejecutiva", "profesional"],
	},

	// Sostenibles
	{
		id: "botella-acero",
		name: "Botella de Acero Inoxidable",
		category: "Sostenibles",
		href: "/producto/botella-acero",
		description: "Botella reutilizable de acero inoxidable",
		tags: ["botella", "acero", "inoxidable", "sostenible", "reutilizable"],
	},
	{
		id: "bolsa-algodon",
		name: "Bolsa de Algodón Orgánico",
		category: "Sostenibles",
		href: "/producto/bolsa-algodon",
		description: "Bolsa de algodón orgánico certificado GOTS",
		tags: ["bolsa", "algodón", "orgánico", "gots", "sostenible"],
	},
	{
		id: "libreta-papel-piedra",
		name: "Libreta de Papel Piedra",
		category: "Sostenibles",
		href: "/producto/libreta-papel-piedra",
		description: "Libreta ecológica de papel piedra",
		tags: ["libreta", "papel", "piedra", "ecológica", "sostenible"],
	},
	{
		id: "boligrafo-bambu",
		name: "Bolígrafo de Bambú",
		category: "Sostenibles",
		href: "/producto/boligrafo-bambu",
		description: "Bolígrafo biodegradable de bambú",
		tags: ["bolígrafo", "bambú", "biodegradable", "sostenible"],
	},
	{
		id: "pack-sostenible",
		name: "Pack Sostenible Corporativo",
		category: "Sostenibles",
		href: "/producto/pack-sostenible",
		description: "Pack completo de productos sostenibles",
		tags: ["pack", "sostenible", "corporativo", "eco"],
	},
];

/**
 * Buscar productos en el índice
 */
export function searchProducts(query: string): ProductSearchItem[] {
	if (!query.trim()) {
		return productsIndex.slice(0, 6); // Productos destacados
	}

	const lowerQuery = query.toLowerCase();
	return productsIndex.filter(
		(product) =>
			product.name.toLowerCase().includes(lowerQuery) ||
			product.category.toLowerCase().includes(lowerQuery) ||
			product.description?.toLowerCase().includes(lowerQuery) ||
			product.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery)),
	);
}

