let turn = "Player 1";
let turn1 = document.getElementById("turn-player");
let arr = [];
let result=false;
function game(id){
    let element = document.getElementById(id);

    if (turn == "Player 1" && element.textContent == ""){
        element.textContent="X";
        turn = "Player 2";
        turn1.textContent = "Player 2";

    }else if (turn == "Player 2" && element.textContent == ""){
        
        element.textContent="O";
        turn = "Player 1";
        turn1.textContent = "Player 1";
    }
   winner();
}

function winner() {
for (let i=0 ; i<9 ;i++){
    arr[i]= document.getElementById(i).textContent;
}

if (arr[0] == arr[1] && arr[1]== arr[2] && arr[1] != ""){
    endGame(0,1,2);
    
}else if (arr[2] == arr[5] && arr[8]== arr[8] && arr[8] != ""){
    endGame(2,5,8);
    
}else if (arr[3] == arr[4] && arr[4]== arr[5] && arr[4] != ""){
    endGame(3,4,5);
    
}else if (arr[6] == arr[7] && arr[7]== arr[8] && arr[8] != ""){
    endGame(6,7,8);
    
}else if (arr[0] == arr[3] && arr[3]== arr[6] && arr[6] != ""){
    endGame(0,3,6);
    
}else if (arr[1] == arr[4] && arr[4]== arr[7] && arr[7] != ""){
    endGame(1,4,7);
    
}else if (arr[0] == arr[4] && arr[4]== arr[8] && arr[8] != ""){
    endGame(0,4,8);
    
}else if (arr[2] == arr[4] && arr[4]== arr[6] && arr[6] != ""){
    endGame(2,4,6);
    
}

}

function endGame(n1,n2,n3){
    if (arr[n1]=="X"){
        turn1.textContent="Player 1 is the Winner";
    }else{
        turn1.textContent="Player 2 is the Winner";
    }
}


function reload(){
    location.reload();
}