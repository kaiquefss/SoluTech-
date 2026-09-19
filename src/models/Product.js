class Product{
    #id;
    #name;
    #description;
    #quantity;
    #value;

    constructor(id, name, description, quantity, value){
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#quantity = quantity;
        this.#value = value
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name
    }

    set name(value){
        return this.#name = value;
    }

    get description(){
        return this.#description;
    }

    set description(value){
        return this.#description = value;
    }

    get quantity(){
        return this.#quantity;
    }

    set quantity(value){
        return this.#quantity = value;
    }

    get value(){
        return this.#value;
    }

    set value(value){
        return this.#value = value;
    }

}

export default Product;