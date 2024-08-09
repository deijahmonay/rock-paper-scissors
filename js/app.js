/*-------------------------------- Constants --------------------------------*/
// 1) 3 user choices of rock, paper or scissors
const choices = ['rock','paper','scissors']


/*-------------------------------- Variables --------------------------------*/
// 2) Define our variables for state
    //The players choice
let playerChoice
    // The computers choice
let computerChoice
    //The match result - win/lose/tie
    //A result message - display the result/ who won
let msg
/*------------------------ Cached Element References ------------------------*/
// 3) Reference to DOM element to disply messages
const resultDisplayElement = document.querySelector ('#result-display')
    // 3 button DOM references for rock, paper, scissors
/*-------------------------------- Functions --------------------------------*/
//  handle player click
// handle generating random selections for the computer player
// compare player & comouter chpices - check for winner
    //if/else comparison to all choices
        //rock beats scissors
        //scissors beats paper
        // paper beats rock
        // same option - its a tie

// render a win, lose ,tie message to the player
    // including player and computer choices in the message
    // clearly indiciating who won/result

/*----------------------------- Event Listeners -----------------------------*/
// 5) Handle a player clicking a button
document.querySelector('#rock').addEventListener('click', play)
document.querySelector('#paper').addEventListener('click', play)
document.querySelector('#scissor').addEventListener('click', play)

// alternative way to add event listeners to all buttons
// document.querySelectorAll('button').forEach(function(button){
//     button.addEventListener('click', play);
// });