var board= [[".",".",".",".",".",".","."],
[".",".",".",".",".",".","."],
[".",".",".",".",".",".","."],
[".",".",".",".",".",".","."],
[".",".",".",".",".",".","."],
[".",".",".",".",".",".","."]]

console.log(board)



let wintext =document.getElementById("wintext")

"use strict";
let turn = 0
let win=0
let draw=0
let speed=100

const turntext =document.getElementById("temp")
turntext.textContent="R TURN"
turntext.style.backgroundColor="red"

function iswin(){
   for (let r=0; r<=5; r++){
        for (let c=0; c<=6; c++){
            
            if(r<=2 && c<=3){                 
                if (board[r][c]===board[r+1][c+1] && board[r][c]===board[r+2][c+2] && board[r][c]===board[r+3][c+3] && board[r][c]!="."){
                    win=1
                }
            }



            if(c<=3){
                if (board[r][c]===board[r][c+1] && board[r][c]===board[r][c+2] && board[r][c]===board[r][c+3] && board[r][c]!="."){
                win=1
                }

            }
            if(r<=2){
                if (board[r][c]===board[r+1][c] && board[r][c]===board[r+2][c] && board[r][c]===board[r+3][c] && board[r][c]!="."){
                    win=1
                }
            }
            
            if(r<=2 && c>=3){
                if (board[r][c]===board[r+1][c-1] && board[r][c]===board[r+2][c-2] && board[r][c]===board[r+3][c-3] && board[r][c]!="."){
                win=1
            }
            }
            
        }
    }

}

function redfall(j,col,token){
            token.textContent="_" 
            token.parentElement.style.backgroundColor="#3d2737"
            
}

const ColClicked=(id)=>{
    const column=document.getElementById(id)
    col=Number(id)
    let played=0
    for(let i=5;i>=0; i--){
        
        if(board[i][col]==="." && played===0 && turn%2===0){
            board[i][col]="R"
            for (let j=0; j<=i;j++){
                setTimeout(() => {
                    let fallingToken = document.getElementById(j.toString() + col);
                    
                   
                    fallingToken.textContent = "R"; 
                    fallingToken.parentElement.style.backgroundColor = "red";

                    if (j < i) {
                        setTimeout(() => {
                            fallingToken.textContent = "_"; 
                            fallingToken.parentElement.style.backgroundColor = "#3d2737";
                        }, speed);
                    }
                }, j * speed); // Stagger each row's start time
            }

            
            turntext.textContent="Y TURN"
            turntext.style.backgroundColor="yellow"
            played++
            turn++
        }
        if(board[i][col]==="." && played===0 && turn%2===1){
            board[i][col]="Y"
            for (let j=0; j<=i;j++){
                setTimeout(() => {
                    let fallingToken = document.getElementById(j.toString() + col);
                    fallingToken.textContent = "Y"; 
                    fallingToken.parentElement.style.backgroundColor = "yellow";
                    if (j < i) {
                        setTimeout(() => {
                            fallingToken.textContent = "_"; 
                            fallingToken.parentElement.style.backgroundColor = "#3d2737";
                        }, speed);
                    }
                }, j * speed);
            }

            
            turntext.textContent="R TURN"
            turntext.style.backgroundColor="red"
            played++
            turn++
        }
    }
    console.log(board)
    console.log(played)
    iswin()
    if (win === 1) {
        console.log("SOMEONE WON");
        if (turn %2===0){
            
            wintext.textContent="YELLOW WINS"
        }
        if (turn %2===1){
            
            wintext.textContent="RED WINS"
        }
        document.getElementById("winPopup").style.display = "flex";
        document.getElementById("winPopup").style.flexDirection = "column";
        document.getElementById("winPopup").style.alignItems = "center";
        document.getElementById("wintext").style.display = "flex";
        document.getElementById("wintext").style.flexDirection = "column";
        document.getElementById("wintext").style.alignItems = "center";
        document.getElementById("wintext2").style.display = "flex";
        document.getElementById("wintext2").style.flexDirection = "column";
        document.getElementById("wintext2").style.alignItems = "center";
        
    }
    if (win===0&&turn===42){
        wintext.textContent="Nobody won... U guys must be bad at this..."
        document.getElementById("winPopup").style.display = "flex";
        document.getElementById("winPopup").style.display = "flex";
        document.getElementById("winPopup").style.flexDirection = "column";
        document.getElementById("winPopup").style.alignItems = "center";
        document.getElementById("wintext").style.display = "flex";
        document.getElementById("wintext").style.flexDirection = "column";
        document.getElementById("wintext").style.alignItems = "center";
        document.getElementById("wintext2").style.display = "flex";
        document.getElementById("wintext2").style.flexDirection = "column";
        document.getElementById("wintext2").style.alignItems = "center";

    }
    

    console.log(win)
    
}

/*
const changeval=(id) => {
    const greeting =document.getElementById(id)
    let x=turn%2
    console.log(x)
    console.log(turn)
    let row= id[0]
    let col=id[1]
    


    if(board[row][col]==="." && turn % 2===0){
        greeting.textContent="O HERE"
        board[row][col]="O HERE"
        console.log("O REPLACE EMPTY")
        turn++
        turntext.textContent="X TURN"
    }

    if(board[row][col]==="." && turn %2===1){
        greeting.textContent="X HERE"
        board[row][col]="X HERE"
        console.log(board)
        console.log("X REPLACE EMPTY")
        turn++
        turntext.textContent="O TURN"
    }
    

    iswin()
    if (win === 1) {
        console.log("SOMEONE WON");
        document.getElementById("winPopup").style.display = "flex";
    }
    

    console.log(win)
    console.log(turn)
    if (turn===11){
        draw=1
    }
    if (draw === 1 && win===0) {
        const wintext =document.getElementById("wintext")
        wintext.textContent="Nobody won... U guys must be bad at this..."
        document.getElementById("winPopup").style.display = "flex";
    }
}}}
*/
