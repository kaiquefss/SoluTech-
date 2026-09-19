class Sale {
    #id;
    #sale_date;
    #number;
    #payment_method;
    #total_value;
    #id_clients;
    #id_users;

    constructor(id, sale_date, number, payment_method, total_value, id_clients, id_users) {
        this.#id = id;
        this.#sale_date = sale_date;
        this.#number = number;
        this.#payment_method = payment_method;
        this.#total_value = total_value;
        this.#id_clients = id_clients;
        this.#id_users = id_users;
    }

    //id 
    get id() {
        return this.#id;
    }

    //data da venda
    get sale_date() {
        return this.#sale_date;
    }
    set sale_date(value) {
        this.#sale_date = value;
    }

    //numero do pedido
    get number() {
        return this.#number;
    }
    set number(value) {
        this.#number = value;
    }

    //metodo de pagamento
    get payment_method() {
        return this.#payment_method;
    }
    set payment_method(value) {
        this.#payment_method = value;
    }

    //valor total
    get total_value() {
        return this.#total_value;
    }
    set total_value(value) {
        this.#total_value = value;
    }

    //id do cliente
    get id_clients() {
        return this.#id_clients;
    }

    //id do usuario
    get id_users() {
        return this.#id_users;
    }

}

export default Sale;