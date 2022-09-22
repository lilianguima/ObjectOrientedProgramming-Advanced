import PromptSync = require ('prompt-sync');
import { Paciente } from './Paciente';

const prompt = PromptSync ()



const Name = prompt ('Digite seu nome: ')
const diagnostico = prompt ('Digite seu diagnostico: ')
const CPF = Number( prompt (' Digite seu CPF: '))
   
const paciente = new Paciente (
    Name,
    diagnostico,
    CPF
)

console.log(`Nome: ${Name}`)
console.log(`Diagnóstico: ${diagnostico}`)
console.log(`CPF: ${CPF}`)