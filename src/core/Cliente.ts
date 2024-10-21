export default class Cliente {
    #id: string;
    #nome: string;
    #idade: number;

    constructor(nome: string, idade: number, id: string = null) {
        this.#id = id;
        this.#nome = nome;
        this.#idade = idade;
    }

    static vazio() {
        return new Cliente("", 0);
    }

    get id() {
        return this.#id;
    }
    get nome() {
        return this.#nome;
    }
    get idade(): number {
        return this.#idade;
    }

}