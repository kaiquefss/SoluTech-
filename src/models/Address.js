class Address {
    #id;
    #street;
    #number;
    #neighborhood;
    #city;
    #state;
    #zip_code;
    #id_users;

    constructor(id, street, number, neighborhood, city, state, zip_code, id_users) {
        this.#id = id;
        this.#street = street;
        this.#number = number;
        this.#neighborhood = neighborhood;
        this.#city = city;
        this.#state = state;
        this.#zip_code = zip_code;
        this.#id_users = id_users;
    }

    get id() {
        return this.#id;
    }

    get street() {
        return this.#street;
    }
    set street(value) {
        this.#street = value;
    }

    get number() {
        return this.#number;
    }
    set number(value) {
        this.#number = value;
    }

    get neighborhood() {
        return this.#neighborhood;
    }
    set neighborhood(value) {
        this.#neighborhood = value;
    }

    get city() {
        return this.#city;
    }
    set city(value) {
        this.#city = value;
    }

    get state() {
        return this.#state;
    }
    set state(value) {
        this.#state = value;
    }

    get zip_code() {
        return this.#zip_code;
    }
    set zip_code(value) {
        this.#zip_code = value;
    }

    get id_users() {
        return this.#id_users;
    }
    set id_users(value) {
        this.#id_users = value;
    }
}

export default Address;