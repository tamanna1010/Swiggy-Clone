const {createProxyMiddleware} = require('http-proxy-middleware');
const proxy = {
    target: 'https://run.mocky.io/v3',
    changeOrigin: true,
};
module.exports = function (app) {
    app.use('/test', createProxyMiddleware(proxy));
}