const buttons = document.querySelectorAll('.button');
const result = document.querySelector('.result');
const resetButton = document.querySelector('.btn');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.classList[1].split('-')[0];
        const computerChoice = computerPlay();
        playRound(playerChoice, computerChoice);
    });
});

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    result.innerHTML = `<p>Player: 0 | Computer: 0</p>`;
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result.innerHTML = `<p>It's a tie!</p><p>Player: ${playerScore} | Computer: ${computerScore}</p>`;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        playerScore++;
        result.innerHTML = `<p>You win! ${playerChoice} beats ${computerChoice}.</p><p>Player: ${playerScore} | Computer: ${computerScore}</p>`;
    } else {
        computerScore++;
        result.innerHTML = `<p>You lose! ${computerChoice} beats ${playerChoice}.</p><p>Player: ${playerScore} | Computer: ${computerScore}</p>`;
    }
}
