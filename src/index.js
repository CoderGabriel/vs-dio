let nomeHeroi = "Felipão" 
let pontosxp = 999

let rankHeroi;


if (pontosxp < 1000) {
    rankHeroi = "Ferro";
} else if (pontosxp >= 1001 && pontosxp <= 2000) {
    rankHeroi = "Bronze";
} else if (pontosxp >= 2001 && pontosxp <= 5000) {
    rankHeroi = "Prata";
} else if (pontosxp >= 5001 && pontosxp <= 7000) {
    rankHeroi = "Ouro";
} else if (pontosxp >= 7001 && pontosxp <= 8000) {
    rankHeroi = "Platina";
} else if (pontosxp >= 8001 && pontosxp <= 9000) {
    rankHeroi = "Ascendente";
} else if (pontosxp >= 9001 && pontosxp <= 10000) {
    rankHeroi = "Imortal";
} else {
    rankHeroi = "Radiante";
} 




//fim do codigo
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi  ) 