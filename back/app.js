const Koa = require('koa'); // 引用koa模块
const app = new Koa(); // 实例化koa对象

// app.use 加载请求/中间件，async 异步请求 ， ctx 表示上下文
// 最简单的写法
// app.use( async ( ctx ) => {
//  ctx.body = 'Hello World';
// })

// 数据类型控制
// app.use( async ( ctx ) => {
// 	// 判断接收的内容数据类型
// 	if(ctx.accepts('json')){
//     ctx.type = 'json'; // 设置接收内容的数据类型
// 		ctx.body = { data: 'Hello World' }; // 输出内容匹配数据类型
// 	}
// 	if(ctx.accepts('xml')){
//     ctx.type = 'xml';
// 		ctx.body = '<data>Hello World</data>';
// 	}
// 	if(ctx.accepts('html')){
//     ctx.type = 'html';
// 		ctx.body = '<p>Hello World</p>';
// 	}
// 	if(ctx.accepts('text')){
//     ctx.type = 'text';
// 		ctx.body = 'Hello World';
// 	}
// })

// 读取本地文件,可以读取json、xml、txt、html等类型文件
// const fs = require('fs');
// app.use(async(ctx) => {
// 	ctx.type = 'html';
// 	ctx.body = fs.createReadStream('index.html');
// });

// 原生路由router 简单实现
// app.use(async(ctx)=>{
// 	 if(ctx.path !== '/'){
// 		 	ctx.type = 'html';
// 		 	ctx.body = '<p>天天向上</p>';
// 	 }else{
// 		 ctx.body = '码农之家';
// 	 }
// });

// 封装的koa-route
// const route = require('koa-route');
// const home = ctx => {
// 	ctx.body = 'koa-route is good';
// }
// app.use(route.get('/',home));

// 日志输出
// app.use(async(ctx)=>{
//  console.log(`时间=${new Date(Date.now()).toLocaleString().replace(/\//g,'-')} 请求类型=${ctx.method} url=${ctx.url}`);
//  ctx.body = '输出日志信息';
// });

// 中间件
// const one = (ctx, next) => {
//   console.log('>> one');
//   next();
//   console.log('<< one');
// }
// const two = (ctx, next) => {
//   console.log('>> two');
//   next();
//   console.log('<< two');
// }
// const three = (ctx, next) => {
//   console.log('>> three');
//   next();
//   console.log('<< three');
// }
// app.use(one);
// app.use(two);
// app.use(three);

// 异步调用中间件 ， 地址：https://www.npmjs.com/package/fs.promised
// const fs = require('fs.promised');
// const main = async(ctx ,next) =>{
//     ctx.type = 'html';
//     ctx.body = await fs.readFile('index.html','utf8');
// }
// app.use(main);

// 中间件合成 , 地址：https://www.npmjs.com/package/koa-compose
// const compose = require('koa-compose');
// const logger = (ctx,next) => {
// 	console.log(`时间=${new Date(Date.now()).toLocaleString().replace(/\//g,'-')} 请求类型=${ctx.method} url=${ctx.url}`);
// 	next();
// }
// const main = ctx =>{
// 	ctx.body = '中间件合成';
// }
// const middlewares = compose([logger,main]);
// app.use(middlewares);

// 静态资源 ,代码地址：https://www.npmjs.com/package/koa-static
// const path = require('path');
// const serve = require('koa-static');
// const main = serve(path.join(__dirname));
// app.use(main);

// 请求重定向 , 访问地址：http://127.0.0.1:3000/redirect
// const route = require('koa-route');
// const redirect = ctx => {
//   ctx.status = 301;
//   ctx.redirect('/'); // 重定向到指定资源
//   ctx.body = '<a href="/">Index Page</a>';
// };
// const main = ctx => {
//   ctx.body = 'redirect';
// };
// app.use(route.get('/', main));
// app.use(route.get('/redirect', redirect));

// 错误处理，500
// const main = ctx => {
//   ctx.throw(500);
// };
// const main = ctx => {
// 	ctx.status = 404;
// 	ctx.body = '页面走丢了';
// }
// app.use(main);

// 错误统一处理中间件
// const handler = async (ctx, next) => {
//   try {
//     await next();
//   } catch (err) {
//     ctx.status = err.statusCode || err.status || 500;
//     ctx.body = {
//       message: err.message
//     };
//   }
// };
// const main = ctx => {
//   ctx.throw(500);
// };
// app.use(handler);
// app.use(main);

// 监听error事件
// const main = ctx => {
//   ctx.throw(500);
// };
// app.on('error', (err, ctx) =>{
//   console.error('server error', err, ctx);
// });
// app.use(main);

// 释放error事件
// const handler = async (ctx, next) => {
//   try {
//     await next();
//   } catch (err) {
//     ctx.status = err.statusCode || err.status || 500;
//     ctx.type = 'html';
//     ctx.body = '<p>Something wrong, please contact administrator.</p>';
//     ctx.app.emit('error', err, ctx);
//   }
// };
// const main = ctx => {
//   ctx.throw(500);
// };
// app.on('error',(err)=> {
//   console.log('============================');
//   console.log('logging error ', err.message);
//   console.log(err);
// });
// app.use(handler);
// app.use(main);

// 读写cookie
// const main = ctx => {
// 	let num = Number(ctx.cookies.get('key')||0)+1;
// 	ctx.cookies.set('key',num);
// 	ctx.body = `${num}key`; // es6字符串模板写法
// }
// app.use(main);

// 表单处理，koa-body模块可以用来从 POST 请求的数据体里面提取键值对
// const koaBody = require('koa-body');
// const main = async(ctx) =>{
//   let body = ctx.request.body;
//   console.log('=================');
//   console.log(body);
//   console.log('=================');
//   if (!body.name){
//   	ctx.throw(400, 'name required');
//   }
//   ctx.body = { name: body.name };
// };
// app.use(koaBody());
// app.use(main);
// // 新开一个命令窗口执行：curl -X POST --data "name=don" 127.0.0.1:3000 || curl -X POST --data "name" 127.0.0.1:3000

// 文件上传
// const os = require('os');
// const path = require('path');
// const fs = require('fs');
// const koaBody = require('koa-body');
// const main = async(ctx) => {
//   // 设置上传文件路径，默认在C:\Users\Administrator\AppData\Local\Temp目录
//   let tmpdir = os.tmpdir();
//   // 自定义上传文件目录
//   tmpdir = 'D:/self/koaDemo/base/path';
//   let filePaths = [];
//   let files = ctx.request.body.files || {};
//   for (let key in files) {
//     let file = files[key];
//     let filePath = path.join(tmpdir, file.name);
//     let writer = fs.createWriteStream(filePath);
//     reader.pipe(writer);
//     filePaths.push(filePath);
//   }
//   ctx.body = filePaths;
// };
// app.use(koaBody({ multipart: true }));
// app.use(main);
// // 新开一个命令窗口执行：curl --form upload=@D:/self/koaDemo/base/path/a.txt http://127.0.0.1:3000

// 获取get请求数据
// app.use(async(ctx) => {
// 	let url = ctx.url;
// 	// 从上下文的request对象中获取
// 	let req = ctx.request;
// 	let req_query = req.query;
// 	let req_querystring = req.querystring;
// 	// 从上下文中直接获取
// 	let ctx_query = ctx.query;
// 	let ctx_querystring = ctx.querystring;
// 	ctx.body = {
// 	    url,
// 	    req_query,
// 	    req_querystring,
// 	    ctx_query,
// 	    ctx_querystring
// 	  }
// });
// // 浏览器访问：http://localhost:3000/?a=1&b=2

// 连mysql数据库[基础版]
// const mysql = require('mysql'); // 引用mysql模块
// // 创建数据连接池
// const pool = mysql.createPool({
//   host     : '127.0.0.1',   // 数据库地址
//   user     : 'root',    // 数据库用户
//   password : 'usbw',   // 数据库密码
//   database : 'jeecg'  // 选中数据库
// });
// // 在数据池中进行会话操作
// pool.getConnection((err, connection)=> {
//   // 执行sql脚本对数据库进行读写 
//   connection.query('SELECT * FROM t_s_base_user',  (error, results, fields) => {
//      console.log(results); // 表所有内容集合
//      console.log(fields); // 表所有列名集合
//     // 结束会话
//     connection.release();
//     // 如果有错误就抛出
//     if (error) throw error;
//   })
// })

// 连接mysql数据库[简单封装版]
const mysql = require('mysql');
const pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'usbw',
	database:'jeecg'
});
let query = async(sql,values)=>{
	return new Promise((resolve,reject)=>{
		pool.getConnection((err,connection)=>{
			if(err){
				reject(err);
			}else{
				connection.query(sql,values,(error,results,fields)=>{
					if(err){
						reject(err);
					}else{
						resolve(results);
					}
					connection.release();
				});
			}
		});
	});
}
const main = async(ctx) => {
    let sql = 'SELECT * FROM t_s_base_user';
    let userList = await query(sql);
    console.log(typeof JSON.stringify(userList));
    // for of 迭代
    for(let v of userList){
       console.log(v.realname);
    }
    ctx.body = JSON.stringify(userList);
}
app.use(main);

// // 连接mysql数据库[简单封装版+简单art-template模板展示]
// const mysql = require('mysql');
// const render = require('koa-art-template');
// const path = require('path');
// const pool = mysql.createPool({
// 	host:'127.0.0.1',
// 	user:'root',
// 	password:'usbw',
// 	database:'jeecg'
// });
// let query = async(sql,values)=>{
// 	return new Promise((resolve,reject)=>{
// 		pool.getConnection((err,connection)=>{
// 			if(err){
// 				reject(err);
// 			}else{
// 				connection.query(sql,values,(error,results,fields)=>{
// 					if(err){
// 						reject(err);
// 					}else{
// 						resolve(results);
// 					}
// 					connection.release();
// 				});
// 			}
// 		});
// 	});
// }
// render(app, {
//   root: path.join(__dirname, 'view'),
//   extname: '.art',
//   debug: process.env.NODE_ENV !== 'production'
// });
// const main = async(ctx) => {
//     let sql = 'SELECT * FROM t_s_base_user';
//     let userList = await query(sql);

//     console.log('================================');
//     console.log(userList);
//     console.log('================================');
//     await ctx.render('cont',{userList});
// }
// app.use(main);

// session
// const session = require('koa-session-minimal');
// const MysqlSession = require('koa-mysql-session');
// // 配置存储session信息的mysql
// let store = new MysqlSession({
//   user: 'root',
//   password: 'usbw',
//   database: 'jeecg',
//   host: '127.0.0.1',
// });
// // 存放sessionId的cookie配置
// let cookie = {
//   maxAge: '', // cookie有效时长
//   expires: '',  // cookie失效时间
//   path: '', // 写cookie所在的路径
//   domain: '', // 写cookie所在的域名
//   httpOnly: '', // 是否只用于http请求中获取
//   overwrite: '',  // 是否允许重写
//   secure: '',
//   sameSite: '',
//   signed: '',
// };
// // 使用session中间件
// app.use(session({
//   key: 'SESSION_ID',
//   store: store,
//   cookie: cookie
// }));
// app.use( async ( ctx ) => {
//   // 设置session
//   if ( ctx.url === '/set' ) {
//     ctx.session = {
//       user_id: Math.random().toString(36).substr(2),
//       count: 0
//     }
//     ctx.body = ctx.session
//   } else if ( ctx.url === '/' ) {
//     // 读取session信息
//     ctx.session.count = ctx.session.count + 1
//     ctx.body = ctx.session
//   } 
// });

// cookie
// app.use( async ( ctx ) => {
//   if ( ctx.url === '/index' ) {
//     ctx.cookies.set(
//       'cid', 
//       'hello world',
//       {
//         domain: 'localhost',  // 写cookie所在的域名
//         path: '/index',       // 写cookie所在的路径
//         maxAge: 10 * 60 * 1000, // cookie有效时长
//         expires: new Date('2017-02-15'),  // cookie失效时间
//         httpOnly: false,  // 是否只用于http请求中获取
//         overwrite: false  // 是否允许重写
//       }
//     )
//     ctx.body = 'cookie is ok'
//   } else {
//     ctx.body = 'hello world' 
//   }
// });

// ejs 模板引擎
// const views = require('koa-views');
// const path = require('path');
// // 加载模板引擎
// app.use(views(path.join(__dirname, './view'), {
//   extension: 'ejs'
// }));
// app.use( async ( ctx ) => {
//   let title = 'example ejs'
//   await ctx.render('index', {
//     title,
//   })
// });

// jsonp
// app.use( async ( ctx ) => {
//   // 如果jsonp 的请求为GET
//   if ( ctx.method === 'GET' && ctx.url.split('?')[0] === '/getData.jsonp') {
//     // 获取jsonp的callback
//     let callbackName = ctx.query.callback || 'callback';
//     let returnData = {
//       success: true,
//       data: {
//         text: 'this is a jsonp api',
//         time: new Date().getTime(),
//       }
//     }
//     // jsonp的script字符串
//     let jsonpStr = `;${callbackName}(${JSON.stringify(returnData)})`;
//     // 用text/javascript，让请求支持跨域获取
//     ctx.type = 'text/javascript';
//     // 输出jsonp字符串
//     ctx.body = jsonpStr;
//   } else {
//     ctx.body = 'hello jsonp';
//   }
// });


app.listen(3002); // 启动koa监听，端口可以自定义
