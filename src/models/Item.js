class Item{
    #id;
    #value
    #quantity
    #subtotal
    constructor(id, value, quantity, subtotal){
        this.#id = id;
        this.#value = value;
        this.#quantity = quantity;
        this.#subtotal = subtotal
    }
     get id(){
        return this.#id;
    }

    get value(){
        return this.#value;
    }

    set value(value){
        return this.#value = value;
    }
     get quantity(){
        return this.#quantity;
    }

    set quantity(value){
        return this.#quantity = value;
    }
    get subtotal(){
        return this.#subtotal;
    }

    set subtotal(value){
        return this.#subtotal = value;
    }

}

export default Item;