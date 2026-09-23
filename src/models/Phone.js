class Phone {
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

    get id (){
        return this.#id;
    }

    get observation(){
        return this.#observation;
    }
    set observation(value){    
        this.#observation = value;
    }
    get number(){
        return this.#number;
    }
    set number(value){    
        this.#number = value;
    }
    get ddd(){
        return this.#ddd;
    }
    set ddd(value){    
        this.#ddd = value;
    }
    
}

export default Cliente