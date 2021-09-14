const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'https://drive.google.com/file/d/1IecoDryko_5mUGgz2xn7KSZRPHwWw72g/view',
    createProxyMiddleware({
      target: 'https://drive.google.com/file/d/1IecoDryko_5mUGgz2xn7KSZRPHwWw72g/view',
      changeOrigin: true,
      secure: false,

    })
  );
};