class Telefone {
    #id
    #observation
    #number
    #ddd
    #id_cliente 
   
    constructor(observation, number, ddd, id_cliente, id = null){
        this.#observation = observation
        this.#number = number
        this.#ddd = ddd
        this.#id_cliente = id_cliente
        this.#id = id     
    }
    get id_cliente(){
        return this.#id_cliente;
    }
    get id(){
        return this.#id;
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

export default Telefone