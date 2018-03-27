const Koa = require('koa'); // 引用koa模块
const app = new Koa(); // 实例化koa对象

const router = require("./route/index");

app.use(router.routes()).use(router.allowedMethods());

// 启动koa监听，端口可以自定义
app.listen(3002); 
