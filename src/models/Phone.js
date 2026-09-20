class Phone {
    #id;
    #number;
    #id_users;

    constructor(id, number, id_users) {
        this.#id = id;
        this.#number = number;
        this.#id_users = id_users;
    }

    get id() {
        return this.#id;
    }

    get number() {
        return this.#number;
    }
    set number(value) {
        this.#number = value;
    }

    get id_users() {
        return this.#id_users;
    }
    set id_users(value) {
        this.#id_users = value;
    }
}

export default Phone;