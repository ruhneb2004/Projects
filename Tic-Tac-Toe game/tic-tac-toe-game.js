//giving 0 for 'X' and 1 for 'O'
//cause 0 is falsy and 1 is truthy.
let moveDecide = 0;

  //button1 
  assignMove(1,0,0);

  //button2
  assignMove(2,0,1);

  //button3
  assignMove(3,0,2);

  //button4
  assignMove(4,1,0);

  //button5
  assignMove(5,1,1);

  //button6
  assignMove(6,1,2);

  //button7
  assignMove(7,2,0);
  
  
  //button8
  assignMove(8,2,1);

  //button9
  assignMove(9,2,2);
  //row and col are postion in the gameBoard
  function assignMove (boxNum,row,col) {
    document.querySelector(`.box${boxNum}`)
  .addEventListener('click', () => {
    if (moveDecide === 0 && gameBoard[row][col] === 0) {
      document.querySelector(`.box${boxNum}`)
      .innerHTML = '<img class = "cross-image" src = "100303.avif"></img>';
      gameBoard[row][col] = 1;
      moveDecide = 1;
    }
    else if (moveDecide === 1 && gameBoard[row][col] === 0) {
      document.querySelector(`.box${boxNum}`)
      .innerHTML = '<img class = "round-image" src = "0-image.avif"></img>';
      gameBoard[row][col] = 2;
      moveDecide = 0;
    };
    checkResult(row,col);
  });
  }

  let Xwin = 0;
  let Owin = 0;
  let winCountX = parseInt(localStorage.getItem('winCountX')) || 0;
  let winCountO = parseInt(localStorage.getItem('winCountO')) || 0;
  function checkResult (row,col) {
    if (gameBoard[row][0] === gameBoard[row][1] && gameBoard[row][1] === gameBoard[row][2]) {
      if (gameBoard[row][0] === 1) {
      Xwin ++;
      winCountX++;
      showResult();
      resetGame();
      }
      else if (gameBoard[row][0] === 2) {
        Owin ++;
        winCountO++;
        showResult();
       resetGame();
      }
    }
    else if (gameBoard[0][col] === gameBoard[1][col] && gameBoard[1][col] === gameBoard[2][col]) {
      if (gameBoard[0][col] === 1) {
      Xwin ++;
      winCountX++;
      showResult();
      resetGame();
      }
      else if (gameBoard[0][col] === 2) {
        Owin ++;
        winCountO++;
        showResult();
        resetGame();
      }
    }
    
    else if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[2][2] === 1) {
      Xwin ++;
      winCountX++;
      showResult();
      resetGame();
    }
    else if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[2][2] === 2) {
      Owin ++;
      winCountO++;
      showResult();
      resetGame();
    }
   else if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[2][0] === 1) {
     Xwin ++;
     winCountX++;
     showResult();
     resetGame();
    }
    else if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[2][0] === 2) {
      Owin ++;
      winCountO++;
      showResult();
      resetGame();
    }
    else {
      checkDraw();
    }
    localStorage.setItem('winCountX',winCountX);
    localStorage.setItem('winCountO',winCountO);
  }


  let isDraw = false;
  function checkDraw () {
    let completelyFilled = 0;
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j <gameBoard[i].length; j++) {
      if (gameBoard[i][j] !== 0 ) {
        completelyFilled ++;
      }
    }
  }
  if (completelyFilled === 9) {
    isDraw = true;
    resetGame();
    resultText.innerHTML = 'Draw Match'
  }
  
}


function resetGame () {
  if (Owin === 1 || Xwin ===1 || isDraw === true) {
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        gameBoard[i][j] = 0; 
        moveDecide = 0;
      };
    };
    document.querySelectorAll('.all-buttons')
      .forEach((button) => {
        button.innerHTML = '';
      });
      isDraw = false;
      Owin = 0;
      Xwin = 0;
    console.log('game reset');
  };
};

function showResult () {
  if (Owin > Xwin) {
    resultText.innerHTML = 'O - Won : X - Lost';
  }
  else if ( Xwin > Owin) {
    resultText.innerHTML = 'X - Won : O - Lost';
  }

  scoreCard.innerHTML=`X => ${winCountX} : O => ${winCountO}`
};
//Space on the screen for the result
  const resultText = document.querySelector('.js-result-panel');
  resultText.innerHTML = ` ? Won :?  Lost`
  const scoreCard = document.querySelector('.js-score-card')
  scoreCard.innerHTML=`X => ${winCountX} : O => ${winCountO}`

  function resetScore () {
    document.querySelector('.js-reset-button')
      .addEventListener('click', () => {
        resultText.innerHTML = '? Won :?  Lost';
        winCountO = 0;
        winCountX = 0;
        localStorage.removeItem('winCountX');
        localStorage.removeItem('winCountO');
        showResult();
      })
  };
  resetScore();


  //improvisation of gameBoard
  // gameBoard gets 3 value such as 0,1 and 2. 0 value is a checker for whether a value is placed on it or not and 1 and 2 represents cross and zero respectively

  const gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]];

