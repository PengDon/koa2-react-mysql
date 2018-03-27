const {query} = require("../util/db");

const queryBaseUser = async(ctx) => {
	return await query('SELECT * FROM t_s_base_user');
}

module.exports = {
    queryBaseUser
}