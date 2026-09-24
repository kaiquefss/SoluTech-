 class Cliente {
    #id
    #name
    #email
    #cpf
    #phone
    #address
   
    constructor(name, email, cpf, phone, address, id = null){
        this.#name = name
        this.#email = email
        this.#cpf = cpf
        this.#phone = phone;
        this.#address = address;
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
    get phone(){
        return this.#phone;
    }
    set phone(value){    
        this.#phone = value;
    }
    get address(){
        return this.#address;
    }
    set address(value){    
        this.#address = value;
    }
    
}

export default Cliente