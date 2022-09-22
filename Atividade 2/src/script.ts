import PromptSync = require ('prompt-sync');
import { contaBancaria } from './contaBancaria';

const prompt = PromptSync ()



const Name = prompt ('Digite seu nome: ')
const datadeNascimento = prompt ('Digite data de nascimento: ')
const CPF = Number( prompt (' Digite seu CPF: '))
   
const contabancaria = new contaBancaria (
    Name,
    datadeNascimento,
    CPF
)

console.log(`Nome: ${Name}`)
console.log(`Data de Nascimento: ${datadeNascimento}`)
console.log(`CPF: ${CPF}`)