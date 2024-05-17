function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return('This Is a draw')
    }
    else if (playerSelection.toLowerCase() == 'rock'){
        if (computerSelection.toLowerCase() == 'paper'){
            return('The computer prevails')
        }
        else if  (computerSelection.toLowerCase() == 'scissors'){
            return('The player prevails')
        }
    }
    else if (playerSelection.toLowerCase() == 'paper'){
        if (computerSelection.toLowerCase() == 'scissors'){
            return('The computer prevails')
        }
        else if  (computerSelection.toLowerCase() == 'rock'){
            return('The player prevails')
        }
    }
    else if (playerSelection.toLowerCase() == 'scissors'){
        if (computerSelection.toLowerCase() == 'rock'){
            return('The computer prevails')
        }
        else if  (computerSelection.toLowerCase() == 'paper'){
            return('The player prevails')
        }
    }

}   

function playGame(){
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection,computerSelection))
    

}





function getComputerChoice(){
    let choices = ['rock','paper','scissors'] ;
    let index = Math.floor(Math.random() * 3);
    console.log(index)
    return (choices[index])   
}

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {

    button.addEventListener('click', () => {
        myValue = (playRound(button.value,getComputerChoice()))
    });
});
