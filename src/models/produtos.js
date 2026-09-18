class produtos{
    #id;
    #nome;
    #descricao;
    #quantidade;
    #valor;

    constructor(id, nome,descricao, quantidade, valor){
        this.#id = id;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#quantidade = quantidade;
        this.#valor = valor
    }

    get id(){
        return this.#id;
    }

    get nome(){
        return this.#nome
    }

    set nome(value){
        return this.#nome = value;
    }

    get descricao(){
        return this.#descricao;
    }

    set descricao(value){
        return this.#descricao = value;
    }

    get quantidade(){
        return this.#quantidade;
    }

    set quantidade(value){
        return this.#quantidade = value;
    }

    get valor(){
        return this.#valor;
    }

    set valor(value){
        return this.#valor = value;
    }

}

export default produtos;