"use strict";
exports.__esModule = true;
var alistamento_1 = require("./alistamento");
function main() {
    var pessoa = new alistamento_1.alistamento(2002, 2020);
    if (pessoa.anoAtual - pessoa.anoDeNascimento >= 18) {
        console.log('Você já deve realizar seu alistamento');
    }
    else {
        console.log('Você ainda não está apto para o alistamento militar obrigatório');
    }
}
main();
