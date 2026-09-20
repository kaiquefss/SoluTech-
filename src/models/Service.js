class Service {
    #id;
    #name;
    #description;
    #quantity;
    #value;
    #duration;

    constructor(name, description, quantity, value, duration, id = null) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#quantity = quantity;
        this.#value = value;
        this.#duration = duration;
    }

    // id
    get id() {
        return this.#id;
    }

    // name
    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }

    // description
    get description() {
        return this.#description;
    }
    set description(value) {
        this.#description = value;
    }

    // quantity
    get quantity() {
        return this.#quantity;
    }
    set quantity(value) {
        this.#quantity = value;
    }

    // value
    get value() {
        return this.#value;
    }
    set value(value) {
        this.#value = value;
    }

    // duration
    get duration() {
        return this.#duration;
    }
    set duration(value) {
        this.#duration = value;
    }
}

export default Service;