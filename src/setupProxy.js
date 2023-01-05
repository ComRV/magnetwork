const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		createProxyMiddleware('/api-sandbox', {
			target: 'https://tripay.co.id',
			changeOrigin: true,
		})
	);
	app.use(
		createProxyMiddleware('/app/data-bbbpj/endpoint/data/v1', {
			target: 'https://data.mongodb-api.com',
			changeOrigin: true,
		})
	);
};
