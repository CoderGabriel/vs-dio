//calculadora
let saldoWin = subt(1000, 10)

function subt(win, lose){

    let result = win - lose;
    return result;
}

//patentes
let nivelHeroi;


if(saldoWin < 10){
    nivelHeroi= "Ferro";
}else if (saldoWin >= 11 && saldoWin < 21){
    nivelHeroi = "Bronze";
}else if (saldoWin >= 21 && saldoWin < 51){
    nivelHeroi = "Prata";
}else if (saldoWin >= 51 && saldoWin < 81){
    nivelHeroi = "Ouro";
}else if (saldoWin >= 81 && saldoWin < 91){
    nivelHeroi = "Diamante";
}else if (saldoWin >= 91 && saldoWin < 101){
    nivelHeroi = "Lendário";
}else if (saldoWin >= 101){
    nivelHeroi = "Imortal";
}


//fim do codigo
console.log ("O herói tem saldo de vitórias de " + saldoWin)
console.log ( "está no nivel de " + nivelHeroi )