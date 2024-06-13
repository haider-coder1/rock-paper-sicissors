let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg= document.querySelector("#msg")
const userScorePara= document.querySelector("#user-score")
const compScorePara= document.querySelector("#comp-score")

const genGanmeChoicwe=()=>{
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}
 const drawGame=()=>{
    
    msg.innerText="game draw"
 }
 const showWiner=(userWin,choiceId,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log( "you win")
        msg.innerText=`you win  ${choiceId} beats ${compChoice}`
    } else{
           compScore++;
           compScorePara.innerText=compScore;
        console.log("you lose")
        msg.innerText=`you lose  ${compChoice} beats ${choiceId}`
    }

 }

const playGame=(choiceId)=>{

    console.log("user choice=",choiceId)
    //generate computer choice
    const compChoice=genGanmeChoicwe();
    console.log("comp choice=",compChoice)
    if(choiceId===compChoice){
        //game draw
        drawGame();
    }
    else{
        let userWin= true;
        if(choiceId==="rock"){
            userWin=compChoice==="paper" ? false : true;
        }else if( choiceId==="paper"){
            userWin=compChoice==="scissors" ? false: true;
        } else{
            userWin=compChoice==="rock"? false : true;
        }
        showWiner(userWin,choiceId,compChoice);
    }
}
//1st step
choices. forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const choiceId= choice.getAttribute("Id")
//   console.log(" choice was clickd," ,choiceId)
  playGame(choiceId)
    })
})