let nomeHeroi = "Desterk"
let xpHeroi = 3004
let elo 

if (xpHeroi < 1000){
    elo = "Ferro"
} else if (xpHeroi <= 2000){
    elo = "Bronze"
} else if (xpHeroi <= 5000){
    elo = "Prata"
} else if (xpHeroi <= 7000){
    elo = "Ouro"
} else if (xpHeroi <= 8000){
    elo = "Platina"
} else if (xpHeroi <= 9000){
    elo = "Ascendente"
} else if (xpHeroi <= 10000){
    elo = "Imortal"
} else {
    elo = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + elo )
