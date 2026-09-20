class Endereco {
    #id
    #street
    #number
    #district
    #city
    #state
    #cep

    constructor(street, number, district, city, state, cep, id = null)
    {
        this.#street = street
        this.#number = number
        this.#district = district
        this.#city = city
        this.#state = state
        this.#cep = cep
        this.#id = id
    }

    get street (){
        return this.#street;
    }
    set street(value){    
        this.#street = value;
    }
    get number(){   
        return this.#number;
    }
    set number(value){    
        this.#number = value;
    }
    get district(){
        return this.#district;
    }
    set district(value){    
        this.#district = value;
    }
    get city(){
        return this.#city;
    }
    set city(value){    
        this.#city = value;
    }
    get state(){
        return this.#state;
    }
    set state(value){    
        this.#state = value;
    }
    get cep(){
        return this.#cep;
    }
    set cep(value){    
        this.#cep = value;
    }
    get id(){
        return this.#id;
    }
    set id(value){    
        this.#id = value;
    }

}