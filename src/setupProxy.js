const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/restful", {
      target: "https://www.kopis.or.kr",
      changeOrigin: true,
    })
  );
};
// DB 구축해서 가져올 것, CORS는 사이트에서 데이터를 가져오지 말라고 뜨는 것이기 때문에
// 백엔드 데이터에서 데이터를 합쳐서 프론트로 직접 가져올것
// WBS 기능구현 => 백엔드 ERDM에서 더미데이터라도 받아서 받아올것 프론트는 UI구축을 최대한 빨리할 것
// DB 더미데이터가 있으면 최대한 빠르게 구축이 가능
// 게시판또한 서버 구축이 필요
