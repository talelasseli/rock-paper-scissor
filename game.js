function getComputerChoice(option1, option2, option3) {
    const choices = [option1, option2, option3];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    return computerChoice;
}




    let playerS = 0
    let computerS = 0


function compVSplayer(computerSelection, playerSelection) {
     
    if (computerSelection === "Rock" && playerSelection === "Paper" ) {
        playerS += 1
        return "You won! Paper beats Rock";
        
    }
    if (computerSelection === "Paper" && playerSelection === "Scissors") {
        playerS += 1
        return "You won! Scissors beats Paper";
         
    }
    if (computerSelection === "Scissors" && playerSelection === "Rock") {
        playerS += 1 
        return "You won! Rock beats Scissors";
        
    }
    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        computerS += 1
        return "Computer  won! Rock beats Scissors";
         
    }
    if (computerSelection === "Paper" && playerSelection === "Rock") {
        computerS += 1
        return "Computer  won! Paper beats Rock";
        
    }
    if (computerSelection === "Scissors" && playerSelection === "Paper") {
        computerS += 1
        return "Computer  won! Scissors beats Paper";
        
    }
    if (computerSelection === playerSelection) {
        return "That's a tie! Play again";
    }
    
    return "Invalid input, please choose Rock, Paper, or Scissors.";

}
const playRound = function(playerSelection) {
    let computerSelection = getComputerChoice("Rock","Paper","Scissors")
    const newText = document.createElement("p")
    

    newText.innerHTML = "Player choice is " + playerSelection + "<br>";
    
    newText.innerHTML += "Computer choice is " +  computerSelection + "<br>";
    
    newText.innerHTML += compVSplayer(computerSelection, playerSelection);
    
    text.append(newText)
    

    if (playerS === 3) {
        
        
        text.innerText = ""
        playerS = 0
        computerS = 0
        alert("Congratulations you are the winner!")
    }
    if (computerS === 3) {
        
        
        text.innerText = ""
        playerS = 0
        computerS = 0
        alert("You lost the computer won play again!")
    }

 
}

const body = document.body
let container = document.querySelector("#container")


let content = document.createElement("div")
container.appendChild(content)


const rock = document.createElement("button")
const paper = document.createElement("button")
const scissors = document.createElement("button")

content.append(rock)
content.append(paper)
content.append(scissors)
let text = document.createElement("div")
content.append(text)
content.style.width = "300px"

rock.innerText = 'Rock';
paper.innerText = 'Paper';
scissors.innerText = 'Scissors';


let score = document.createElement("div")
container.append(score)
score.style.marginLeft = "50px"
let playerScore = document.createElement("div")
let computerScore = document.createElement("div")
score.append(playerScore,computerScore)

playerScore.innerText = "your score"
computerScore.innerText = "computer score"
let Pnum = document.createElement("div")
playerScore.append(Pnum)
let Cnum = document.createElement("div")
computerScore.append(Cnum)


alert("welcome to my game whoever reach 3 points first wins        GOOD LUCK!")
content.addEventListener("click", function () {
    if (event.target.tagName === 'BUTTON') {
        playRound(event.target.innerText);
        Pnum.innerText = playerS
        Cnum.innerText = computerS

    }
    

})


