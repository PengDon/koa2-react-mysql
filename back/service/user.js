const {query} = require("../util/db");

const queryBaseUser = async(ctx) => {
	return await query("SELECT * FROM t_s_base_user");
}

const queryUserByName = async(ctx)=> {
    return await query("SELECT * FROM `t_s_base_user` where realname = '"+ctx.params.name+"'");
}

module.exports = User = {
    queryBaseUser,
    queryUserByName
};