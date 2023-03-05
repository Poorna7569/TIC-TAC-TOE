let btnref=document.querySelectorAll(".btn");
let popupref=document.querySelector(".popup");
let newgamebtn=document.getElementById("new-game");
let restartbtn=document.getElementById("restart");
let msgref=document.getElementById("message");


let winningpattern=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [0,4,8],
    [2,4,6]

];

let xturn =true;
let count=0;
const disablebuttons= () =>{
    btnref.forEach((element)=>(element.disabled=true));
    popupref.classList.remove("hide");
}
function enablebuttons() {
    btnref.forEach((element)=>{
        element.innerText="";
        element.disabled=false;
    })
    popupref.classList.add("hide");
    
}

newgamebtn.addEventListener("click",()=>{
    count=0;
    enablebuttons();
})
restartbtn.addEventListener("click",()=>{
    count=0;
    enablebuttons();
    //window.location.reload();

})

const winfunction= (letter) =>{
    disablebuttons();
    if(letter=="X"){
        msgref.innerHTML="'X' Wins";
    }else{
        msgref.innerHTML="'O' Wins";
    }

}
const drawfunction =()=>{
    disablebuttons();
    msgref.innerHTML="Draw";
}


const winchecker=()=>{
    for(let i of winningpattern){
        let[element1,element2,element3]=[
            btnref[i[0]].innerText,
            btnref[i[1]].innerText,
            btnref[i[2]].innerText
        ]
        if(element1!=""&& (element2 !="") &&( element3 !="")){
            if(element1 ==element2&&element2 ==element3){
                winfunction(element1);
            }
        }
    }
}
btnref.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(xturn){
            xturn=false;
            element.innerText="X";
            element.disabled=true;

        }else{
            xturn=true;
            element.innerText="O";
            element.diabled=true;
        }
        count+=1;
        if(count===9){
            drawfunction();

        }
        winchecker();

    })
})
window.onload=enablebuttons();