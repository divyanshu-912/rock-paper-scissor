/*
***********************************************************************Divyanshu Kannaujiya*******************************************************************************
*/

alert("Made by Divyanshu Kannaujiya");
let isBlue = false; 
function bg_change(){
    
    if (isBlue) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"; // Default color
    } else {
        document.body.style.backgroundColor = "#149ade"; // New color
    }
    isBlue = !isBlue; 
};

let playerScore=0;
let computerScore=0;

const genCompChoice=()=>{
    let option=['rock','paper','scissors'];
    let choiceIdx = Math.floor(Math.random()*3);
    return option[choiceIdx];
}
const draw=()=>{
        document.getElementById("result-text").innerText="It's a draw"
        // console.log("Its a draw");
};
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("Computer's choice:", compChoice);
    console.log("User's choice:", userChoice);
    const cScore= document.getElementById("cwin-score");
    const uScore= document.getElementById("uwin-score");
    const tMatches= document.getElementById("tMatches");
    // Add more game logic for comparing choices
    if (compChoice===userChoice){
        tMatches.innerHTML=parseInt(tMatches.innerHTML) + 1;
      draw();
    }
    else if ((compChoice==="rock" && userChoice==="scissors")||(compChoice==="paper" && userChoice==="rock")||(compChoice==="scissors" && userChoice==="paper")){
        cScore.innerHTML=parseInt(cScore.innerHTML) + 1;
        tMatches.innerHTML=parseInt(tMatches.innerHTML) + 1;

        document.getElementById("result-text").innerText = "Computer Wins";
    }
    else if ((compChoice==="scissors" && userChoice==="rock")||(compChoice==="rock" && userChoice==="paper")||(compChoice==="paper" && userChoice==="scissors")){
        uScore.innerHTML =parseInt(uScore.innerHTML) + 1;
        tMatches.innerHTML=parseInt(tMatches.innerHTML) + 1;
        document.getElementById("result-text").innerText = "You wins";
    }
    
    

};

const choices=document.querySelectorAll(".choice")

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;  
        playGame(userChoice);  
    });
});