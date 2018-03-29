const router = require('koa-router')();

const User = require("../service/user");
const UserController = require("../controller/user");

// 根据用户id查询
router.post("/user/:name",async(ctx)=>{
    console.log(ctx.params);
    ctx.body = await UserController.queryUserByName(ctx);
});
// 查詢用户列表
router.get("/user",async(ctx)=>{
    ctx.body = await UserController.queryBaseUser();
});


module.exports = router;