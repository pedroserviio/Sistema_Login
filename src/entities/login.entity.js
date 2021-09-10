import User from "./user.entity";

export default class Login {
    constructor(user = new User, token, expires) {
        this.user = user;
        this.token = token;
        this. expires = expires;
    }
}