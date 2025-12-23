/**
 * Configuración PM2 para Publisol
 * Usar: pm2 start ecosystem.config.js
 */
module.exports = {
	apps: [
		{
			name: 'publisol',
			script: './build/index.js',
			instances: 1,
			exec_mode: 'cluster',
			env: {
				NODE_ENV: 'production',
				PORT: 3000,
				HOST: '0.0.0.0'
			},
			error_file: './logs/err.log',
			out_file: './logs/out.log',
			log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
			merge_logs: true,
			autorestart: true,
			max_restarts: 10,
			min_uptime: '10s'
		}
	]
};

