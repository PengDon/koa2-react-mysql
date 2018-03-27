import Server from '../utils/server';

class User extends Server {
    constructor() {
      super();
    }

    async queryUser() {
        let result;
        try {
            result = await this.get('http://localhost:3002/user');
        } catch (error) {
            throw error;
        }
        return result;
    }
}
export default new User;