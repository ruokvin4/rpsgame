let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
}



updateScoreElement();


/*if (!score) {
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
  };
}*/


// console.log(JSON.parse(localStorage.getItem('score')));


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose';
      } else if (computerMove === 'paper') {
        result = 'You win';
      } else if (computerMove === 'scissors') {
        result = 'Tie';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win';
      } else if (computerMove === 'paper') {
        result = 'Tie';
      } else if (computerMove === 'scissors') {
        result = 'You lose';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie';
      } else if (computerMove === 'paper') {
        result = 'You lose';
      } else if (computerMove === 'scissors') {
        result = 'You win';
      }
    }


    if (result === 'You win') {
      score.Wins += 1;
    } else if (result === 'You lose') {
      score.Losses += 1;
    } else if (result === 'Tie') {
      score.Ties += 1;
    }


    localStorage.setItem('score' , JSON.stringify(score));

    console.log(score);


    updateScoreElement ();

    document.querySelector ('.js-result').innerHTML = result;

    document.querySelector ('.js-moves').innerHTML = `You ${playerMove} -  Computer ${computerMove}`;




    

//     alert(`You picked ${playerMove} Computer picked ${computerMove} ${result}
// Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`);
  }

  
  


  function updateScoreElement () {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, 
  Losses: ${score.Losses}, Ties: ${score.Ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }


  function toggleDarkMode() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
  }

  function setTransitionDuration(duration) {
    const root = document.documentElement;
    root.style.setProperty('--transition-duration', duration);
  }


  function toggleDarkMode() {
    const body = document.querySelector('body');
    const lightModeIcon = document.querySelector('.light-mode-icon');
    const darkModeIcon = document.querySelector('.dark-mode-icon');

    body.classList.toggle('dark-mode');
    lightModeIcon.classList.toggle('hidden');
    darkModeIcon.classList.toggle('hidden');
  }