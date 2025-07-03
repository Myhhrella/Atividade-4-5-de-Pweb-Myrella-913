let continuar = 1;

do{
    jogo();
    
    continuar = (prompt("Deseja continuar a jogar? \n[1] - SIM \n[2] - NÃO"));

}while(continuar == 1);

function jogo(){
    let escolhaPC = escolhaComputador();
    let number = escolhadoUser();
    comparandoJogadas_declarandoVencedor(escolhaPC, number);
}

function escolhaComputador(){
    return Math.floor(Math.random() * 3) + 1;
}

function escolhadoUser(){
    return prompt("Escolha uma opção para sua jogada: \n[1] - Pedra \n[2] - Papel \n[3] - Tesoura");
}

function comparandoJogadas_declarandoVencedor(escolhaPC, number){
    if(escolhaPC == number){
        console.log("Empate! Jogue de novo.")
    }
    else if(escolhaPC == 1 && number == 2){
        console.log("Você venceu! Papel enrola pedra.")
    }
    else if(escolhaPC == 2 && number == 1){
        console.log("O computador venceu! Papel enrola pedra.")
    }
    else if(escolhaPC == 2 && number == 3){
        console.log("Você venceu! Tesoura corta papel.")
    }
    else if(escolhaPC == 3 && number == 2){
        console.log("O computador venceu! Tesoura corta papel.")
    }
    else if(escolhaPC == 3 && number == 1){
        console.log("Você venceu! Pedra quebra tesoura.")
    }
    else if (escolhaPC == 1 && number == 3){
        console.log("O computador venceu! Pedra quebra tesoura.")
    }
}
