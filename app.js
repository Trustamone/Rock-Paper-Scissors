// Return random choice for computer

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0:
            return ['PAPER', 0];

        case 1:
            return ['SCISSOR', 2];

        case 2:
            return ['ROCK', 1];

        default:
            console.log('ERROR');
            break;
    }
}

function getPlayerChoice(){
    do {
        var playerSelection = prompt('Choose Rock, Paper or Scissors: ');

        } while(playerSelection.toUpperCase() !== 'ROCK' && 
            playerSelection.toUpperCase() !== 'PAPER' && 
            playerSelection.toUpperCase() !== 'SCISSOR' && playerSelection.toUpperCase() !== 'SCISSORS');

    var playerChoice = [2];
    playerChoice[0] = playerSelection.toUpperCase();
        if (playerSelection.toUpperCase() === 'SCISSOR' || playerSelection.toUpperCase() === 'SCISSORS' ){
            playerChoice[1] = 2;
        }
        if (playerSelection.toUpperCase() === 'ROCK' ){
            playerChoice[1] = 1;
        }
        if (playerSelection.toUpperCase() === 'PAPER' ){
            playerChoice[1] = 0;
        }
        playerChoice[0] = playerSelection.toUpperCase();

    return playerChoice
}


function playRound(playerChoice, computerChoice, computerPosition) {
    console.log(playerChoice)
    let outcome = playerChoice[1] - computerPosition;
    
    switch (outcome){
        case 0:
        return 'TIE!'
        
        case 1:
        return 'You LOSE! ' + computerChoice + ' beats ' + playerChoice[0];
        
        case -1:
        return 'You WIN! ' + playerChoice[0] + ' beats ' + computerChoice;

        case 2:
        return 'You WIN! ' + playerChoice[0] + ' beats ' + computerChoice;

        case -2:
        return 'You LOSE! ' + computerChoice + ' beats ' + playerChoice[0];

        default:
            return 'ERROR';

    }

}


function game(){
    
    let score = [0,0];
    let roundMsg = ''

    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        roundMsg = (playRound(getPlayerChoice(), ...computerChoice))

        if (roundMsg === 'TIE!');
        
       else if (roundMsg[4] === 'W'){
            score[0]++; 
        }
        else{
            score[1]++;
        }

        alert(roundMsg)
    }

    alert('COMPUTER SCORE: ' + score[1] + '\nPLAYER SCORE: ' + score[0])

}


game();


