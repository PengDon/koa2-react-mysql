const router = require('koa-router')();

module.exports = router.get("/",async(ctx)=>{
    ctx.body = '这是首页';
});