const choices=['Rock','Paper','Scissors'];
const computer=document.getElementById("computer");
const player=document.getElementById("player");
const result=document.getElementById("result");
function play(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result ="";
    if( computerChoice===playerChoice){
        result="🤝 Tie";
    }
   else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win! 🎉";
    } else {
        result = "Computer Wins! 😢";
    }

    document.getElementById("player").textContent = "PLAYER: " + playerChoice;
    document.getElementById("computer").textContent = "COMPUTER: " + computerChoice;
    document.getElementById("result").textContent = "RESULT: " + result;
}

