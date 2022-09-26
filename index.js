var express = require("express");
// const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

// 使用代理
var app = express();

// app.use(
//   cors({
//     origin: ["http://localhost:3001"], // 所要允许跨域的ip
//     methods: ["GET", "POST"],
//     alloweHeaders: ["Conten-Type", "Authorization"],
//   })
// );

// app.use(
//   createProxyMiddleware({
//     target: "https://news-at.zhihu.com/",
//     changeOrigin: true,
//     pathRewrite: {
//       "^/": "/",
//     },
//   })
// );

app.get("*", function routeHandler(req, res) {
  res.send("ok");
});

app.listen(3000);
