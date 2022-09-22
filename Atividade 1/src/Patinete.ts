interface NewPatinete {
    cor : string
    modelo: string
    valor: number
}

class Patinete {
    private cor: string;
    private modelo : string;
    private valor: number;

    constructor ({cor, modelo, valor} : NewPatinete) {
        this.cor = cor
        this.modelo = modelo
        this. valor = valor
    }
}

export { Patinete}