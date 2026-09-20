class Item {
    #id;
    #value;
    #quantity;
    #subtotal;
    #id_sales;
    #id_products;
    #id_services;

    constructor(id, value, quantity, subtotal, id_sales, id_products, id_services) {
        this.#id = id;
        this.#value = value;
        this.#quantity = quantity;
        this.#subtotal = subtotal;
        this.#id_sales = id_sales;
        this.#id_products = id_products;
        this.#id_services = id_services;
    }

    get id() {
        return this.#id;
    }

    get value() {
        return this.#value;
    }
    set value(value) {
        this.#value = value;
    }

    get quantity() {
        return this.#quantity;
    }
    set quantity(value) {
        this.#quantity = value;
    }

    get subtotal() {
        return this.#subtotal;
    }
    set subtotal(value) {
        this.#subtotal = value;
    }

    get id_sales() {
        return this.#id_sales;
    }
    set id_sales(value) {
        this.#id_sales = value;
    }

    get id_products() {
        return this.#id_products;
    }
    set id_products(value) {
        this.#id_products = value;
    }

    get id_services() {
        return this.#id_services;
    }
    set id_services(value) {
        this.#id_services = value;
    }
}

export default Item;