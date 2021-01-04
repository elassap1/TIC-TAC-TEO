import {playerGameStatus,clearContent,playAI} from './function.js'
import {select} from './selector.js'

let turne,mark;

export const isOne =() => {
  //======== game section ============//

  if(!turne && playerGameStatus(select.childs.children) != 'gain'){

    playAI(mark,select.childs.children);
    
    turne = true;
  
    gameStatus();
  }


select.childs.onclick = (e) => {

  // check if the element is empty
  if(e.target.innerHTML == '' && playerGameStatus(select.childs.children) != 'gain'){

    // change turne of play
    if(turne){

      turne = false;
      
//      console.log(turne);
      // set mark
      e.target.innerHTML = 'X';

      gameStatus();

      if(!turne  && playerGameStatus(select.childs.children) != 'gain'){
//        mark = 'O'

        playAI(mark,select.childs.children);
        turne = true;
      
        gameStatus();
      }
    
    }
  }
//  console.log(turne);
}
}
// check the result of game 
const gameStatus = () =>{

  if(playerGameStatus(select.childs.children) != ''){

    let score_1 = parseInt(select.playerScore[2].textContent);
    let score_2 = parseInt(select.playerScore[3].textContent);

    select.resultGame.style.visibility = 'visible';

    if(playerGameStatus(select.childs.children) == 'gain'){

      if(!turne){
//        console.log('gamestatus O',mark)
        select.playerScore[2].textContent = score_1 + 1;
        select.playerinfo[1].textContent = select.playerScore[2].textContent;
        select.winner.textContent = select.playerinfo[0].textContent + 'Win';

      }else{
//        console.log('gamestatus X',mark)
        select.playerScore[3].textContent = score_2 + 1;
        select.playerinfo[3].textContent = select.playerScore[3].textContent;
        select.winner.textContent = select.playerinfo[4].textContent;
      }

    }else{

      select.resultGame.style.visibility = 'visible';
      select.winner.textContent = 'It Tie';

//      console.log('is tie')
      }
  }
}
//======= play Again ======

select.playAgain.onclick = () => {

  clearContent(select.childs.children);

  select.resultGame.style.visibility = 'hidden';

  isOne();

//console.log(mark,turne)
}


//======== end game section ============//

