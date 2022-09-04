// function for an RPS game
function rps(){
    //insert possible choices for computer in an array
    let rpsArray = ["rock","paper","scissors"]
    //create a random computer choice
    const computerChoice = rpsArray[Math.floor(Math.random()*3)]
    let userChoice = prompt("rock, paper, or scissors?")
    if(!rpsArray.includes(userChoice)) userChoice = prompt("enter a valid input. rock, paper, or scissors?")
    //return the result according to choices
    if(computerChoice === userChoice) return "draw";
    else if(computerChoice === "rock") return userChoice === "paper" ? "user" : "computer"
    else if(computerChoice === "paper") return userChoice === "scissors" ? "user" : "computer"
    else if(computerChoice === "scissors") return userChoice === "rock" ? "user" : "computer"
}
//create variables for computer and user scores before creating a loop
let userScore = 0;
let computerScore =0;

//loop for playing the game as best of five
for(let i=1; i<=5; i++) {
    //findout the winner
    gameWinner = rps()
    //adjust scores according to the winner and print the result
    if(gameWinner === "computer"){
        computerScore++
        console.log(`Computer won. It's ${userScore}-${computerScore}`)
    } 
    else if(gameWinner === "user"){
        userScore++
        console.log(`You won. It's ${userScore}-${computerScore}`)
    }
    else if(gameWinner === "draw") console.log(`It's a draw. The score is ${userScore}-${computerScore}`)
}



if (userScore > computerScore) {
    alert(`Congrats! You won ${userScore}-${computerScore}`)
} 
else if (userScore < computerScore) {
    alert(`Unfortunately you lost ${userScore}-${computerScore}`)
} 
else if(userScore === computerScore) {
    alert(`It's a draw the score is ${userScore}-${computerScore}`)
}




