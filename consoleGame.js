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
        return "Rock";
    }
    else if(playerChoice === "paper"){
        return "Paper";
    }
    else if(playerChoice === "scissors"){
        return "Scissors";
    }
    else{
        console.log("ERROR -> Something went wrong in playerSelection function return logic")
    }
}
function singleRoundGame(computer,player){
    console.log(`Player chose ${player}. Computer chose ${computer}.`)
    if(player === "Rock"){
       
        if (computer === "Scissors"){
            console.log("You win! Rock beats Scissors");
            return("Win");
        } 
        else if (computer === "Paper"){
            console.log("You loose! Rock looses to Paper");
            return("Loose");
        } 
        else if (computer === "Rock"){
            console.log("Draw! You both picked Rock");
            return("Draw");
        } 
        else{
            console.log("ERROR -> Something went wrong in singleRoundGame game logic");
        } 
        //rock beast scissors
        //rock looses to paper
        //draw
    }
    else if(player === "Paper"){
        if (computer === "Rock"){
            console.log("You win! Paper beats Rock");
            return("Win");
        } 
        else if (computer === "Scissors"){
            console.log("You loose! Paper looses to Scissors");
            return("Loose");
        } 
        else if (computer === "Paper"){
            console.log("Draw! You both picked Paper");
            return("Draw");
        } 
        else{
            console.log("ERROR -> Something went wrong in singleRoundGame game logic");
        } 
        //paper beats rock
        //paper looses to scissors
        //draw
    }
    else if(player === "Scissors"){
        if (computer === "Paper"){
            console.log("You win! Scissors beats Paper");
            return("Win");
        } 
        else if (computer === "Rock"){
            console.log("You loose! Scissors looses to Rock");
            return("Loose");
        } 
        else if (computer === "Scissors"){
            console.log("Draw! You both picked Scissors");
            return("Draw");
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
        
        if(round === "Win"){
            scores.player++;
        }
        else if(round === "Loose"){
            scores.computer++;
        }
        else if(round === "Draw"){  
            scores.draws++;
        }
    }

    //Display Scores
    console.log("");
    console.log("######TOTAL SCORES######");
    if (scores.player === scores.computer) {
        console.log(`Draw! Both the player and the computer had ${scores.player} wins`);
        console.log(`You drew ${scores.draws} times!`);
    }
    else if (scores.player > scores.computer) {
        console.log(`You Win! You beat the computer with ${scores.player} wins, where the computer had ${scores.computer} wins`);
        console.log(`You drew ${scores.draws} times!`);
    }
    else if (scores.player < scores.computer) {
        console.log(`You Loose! The computer beat you with ${scores.computer} wins, where you had had ${scores.player} wins`);
        console.log(`You drew ${scores.draws} times!`);
    }
    else{
        console.log("ERROR -> Something went wrong in displaying the winner and the scores.")
    }
}

game();
