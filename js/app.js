/*-------------------------------- Constants --------------------------------*/
// 1) 3 user choices of rock, paper or scissors
const choices = ['rock','paper','scissors']


/*-------------------------------- Variables --------------------------------*/
// 2) Define our variables for state
    //The players choice
let playerChoice;
    // The computers choice
let computerChoice;
    //The match result - win/lose/tie
    //A result message - display the result/ who won
let msg;
/*------------------------ Cached Element References ------------------------*/
// 3) Reference to DOM element to disply messages
const resultDisplayElement = document.querySelector ('#result-display');
    // 3 button DOM references for rock, paper, scissors
/*-------------------------------- Functions --------------------------------*/
// 4) handle player click
const getPlayerChoice = (event) => {
    // console.log('getPlayerChoice', event)
    playerChoice = event.target.id

    console.log(playerChoice) // checking player choice has a value 
};
// handle generating random selections for the computer player
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length )
    computerChoice = choices[randomIndex]
    console.log(randomIndex)
    console.log(computerChoice, "computer choice")
};

// compare player & computer choices - check for winner
const compare = () => {
    //if/else comparison to all choices
    //rock beats scissors
    //scissors beats paper
    // paper beats rock
    // same option - its a tie
    if(playerChoice === computerChoice) {
        // same option - its a tie
        msg = 'You tied!'
    } else if(playerChoice === choices[0] && computerChoice === choices[2]){
        //rock beats scissors
        msg = 'Congrats! You win!'
    } else if(playerChoice === choices[1] && computerChoice === choices[0]){
        // paper beats rock
        msg = "Congrats! You win!"
    } else if(playerChoice === choices[0] && computerChoice === choices[2]){
        // scissors beats paper
        msg = "Congrats! You win!"
    } else {
        msg = 'You lose! Try again!'
        console.log(msg, "message")
    }
}
    //if/else comparison to all choices
        //rock beats scissors
        //scissors beats paper
        // paper beats rock
        // same option - its a tie

// render a win, lose ,tie message to the player
const render = () => {
    resultDisplayElement.textContent = `You chose ${playerChoice}  and the computer chose ${computerChoice}. ${msg} `
};

    // including player and computer choices in the message

    // clearly indiciating who won/result

const play = (event) => {
    getPlayerChoice(event)
    getComputerChoice()
    compare()
    render()
    // console.log(playerChoice, "player choice")
}

const resetGame = () => {
    //playerChoice = null
    //computerChoice = null
    // same as above
    playerChoice = computerChoice = null
    msg = ''
    console.log(playerChoice, computerChoice, msg)
}
/*----------------------------- Event Listeners -----------------------------*/
// 5) Handle a player clicking a button
document.querySelector('#rock').addEventListener('click', play); //giving buttons the click event -- running callback function which is the play function here
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);
document/querySelector('#resetButton')
// alternative way to add event listeners to all buttons
// document.querySelectorAll('button').forEach(function(button){
//     button.addEventListener('click', play);
// });