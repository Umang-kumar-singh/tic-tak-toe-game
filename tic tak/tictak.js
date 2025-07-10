let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let restart=document.querySelector("#restart");
let msg_cont=document.querySelector(".msg-continer");
let msg=document.querySelector("#msg");
let turn="x";
let winnerPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==="x"){
            box.innerText="X";
            turn="o";
        }else{
            box.innerText="O";
            turn="x";
        }
        box.disabled="true";
        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winnerPattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner ,",pos1val);
                showWinner(pos1val);
            }
        }
    }
}
const showWinner = (winner) => {
    msg.innerText=`Congratulation Winner is ${winner}`;
    msg_cont.classList.remove("msg-continer");
    disablebox();
}
const disablebox = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const anablebox = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame = () => {
    anablebox();
    turn="x";
     msg_cont.classList.add("msg-continer");
}
const restartgame = () => {
    anablebox();
     msg_cont.classList.add("msg-continer");
}
reset.addEventListener("click",resetgame);
restart.addEventListener("click",restartgame);