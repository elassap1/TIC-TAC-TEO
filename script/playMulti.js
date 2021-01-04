import {playerGameStatus,clearContent} from './function.js'
import {select} from './selector.js'


export const isMulti = () =>{
  
//======== game section ============//
  
  let turne,mark;
  select.childs.onclick = (e) => {
  
    // check if the element is empty
    if(e.target.innerHTML == '' && playerGameStatus(select.childs.children) != 'gain'){
  
      // change turne of play
      if(turne == true){
        turne = false;
  
        // set mark
        e.target.innerHTML = 'X';
      }else{
        turne = true;
        e.target.innerHTML = 'O'
      }
      // asginment last mark
      mark = e.target.innerHTML;
  
    }
    gameStatus();
  }
  
  // check the result of game 
const gameStatus = () =>{
  if(playerGameStatus(select.childs.children) != ''){

    let score_1 = parseInt(select.playerScore[2].textContent);
    let score_2 = parseInt(select.playerScore[3].textContent);

      setTimeout(() => {
      select.resultGame.style.visibility = 'visible';
      },500);

    if(playerGameStatus(select.childs.children) == 'gain'){

      if(mark == 'O'){

        select.playerScore[2].textContent = score_1 + 1;
        select.playerinfo[1].textContent = select.playerScore[2].textContent;
        select.winner.textContent = select.playerinfo[0].textContent;

      }else{

        select.playerScore[3].textContent = score_2 + 1;
        select.playerinfo[3].textContent = select.playerScore[3].textContent;
        select.winner.textContent = select.playerinfo[4].textContent;
      }

    }else{

      resultGame.style.visibility = 'visible';

      console.log('is tie')
      }
  }
}
  //======= play Again ======
  
  select.playAgain.onclick = () => {

    clearContent(select.childs.children);

    select.resultGame.style.visibility = 'hidden';
  }
  
  
  //======== end game section ============//
  
} 