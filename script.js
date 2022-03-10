/*Le croupier donne deux valeurs au joueur

let playerTotal = 0;

let playerValue1 = Math.floor(Math.random() * 10) + 1;
let playerValue2 = Math.floor(Math.random() * 10) + 1;
playerTotal = playerValue1 + playerValue2;

console.log (`Tes cartes sont le ${playerValue1} et le ${playerValue2}. 
Ton total vaut ${playerTotal}.`)

//le croupier donne une valeur visible et une valeur cachée

let dealerTotal = 0;

let dealerValue1 = Math.floor(Math.random() * 10) + 1;
let hiddenDealerValue = Math.floor(Math.random() * 10) + 1;
dealerTotal = dealerValue1 + hiddenDealerValue;

console.log (`La carte du dealer vaut ${dealerValue1}.`)
//console.log (dealerTotal);

//Le joueur décide s'il prends une nouvelle valeur ou si il arrête
if (playerTotal<21){
    if (confirm("Veux tu tirer une nouvelle carte?")){
    let playerValue3 = Math.floor(Math.random() * 10) + 1;
    playerTotal += playerValue3; 
    console.log(`Ta nouvelle carte est le ${playerValue3}.Ton total est de ${playerTotal}.`)    
}

if (playerTotal===21){
    console.log("Blackjack!!! Bravo tu a gagné!")
}

//Si le score dépasse 21, le croupier gagne et le jeu s'arrête
if (playerTotal>21){
    console.log("Tu a perdu =(")
  }

}
else if (dealerTotal<=17){
    console.log("Le jeu est terminé")
};

//Si le score du joueur est en-dessous de 21, il  peut demander une nouvelle carte




//Si le total des deux valeurs du croupier est égale à 17 ou la dépasse, le jeu s'arrête
if (dealerTotal >= 17){
  if (dealerTotal > playerTotal){
    return "Vous avez perdu";
  }
  if (dealerTotal < playerTotal){
    return "Vous avez gagné"
  }
}
//Si le total est inférieur, il doit prendre une nouvelle valeurs
if (dealerTotal < 17){
    let dealerValue3 = Math.floor(Math.random() * 10) + 1;
      dealerTotal += dealerValue3;
      console.log(`La carte tirée vaut ${dealerValue3}, le total du dealer est maintenant de ${dealerTotal}`)
  }

//Si personne n'a au dessus de 21, le score le plus haut gagne.*/


// BONUS: rajouter un scénario et une mise


//VERSION 2

let gameOver=true;

while(gameOver){
  
gameOver = confirm("Voulez-vous commencer une nouvelle partie?");

//VERSION 2
console.log("♠️ ♣️ Bienvenue au BlackJack! ♥️ ♦️")
//  *Le croupier donne deux valeurs au joueur
console.log(``)
console.log("♠️ ♣️ VOTRE MAIN ♥️ ♦️")
let playerTotal = 0;
let randomValue = 0;
for(let i=0 ; i < 2 ; i++){
  randomValue = Math.floor(Math.random() * 10) + 1;
  console.log(`Vous avez tiré le..... ${randomValue}!!`);
  playerTotal += randomValue;
}

console.log(`Votre total est de ${playerTotal}.`);


//le croupier donne une valeur visible et une valeur cachée
console.log(``)
console.log("♠️ ♣️ LA BANQUE ♥️ ♦️")

let dealerTotal = 0;

let dealerValue1 = Math.floor(Math.random() * 10) + 1;
let hiddenDealerValue = Math.floor(Math.random() * 10) + 1;
dealerTotal = dealerValue1 + hiddenDealerValue;

console.log (`Le croupier a tiré le.....${dealerValue1} et une carte secrete.`)

//Tour du joueur
console.log(``)
if (playerTotal < 21) {
    while (confirm("Voulez-vous tirer une nouvelle carte?")) {
      let playerValue3 = Math.floor(Math.random() * 10) + 1;
  console.log(``)
      playerTotal += playerValue3;
      console.log(`Votre nouvelle carte est le ${playerValue3}.Votre total est de ${playerTotal}.`)
      if (playerTotal >= 21) {
        break;
      }
    }
  }
  
  if (playerTotal === 21) {
    console.log("Blackjack!!! Bravo vous avez gagné!")
    return
  }
  if (playerTotal > 21) {
    console.log("Votre main est perdante =(.")
    return
  }

//Tour du dealer

  console.log("C'est le tour du croupier.")
  
  if (dealerTotal < 17){
  let dealerValue3 = Math.floor(Math.random() * 10) + 1;
    dealerTotal += dealerValue3;
    console.log(`La carte tirée vaut ${dealerValue3}, le total du dealer est maintenant de ${dealerTotal}.`)
}

if (dealerTotal===21){
    console.log("Blackjack!!! Vous avez perdu =(")
  return
}

if (dealerTotal>21){
    console.log("Vous avez gagné =)")
  return
  };

//Comparatif des totaux et déclaration du vainqueur

if (dealerTotal > playerTotal){
      console.log("Vous avez perdu =(");
    }
  else if (dealerTotal < playerTotal){
      console.log("Vous avez gagné =)");
    }
  else console.log("Egalité =|");}