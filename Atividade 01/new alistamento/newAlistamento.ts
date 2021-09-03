export class newAlistamento{
    _anoDeNascimento: number;
    _anoAtual: number;

    constructor(anoNasc: number, anoAtual: number){
        this._anoDeNascimento = anoNasc;
        this._anoAtual = anoAtual;
    }

    public eApto(): void{
        if(this._anoAtual - this._anoDeNascimento >= 18){
            console.log('Você já deve realizar seu alistamento');
            return;
        }
        console.log('Você ainda não está apto para o alistamento militar obrigatório');
    }
}