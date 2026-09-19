class Cliente {
    #id
    #name
    #email
    #cpf
   
    constructor(name, email, cpf, id = null){
        this.#name = name
        this.#email = email
        this.#cpf = cpf
        this.#id = id
        
    }

    get id (){
        return this.#id;
    }

    get name(){
        return this.#name;
    }
    set name(value){    
        this.#name = value;
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