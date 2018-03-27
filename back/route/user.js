const router = require('koa-router')();

const {queryBaseUser} = require("../service/user");

module.exports = router.get("/",async(ctx)=>{
    // ctx.body = '用户页面';
    ctx.body = await queryBaseUser();
});