const playerSelect = document.querySelectorAll('.playerBtn');

const computerSelect = [['Rock','✊'], ['Paper','✋'], ['Scissors','✌']]

let playerChoice = document.querySelector('.playerChoice');

let computerChoice = document.querySelector('.computerChoice');

let playerScore =  document.querySelector('.playerScore');

let computerScore =  document.querySelector('.computerScore');

let draw = document.querySelector('.drawCount');

let  heading1 =  document.querySelector('h1');

let heading2 = document.querySelector('h2');

const resultBox = document.querySelector('.result');
resultBox.style.display = "none";

playerSelect.forEach(btn => {
   btn.addEventListener('click', () => {

      let number = Math.floor(Math.random() * 3);
      let playerChoose = btn.value;
      let computerChoose = computerSelect[number][0];

      playerChoice.innerHTML = btn.innerHTML;

      computerChoice.innerHTML = computerSelect[number][1];

      heading1.style.setProperty('font-family',  'Poppins, sans-serif');
      heading2.style.setProperty('font-family',  'Poppins, sans-serif');

      scoreboard(playerChoose,computerChoose);

      result();
   })
});

function scoreboard(playerPlays,computerPlays) {
    if(playerPlays == 'Rock' && computerPlays == 'Scissors') { 
      heading1.innerText = 'You won!';
      heading2.innerText = 'Rock beats scissors';
      return playerScore.innerHTML++;
    }
    else if(playerPlays == 'Rock' && computerPlays == 'Paper') {
      heading1.innerText = 'You lost!';
      heading2.innerText = 'Rock is beaten by paper';
      return computerScore.innerHTML++;
    } 
    else if(playerPlays == 'Paper' && computerPlays == 'Rock') {
      heading1.innerText = 'You won!';
      heading2.innerText = 'Paper beats rock';
      return playerScore.innerHTML++;
    }
    else if(playerPlays == 'Paper' && computerPlays == 'Scissors') {
      heading1.innerText = 'You lost!';
      heading2.innerText = 'Paper is beaten by scissors';
      return computerScore.innerHTML++;
    }
    else if(playerPlays == 'Scissors' && computerPlays == 'Paper') {
      heading1.innerText = 'You won!';
      heading2.innerText = 'Scissors beats paper';
      return playerScore.innerHTML++;
    }
    else if(playerPlays == 'Scissors' && computerPlays == 'Rock') {
      heading1.innerText = 'You lost';
      heading2.innerText = 'Scissors is beaten by rock';
      return computerScore.innerHTML++;
    }
    else if(playerPlays === computerPlays) {
      let comptext = computerPlays.toLowerCase();
      heading1.innerText = 'Its a tie!';
      heading2.innerText = `${playerPlays} ties with ${comptext}`;
   }
};

function result() {
   let remark =  document.querySelector('.remark');
   if(playerScore.innerHTML === '5') {
      remark.innerHTML = "You Won";
      reset();
   }
   else if(computerScore.innerHTML === '5') {
      remark.innerHTML = "You Lose";
      reset();
   }
}; 

const container = document.querySelector('.container');

function reset() {
   playerScore.innerHTML = '0';
   computerScore.innerHTML = '0';
   playerChoice.innerHTML = '❔';
   computerChoice.innerHTML = '❔';
   container.style.opacity = '0.1';
   container.style.pointerEvents = 'none';
   resultBox.style.display = "flex";
   heading1.style.setProperty('font-family',  'Cinzel, serif');
   heading2.style.setProperty('font-family',  'Cinzel, serif');
   heading1.innerText = "CHOOSE YOUR WEAPON";
   heading2.innerText = "First to score 5 points wins the game";
}

document.querySelector('.resultBtn').addEventListener('click',() => {
   resultBox.style.display = "none";
   container.style.opacity = '1';
   container.style.pointerEvents = 'auto';
})
