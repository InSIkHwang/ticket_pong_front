const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/restful", {
      target: "https://www.kopis.or.kr/openApi",
      changeOrigin: true,
    })
  );
};
