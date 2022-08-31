function computerSelection(){
    //Even Distribution of rng values.
    let random = Math.floor(Math.random() * (3 - 1 +1)) + 1;

    if (random == 1) {
        return "Rock";
    }
    else if (random == 2) {
        return "Paper"
    }
    else if (random == 3) {
        return "Scissors";
    }
    else {
        console.log("ERROR -> Computer play function broken");
    }
}
function playerSelection(){
    let userText = prompt(`Type "Rock", "Paper" or "Scissors"!`);
    let playerChoice = userText.toLowerCase();

    console.log(playerChoice);

    if (playerChoice == "rock") {
        return "Rock";
    }
    else if(playerChoice == "paper"){
        return "Paper";
    }
    else if(playerChoice == "scissors"){
        return "Scissors";
    }
    else{
        console.log("You may have mistyped your selection. Try again");
        return(playerSelection());
    }
}