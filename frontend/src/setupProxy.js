const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // This should match the endpoint prefix used in your frontend
    createProxyMiddleware({
      target: 'http://localhost:4048', // Your backend server URL
      changeOrigin: true,
    })
  );
};
