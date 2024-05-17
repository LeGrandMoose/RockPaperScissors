let sumComp = 0;
let sumPlayer = 0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return ['This Is a draw', 0, 0]
    }
    else if (playerSelection.toLowerCase() == 'rock'){
        if (computerSelection.toLowerCase() == 'paper'){
            return['The computer prevails',1,0]
        }
        else if  (computerSelection.toLowerCase() == 'scissors'){
            return['The player prevails',0,1]
        }
    }
    else if (playerSelection.toLowerCase() == 'paper'){
        if (computerSelection.toLowerCase() == 'scissors'){
            return['The computer prevails',1,0]
        }
        else if  (computerSelection.toLowerCase() == 'rock'){
            return['The player prevails',0,1]
        }
    }
    else if (playerSelection.toLowerCase() == 'scissors'){
        if (computerSelection.toLowerCase() == 'rock'){
            return['The computer prevails',1,0]
        }
        else if  (computerSelection.toLowerCase() == 'paper'){
            return['The player prevails',0,1]
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

const buttons = document.querySelectorAll('.gameButton');
const btn = document.querySelector('.resetButton');
const list = document.querySelector('ul');

const playVal = document.querySelector('.playerRes');
const compVal = document.querySelector('.compRes');



buttons.forEach((button) => {

    button.addEventListener('click', () => {
       let [myValue,comp,player] = (playRound(button.value,getComputerChoice()))
        
        sumComp = sumComp + comp;
        sumPlayer = sumPlayer + player;

        playVal.textContent = sumPlayer;
        compVal.textContent = sumComp;

        const item = document.createElement('li');
        const spn = document.createElement('span');

        spn.textContent = myValue;
        item.appendChild(spn);
        list.appendChild(item);

    });
});

btn.addEventListener('click', () =>{

    list.innerHTML = ''
    sumComp = 0;
    sumPlayer = 0;

    playVal.textContent = '0';
    compVal.textContent = '0';
})








