function computerSelection(){
    //Even Distribution of rng values.
    let random = Math.floor(Math.random() * (3 - 1 +1));
    if (random == 0) {
        return random;
    }
    else if (random == 1) {
        return random;
    }
    else if (random == 2) {
        return random;
    }
    else {
        console.log("ERROR -> Computer play function broken");
    }
}
function playerSelection(){  
    //Initial prompt for player selection
    let userText = prompt(`Type "Rock", "Paper" or "Scissors"!`);
    let playerChoice = userText.toLowerCase();
 
    //If selection is typed wrong, loop until player correctly types a selection.
    if(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){

        let correctlyTypedSelection = false;
        while(correctlyTypedSelection === false){

            let nextUserText = prompt(`You mistyped! Type "Rock", "Paper" or "Scissors".`);
            let nextSelectionAttempt = nextUserText.toLowerCase();

            if(nextSelectionAttempt === "rock" || nextSelectionAttempt === "paper" || nextSelectionAttempt === "scissors"){
                correctlyTypedSelection = true;
                playerChoice = nextSelectionAttempt;
            }
        }
    }
    
    //Return Logic
    if (playerChoice === "rock") {
        return 0;
    }
    else if(playerChoice === "paper"){
        return 1;
    }
    else if(playerChoice === "scissors"){
        return 2;
    }
    else{
        console.log("ERROR -> Something went wrong in playerSelection function return logic")
    }
}
function singleRoundGame(computer,player){
    let playerValue;
    let computerValue;
    //Quick logic to find out each selections choice and convert to string for console log
    if(player === 0 || computer === 0) if(player === 0){playerValue = "Rock"} if(computer === 0){computerValue = "Rock"}
    if(player === 1 || computer === 1) if(player === 1){playerValue = "Paper"} if(computer === 1){computerValue = "Paper"}
    if(player === 2 || computer === 2) if(player === 2){playerValue = "Scissors"} if(computer === 2){computerValue = "Scissors"}
    //Quick Console spacing
    console.log("");
    console.log(`Player chose ${playerValue}. Computer chose ${computerValue}.`)
    if(player === 0){      
        if (computer === 2){
            console.log("You win! Rock beats Scissors");
            return 3;
        } 
        else if (computer === 1){
            console.log("You loose! Rock looses to Paper");
            return 4;
        } 
        else if (computer === 0){
            console.log("Draw! You both picked Rock");
            return 5;
        } 
        else{
            console.log("ERROR -> Something went wrong in singleRoundGame game logic");
        } 
        //rock beast scissors
        //rock looses to paper
        //draw
    }
    else if(player === 1){
        if (computer === 0){
            console.log("You win! Paper beats Rock");
            return 3;
        } 
        else if (computer === 2){
            console.log("You loose! Paper looses to Scissors");
            return 4;
        } 
        else if (computer === 1){
            console.log("Draw! You both picked Paper");
            return 5;
        } 
        else{
            console.log("ERROR -> Something went wrong in singleRoundGame game logic");
        }
        //paper beats rock
        //paper looses to scissors
        //draw
    }
    else if(player === 2){
        if (computer === 1){
            console.log("You win! Scissors beats Paper");
            return 3;
        } 
        else if (computer === 0){
            console.log("You loose! Scissors looses to Rock");
            return 4;
        } 
        else if (computer === 2){
            console.log("Draw! You both picked Scissors");
            return 5;
        } 
        else{
            console.log("ERROR -> Something went wrong in singleRoundGame game logic");
        } 
        //scissors beats paper
        //scissors looses to rock
        //draw
    }
    else{
        console.log("ERROR -> Something went wrong in singleRoundGame game logic");
    }
}

function game(){   
    //Scores Object
    let scores ={
        player: 0,
        computer: 0,
        draws: 0
    }

    //Main 5 round game loop
    for (let i = 0; i < 5; i++) {
        let round = singleRoundGame(computerSelection(), playerSelection());
        
        if(round === 3){
            scores.player++;
        }
        else if(round === 4){
            scores.computer++;
        }
        else if(round === 5){  
            scores.draws++;
        }
    }

    //Display Scores
    console.log("");
    console.log("######TOTAL SCORES######");
    if (scores.player === scores.computer) {
        //Draw
        console.log(`Draw! Both the player and the computer had ${scores.player} wins`);
        console.log(`You drew ${scores.draws} times!`);
    }
    else if (scores.player > scores.computer) {
        //Win
        console.log(`You Win! You beat the computer with ${scores.player} wins, where the computer had ${scores.computer} wins`);
        console.log(`You drew ${scores.draws} times!`);
    }
    else if (scores.player < scores.computer) {
        //Loose
        console.log(`You Loose! The computer beat you with ${scores.computer} wins, where you had had ${scores.player} wins`);
        console.log(`You drew ${scores.draws} times!`);
    }
    else{
        console.log("ERROR -> Something went wrong in displaying the winner and the scores.")
    }
}
// 0, 1, 2 are rock, paper, scissors.
// 3, 4, 5 are win, loose, draw.
game();
