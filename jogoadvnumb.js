let continuar = 1;

do{
    let escolhaPC = escolhadoComputador();
    let acertou = false;

    for(let cont = 0; cont < 3; cont++){
        console.log("Você esta na sua "+(cont+1)+"° tentativa.");

        let escolhaUser = escolhadoUser();

        if(comparando(escolhaPC, escolhaUser)){
            console.log("Partida encerrada!")
            acertou = true;
            break;
        }
    }

    if(!acertou){
        console.log("Você perdeu! O número secreto era " + escolhaPC + ".");
    }

    continuar = (prompt("Deseja continuar jogando? \n[1] - SIM \n[2] - NÃO"));

}while(continuar == 1);

function escolhadoComputador(){
    return Math.floor(Math.random() * 100) + 1;
}

function escolhadoUser(){
    return prompt("Escolha um número de 1 a 100 para seu palpite:");
}

function comparando(escolhaPC, escolhaUser){
    if(escolhaPC == escolhaUser){
        console.log("Você acertou o número!");
        return true;
    } 
    else if(escolhaUser < escolhaPC){
        console.log("Você errou, o número secreto é menor que o escolhido.");
    } 
    else if(escolhaUser > escolhaPC){
        console.log("Você errou, o número secreto é maior que o escolhido.");
    }
    return false;
}