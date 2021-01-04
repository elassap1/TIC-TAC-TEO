import {isOne} from './playOnlyOne.js'
import {isMulti} from './playMulti.js'
import {select} from './selector.js'


//======== wellcome section ============//


  // start game
  select.startButton.onclick = (e) => {

    // check the state of players
    if(select.onePlayer.checked){
      
      // set name
      const name =  prompt('Player Name');
      if(name.length > 0 ){
        document.querySelector('#info').children[0].textContent = name;
      }

      // game of select one
      isOne();

    }else{
      
      // players names
      let playerone =  prompt('First Player Name');

      if(playerone.length > 0 ){
        select.playerinfo[0].textContent = playerone;
      }else{
        playerone = 'Player 1';
        select.playerinfo[0].textContent = playerone;
      }

      let playertwo =  prompt('Second Player Name');
      
      if(playertwo.length > 0 ){
        select.playerinfo[4].textContent = playertwo;
      }else{
        playertwo = 'Player 2';
        select.playerinfo[4].textContent = playertwo;
      }
      // game of select two
      isMulti();
    }
  // hide wellcome page
  document.querySelector('#wellcome').style.visibility = 'hidden';
} 
//======== end wellcome section ============//

