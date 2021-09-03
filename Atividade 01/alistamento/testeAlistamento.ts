import { alistamento } from "./alistamento"

function main(){
    const pessoa = new alistamento(2002, 2020);
    if(pessoa.anoAtual - pessoa.anoDeNascimento >= 18){
        console.log('Você já deve realizar seu alistamento');
    }else{
        console.log('Você ainda não está apto para o alistamento militar obrigatório');
    }
}

main();