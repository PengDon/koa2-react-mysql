const router = require('koa-router')();

const User = require("../service/user");
const UserController = require("../controller/user");

// 根据用户id查询
router.get("/user/:name",async(ctx)=>{
    console.log('===111==='+ctx.params.name);
    ctx.body = await UserController.queryUserByName(ctx);
});
// 查詢用户列表
router.get("/user",async(ctx)=>{
    ctx.body = await UserController.queryBaseUser();
});


module.exports = router;