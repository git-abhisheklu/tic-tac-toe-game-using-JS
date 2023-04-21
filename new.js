window.addEventListener('DOMContentLoaded', () =>{
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton =document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['','','','','','','','','',];
    let CurrentPlayer = 'X';
    let isGameActive= true;
    
    const PLAYERX_WON= "PLAYER X WON";
    const PLAYERO_WON= "PLAYER O WON";
    const TIE= "TIE";
    const winningconditions=[
        [0,1,2]
        [3,4,5]
        [6,7,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,4,8]
        [2,4,6]
    ]
    function handleResultValidation(){
        let roundwon=false;
        for(let i=0; i<=7; i++){
            const wincondition= winningconditions[i];
            const a=board[wincondition[0]];
            const b=board[wincondition[1]];
            const c=board[wincondition[2]];
            if(a===''|| b===''|| c===''){
                continue;
            }
            if(a===b && b===c){
                roundwon= true;
                break;
            }
        }
    }    
        if(roundwon){
            announcer(CurrentPlayer==='X'? PLAYERX_WON:PLAYERO_WON);
            isGameActive=false;
            return;
        }
        if(!board.includes(''))
            announcer(TIE);
        const announce= (type)=>{
            switch(type){
                case PLAYERO_WON
                    announcer.innerHTML='Player <span class="PlayerO"> O </span> WON';
                    break;
                case PLAYERX_WON
                    announcer.innerHTML='Player <span class="PlayerX"> X </span> WON';
                    break; 
                case TIE 
                    announcer.innertext= "TIE";    
            }
            announcer.classList.remove('hide');
        };
        const isValidAction= (tile)=>{
            if(tile.innerText==='X' || tile.innerText==='0'){
                return false;
            }
            return true;
        };
        const updateBoard= (index)=>{
            board[index]= CurrentPlayer;
        }
        const changePlayer=()=>{
            playerDisplay.classList.remove(player$,{CurrentPlayer});
            CurrentPlayer= CurrentPlayer==='X'? '0': 'X';
            playerDisplay.innerText= CurrentPlayer;
            playerDisplay.classList.add(player$,{CurrentPlayer});
        }
        const userAction=(tile,index)=>{
            if(isValidAction(tile)){
                return
            }
        }
    

    resetbutton.addEventListener('click', resetboard);
});