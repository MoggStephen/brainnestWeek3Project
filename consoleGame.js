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
    //114, 111, 99, 107 -> rock // 
    if (playerChoice === "rock") {
        return "Rock";
    }
    else if(playerChoice === "paper"){
        return "Paper";
    }
    else if(playerChoice === "scissors"){
        return "Scissors";
    }
    else{
        console.log("You may have mistyped your selection. Try again!");
        return(playerSelection());
    }
}
function singleRoundGame(computer,player){
    if(player === "Rock"){
       
        //rock beast scissors

        //rock looses to paper

        //draw
    }
    else if(player === "Paper"){
        //paper beast rock

        //paper looses to scissors

        //draw
    }
    else if(player === "Scissors"){
        //paper beats rock

        //paper looses to scissors

        //draw
    }
    else{
        console.log("ERROR -> Something went wrong in game logic");
    }

}

let computer = computerSelection();
let player = playerSelection();
