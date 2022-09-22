"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//patinete 
var PromptSync = require("prompt-sync");
var Patinete_1 = require("./Patinete");
var prompt = PromptSync();
var cor = prompt('Digite a cor do patinete: ');
var modelo = prompt('Digite o modelo do patinete: ');
var valor = Number(prompt('Digite o valor do patinete: '));
var patinete = new Patinete_1.Patinete({
    cor: cor,
    modelo: modelo,
    valor: valor
});
console.log("Patinete ".concat(modelo, ", da cor ").concat(cor, ", custa R$: ").concat(valor));
