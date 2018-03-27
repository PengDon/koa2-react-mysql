const UserService = require("../service/user");

// 查询基础用户数据 
const queryBaseUser = async(ctx) => {
    let result;
    result = await UserService.queryBaseUser();
    return result;
}

const queryUserByName = async(ctx)=> {
    let result;
    result = await UserService.queryUserByName(ctx);
    return result;
}

module.exports = UserController = {
    queryBaseUser,
    queryUserByName
};