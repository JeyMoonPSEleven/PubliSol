import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import path from 'path';
import { existsSync } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const designSystemLibPath = path.resolve(__dirname, '../design-system/src/lib');
const designSystemPath = path.resolve(__dirname, '../design-system');

export default defineConfig({
	plugins: [
		{
			name: 'resolve-design-system-lib',
			enforce: 'pre',
			resolveId(id, importer) {
				// Solo procesar imports de $lib
				if (!id.startsWith('$lib')) {
					return null;
				}

				// Si no hay importer, no podemos determinar el contexto
				if (!importer) {
					return null;
				}

				// Normalizar paths para comparaciones más robustas
				const normalizedImporter = path.normalize(importer);
				const normalizedDesignSystemPath = path.normalize(designSystemPath);

				// Verificar si el import viene del design-system
				const isFromDesignSystem = 
					normalizedImporter.includes('design-system') || 
					normalizedImporter.includes('atomic-design-svelte') ||
					normalizedImporter.includes(path.sep + 'design-system' + path.sep) ||
					normalizedImporter.startsWith(normalizedDesignSystemPath);

				if (!isFromDesignSystem) {
					return null;
				}

				// Resolver el path relativo
				const relativePath = id.replace('$lib', '').replace(/^\//, '');
				const resolvedPath = path.resolve(designSystemLibPath, relativePath);

				// Intentar diferentes extensiones y rutas
				const attempts = [
					resolvedPath + '.ts',
					resolvedPath + '.svelte',
					resolvedPath + '.js',
					path.join(resolvedPath, 'index.ts'),
					path.join(resolvedPath, 'index.svelte'),
					path.join(resolvedPath, 'index.js'),
					resolvedPath
				];

				for (const attempt of attempts) {
					const normalizedAttempt = path.normalize(attempt);
					if (existsSync(normalizedAttempt)) {
						// Devolver el path absoluto normalizado
						return normalizedAttempt;
					}
				}

				return null;
			},
			transform(code, id) {
				// Solo procesar archivos del design-system
				if (!id.includes('design-system') && !id.includes('atomic-design-svelte')) {
					return null;
				}

				// Reemplazar imports de $lib con paths relativos al design-system
				// Esto es un fallback si resolveId no funciona
				const normalizedId = path.normalize(id);
				const normalizedDesignSystemPathForTransform = path.normalize(designSystemPath);
				
				if (normalizedId.startsWith(normalizedDesignSystemPathForTransform)) {
					// Calcular el path relativo desde el archivo actual al design-system/src/lib
					const fileDir = path.dirname(normalizedId);
					
					// Reemplazar imports de $lib con paths relativos
					const updatedCode = code.replace(
						/from\s+['"]\$lib\/([^'"]+)['"]/g,
						(match, libPath) => {
							const targetPath = path.resolve(designSystemLibPath, libPath);
							const relativePath = path.relative(fileDir, targetPath).replace(/\\/g, '/');
							// Asegurar que el path relativo comience con ./
							const finalPath = relativePath.startsWith('.') ? relativePath : './' + relativePath;
							return `from '${finalPath}'`;
						}
					);

					if (updatedCode !== code) {
						return {
							code: updatedCode,
							map: null
						};
					}
				}

				return null;
			}
		},
		sveltekit(),
		tailwindcss()
	],
	// Configurar resolve para manejar $lib del design-system
	resolve: {
		alias: {
			// Este alias solo se aplicará cuando Vite no pueda resolver con el plugin
			// pero necesitamos que el plugin tenga prioridad
		}
	},
	optimizeDeps: {
		// Excluir el design-system de la optimización de dependencias
		// para que se procese correctamente
		exclude: ['atomic-design-svelte']
	}
});

