"use strict";
exports.__esModule = true;
exports.newAlistamento = void 0;
var newAlistamento = /** @class */ (function () {
    function newAlistamento(anoNasc, anoAtual) {
        this._anoDeNascimento = anoNasc;
        this._anoAtual = anoAtual;
    }
    newAlistamento.prototype.eApto = function () {
        if (this._anoAtual - this._anoDeNascimento >= 18) {
            console.log('Você já deve realizar seu alistamento');
            return;
        }
        console.log('Você ainda não está apto para o alistamento militar obrigatório');
    };
    return newAlistamento;
}());
exports.newAlistamento = newAlistamento;
