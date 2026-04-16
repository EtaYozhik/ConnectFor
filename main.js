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


const turntext =document.getElementById("temp")
turntext.textContent="R TURN"

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

const ColClicked=(id)=>{
    const column=document.getElementById(id)
    col=Number(id)
    let played=0
    for(let i=5;i>=0; i--){
        
        if(board[i][col]==="." && played===0 && turn%2===0){
            board[i][col]="R"
            const token =document.getElementById(i.toString()+col)
            token.textContent="R" 
            token.parentElement.style.backgroundColor="red"
            turntext.textContent="Y TURN"
            turntext.style.backgroundColor="yellow"
            played++
            turn++
        }
        if(board[i][col]==="." && played===0 && turn%2===1){
            board[i][col]="Y"
            const token =document.getElementById(i.toString()+col)
            token.textContent="Y" 
            token.parentElement.style.backgroundColor="yellow"
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
    }
    if (win===0&&turn===42){
        wintext.textContent="Nobody won... U guys must be bad at this..."
        document.getElementById("winPopup").style.display = "flex";

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
