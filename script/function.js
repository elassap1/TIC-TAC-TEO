
// clear the blocks game
export const clearContent = (clearTarget) => {

  for (let index = 0; index < clearTarget.length; index++) {
    clearTarget[index].textContent = '';
   }
}


// check the game (win or loss or tie)
export const playerGameStatus = (elementTarget) => {

  let element = [],count = 0,result = '';

  for (let index = 0; index < elementTarget.length; index++) {
       element[index] = elementTarget[index].textContent;
       if(element[index] != '')
       count++;
      }

      if(
        // vertical
        (element[0] == element[1] && element[0] == element[2] && element[2] != '')
        ||(element[3] == element[4] && element[4] == element[5] && element[3] != '')
        ||(element[6] == element[7] && element[7] == element[8] && element[8] != '')
        // horizontal
        ||(element[4] == element[1] && element[7] == element[1] && element[1] != '')
        ||(element[3] == element[0] && element[6] == element[0] && element[0] != '')
        ||(element[5] == element[2] && element[8] == element[2] && element[2] != '')
        // crosse
        ||(element[0] == element[4] && element[0] == element[8] && element[0] != '')
        ||(element[6] == element[4] && element[4] == element[2] && element[2] != '')
      ) {
        element = '';
        result = 'gain';
        }else if(count == 9){
          element = '';
          result = 'tie';
        }
    return result;
}




// auto play

export const playAI = (mark,elementTarget) => {

  let element = [],count=0;

  for (let index = 0; index < elementTarget.length; index++) {

    if(elementTarget[index].textContent == ''){
      
//      console.log(elementTarget[index].textContent,'content')
      element[count] = elementTarget[index];
      count++;
      }
    }

      let random =  parseInt(Math.random()*element.length);

//      console.log(random,'random',element.length,'length');

      if(element.length > 0 && element[random].textContent == ''){

//        element.splice(random,1);

        if(mark == 'O'){
          element[random].textContent = 'X';
//          console.log(mark = 'X');
        }else{
//          console.log(element[random]);
          element[random].textContent = 'O';
//          console.log(mark = 'O');
        }

      } else{

//        console.log('else');

      }

}


