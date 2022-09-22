

class contaBancaria { 
    private Name : string
    private dataDeNascimento : string
    private CPF : number 

    constructor( Name: string, dataDeNascimento: string, CPF : number){
        this.dataDeNascimento = dataDeNascimento
        this.Name =Name
        this.CPF = CPF
    }
  
}
export{contaBancaria}