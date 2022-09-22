//patinete 
import PromptSync = require ('prompt-sync');

import { Patinete } from "./Patinete";

const prompt = PromptSync ()

const cor = prompt('Digite a cor do patinete: ')
const modelo = prompt('Digite o modelo do patinete: ')
const valor = Number( prompt('Digite o valor do patinete: '))

const patinete = new Patinete ({
    cor,
    modelo,
    valor
});

console.log(`Patinete ${modelo}, da cor ${cor}, custa R$: ${valor}`) 