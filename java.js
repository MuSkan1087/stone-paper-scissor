let userScore =0;
let compScore =0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice=() =>{
    const options = ["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =() =>{
    console.log("game was draw.");
     msg.innerText = "Game was Draw . Play again";
     msg.style.backgroundColor ="yellow";
     msg.style.color="black";
}

const showWinner =(userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win !");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
        msg.style.color="white";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText = `You Lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.color="white";
    }

};

const playGame =(userChoice) =>{
    console.log (" user choice = ", userChoice);
    //Generat computer choise
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice=== "rock"){
            // scissors, paper
            userWin =compChoice==="paper"? false : true;
        }else if (userChoice==="paper"){
            //rock, scissor
            userWin =compChoice==="scissors" ? false :true;
        } else {
            //rock , paper
            userWin =compChoice==="rock" ?false:true;
        }
        showWinner (userWin , userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice); 

    });
});
