class Service {
    #id;
    #name;
    #description;
    #quantity;
    #value;
    #duration;

    constructor(id, name, description, quantity, value, duration) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#quantity = quantity;
        this.#value = value;
        this.#duration = duration;
    }

    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    set name(value) {
        if (!value) throw new Error("Name is mandatory.");
        this.#name = value;
    }
    get description() {
        return this.#description;
    }
    set description(value) {
        this.#description = value;
    }
    get quantity() {
        return this.#quantity;
    }
    set quantity(value) {
        if (value < 0) throw new Error("Quantity cannot be negative.");
        this.#quantity = value;
    }

    get value() {
        return this.#value;
    }
    set value(value) {
        if (value < 0) throw new Error("Value cannot be negative.");
        this.#value = value;
    }
    get duration() {
        return this.#duration;
    }
    set duration(value) {
        this.#duration = value;
    }
}

export default Service;