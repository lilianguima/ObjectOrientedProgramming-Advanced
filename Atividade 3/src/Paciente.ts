class Paciente { 
    private Name : string
    private diagnostico : string
    private CPF : number 

    constructor( Name: string, diagnostico: string, CPF : number){
        this.diagnostico = diagnostico
        this.Name =Name
        this.CPF = CPF
    }
  
}
export{Paciente}