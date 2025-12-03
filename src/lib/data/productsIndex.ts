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
	// Agendas Escolares
	{
		id: "agenda-premium-a4",
		name: "Agenda Escolar Premium A4",
		category: "Agendas Escolares",
		href: "/producto/agenda-escolar-premium",
		description: "Agenda escolar personalizada formato A4",
		tags: ["agenda", "escolar", "premium", "a4", "personalizada"],
	},
	{
		id: "agenda-compacta-a5",
		name: "Agenda Escolar Compacta A5",
		category: "Agendas Escolares",
		href: "/producto/agenda-escolar-compacta",
		description: "Agenda escolar formato A5 compacta",
		tags: ["agenda", "escolar", "compacta", "a5"],
	},
	{
		id: "agenda-primaria",
		name: "Agenda Escolar Primaria",
		category: "Agendas Escolares",
		href: "/producto/agenda-escolar-primaria",
		description: "Agenda diseñada para educación primaria",
		tags: ["agenda", "primaria", "escolar"],
	},
	{
		id: "agenda-secundaria",
		name: "Agenda Escolar Secundaria",
		category: "Agendas Escolares",
		href: "/producto/agenda-escolar-secundaria",
		description: "Agenda para educación secundaria y bachillerato",
		tags: ["agenda", "secundaria", "bachillerato"],
	},
	{
		id: "agenda-universitaria",
		name: "Agenda Universitaria Premium",
		category: "Agendas Escolares",
		href: "/producto/agenda-universitaria-premium",
		description: "Agenda universitaria con diseño profesional",
		tags: ["agenda", "universitaria", "premium"],
	},
	{
		id: "agenda-personalizada",
		name: "Agenda Escolar Personalizada",
		category: "Agendas Escolares",
		href: "/producto/agenda-escolar-personalizada",
		description: "Agenda completamente personalizable",
		tags: ["agenda", "personalizada", "custom"],
	},
	{
		id: "agenda-sostenible",
		name: "Agenda Sostenible Reciclada",
		category: "Productos Sostenibles",
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
		description: "Camiseta corporativa de alta calidad",
		tags: ["camiseta", "corporativa", "textil", "premium"],
	},
	{
		id: "polo-empresarial",
		name: "Polo Empresarial",
		category: "Textil",
		href: "/producto/polo-empresarial",
		description: "Polo empresarial personalizado",
		tags: ["polo", "empresarial", "textil"],
	},
	{
		id: "sudadera-capucha",
		name: "Sudadera con Capucha",
		category: "Textil",
		href: "/producto/sudadera-capucha",
		description: "Sudadera con capucha personalizada",
		tags: ["sudadera", "capucha", "textil"],
	},
	{
		id: "chaqueta-tecnica",
		name: "Chaqueta Técnica",
		category: "Textil",
		href: "/producto/chaqueta-tecnica",
		description: "Chaqueta técnica deportiva",
		tags: ["chaqueta", "técnica", "deportiva"],
	},
	{
		id: "uniformes-escolares",
		name: "Uniformes Escolares",
		category: "Textil",
		href: "/productos/textil",
		description: "Uniformes escolares personalizados",
		tags: ["uniformes", "escolares", "textil"],
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
		category: "Productos Sostenibles",
		href: "/producto/botella-acero",
		description: "Botella reutilizable de acero inoxidable",
		tags: ["botella", "acero", "inoxidable", "sostenible", "reutilizable"],
	},
	{
		id: "bolsa-algodon",
		name: "Bolsa de Algodón Orgánico",
		category: "Productos Sostenibles",
		href: "/producto/bolsa-algodon",
		description: "Bolsa de algodón orgánico certificado GOTS",
		tags: ["bolsa", "algodón", "orgánico", "gots", "sostenible"],
	},
	{
		id: "libreta-papel-piedra",
		name: "Libreta de Papel Piedra",
		category: "Productos Sostenibles",
		href: "/producto/libreta-papel-piedra",
		description: "Libreta ecológica de papel piedra",
		tags: ["libreta", "papel", "piedra", "ecológica", "sostenible"],
	},
	{
		id: "boligrafo-bambu",
		name: "Bolígrafo de Bambú",
		category: "Productos Sostenibles",
		href: "/producto/boligrafo-bambu",
		description: "Bolígrafo biodegradable de bambú",
		tags: ["bolígrafo", "bambú", "biodegradable", "sostenible"],
	},
	{
		id: "pack-sostenible",
		name: "Pack Sostenible Corporativo",
		category: "Productos Sostenibles",
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

