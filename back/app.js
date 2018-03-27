const Koa = require('koa'); // 引用koa模块
const app = new Koa(); // 实例化koa对象

// const {query} = require("./util/db");

// const queryBaseUser = async(ctx) => {
// 	return await query('SELECT * FROM t_s_base_user');
// }

// // 原生路由router 简单实现
// app.use(async(ctx)=>{
// 	 if(ctx.path !== '/'){
// 		 	ctx.type = 'html';
// 		 	ctx.body = '<p>天天向上</p>';
// 	 }else{
// 		ctx.body = await queryBaseUser();
// 	 }
// });

const router = require("./route/index");

app.use(router.routes()).use(router.allowedMethods());

// 启动koa监听，端口可以自定义
app.listen(3002); 
