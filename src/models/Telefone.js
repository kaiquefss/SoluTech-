class Telefone {
    #id
    #observation
    #number
    #ddd
   
    constructor(observation, number, ddd, id = null){
        this.#observation = observation
        this.#number = number
        this.#ddd = ddd
        this.#id = id
        
    }

    get observation (){
        return this.#observation;
    }

    get observation(){
        return this.#observation;
    }
    set observation(value){    
        this.#observation = value;
    }
    get email(){
        return this.#email;
    }
    set email(value){    
        this.#email = value;
    }
    get cpf(){
        return this.#cpf;
    }
    set cpf(value){    
        this.#cpf = value;
    }
    
}

export default Cliente