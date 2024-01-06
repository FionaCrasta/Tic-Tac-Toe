let boxes=document.querySelectorAll(".box");
let resetb=document.querySelector("#reset");
let newgame=document.querySelector("#newbutton");
let msgc=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;

const win=[
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [6,7,8]
];

const resetGame= ()=>{
    turno=true;
    enableBoxes();
    msgc.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("dblclick",()=>{
        if(turno){
            box.innerText="o";
            turno=false;
        }
        else{
            box.innerText="x";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    });
});



const disableBoxes = () =>  {
    for (let box of boxes) {
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.enabled=false;
        box.innerText="";
    }
};

const showWinner=(winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgc.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for (let pattern of win){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newgame.addEventListener("dblclick",resetGame);
resetb.addEventListener("dblclick",resetGame);