# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

## solution by me

const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value) //Gives only empty value.

form.addEventListener('submit' , function(e){
  e.preventDefault(); //to prevent the sending content of form to server

  const height = parseInt(document.querySelector('#height').value);  //taking height in intwger

  const weight = parseInt(document.querySelector('#weight').value)   //weight in INT

  const results = document.querySelector('#results');             //for storing reesult

  if(height === '' || height < 0 || isNaN(height)){         //checking error or inappropriate value
    results.innerHTML = `Please enter valid height ${height}`;

  }else if(weight === '' || weight < 0 || isNaN(weight)){   //checking error or inappropriate value
    results.innerHTML = ` Please enter valid weight ${weight}`;

  }else{          //calculating BMI using formula
    const bmi = ( weight / ((height * height)/10000)).toFixed(2);
    results.innerHTML = ` <span>${bmi}</span>`;
    if(bmi <= 18.6){
      results.innerHTML = `${bmi} : Under Weight `;
    }else if(bmi > 18.6 && bmi <24.9){
      results.innerHTML = ` ${bmi} : Normal`;
    }else{
      results.innerHTML = ` ${bmi} : Over Weight`;
    }
  }
})


```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4 solution


```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


## solution by me :

let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const prevSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas')

let prevGuesses = [];
let numGuesses = 1;
const p = document.createElement('p');

let playGame = true;

if(playGame){
  
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter valid number');
  }else if(guess > 100){
    alert('Enter the number less than 100');
  }else if(guess < 1){
    alert('Enter the number greater than 1');
  }else{
    prevGuesses.push(guess);
    if(numGuesses === 10){
      displayGuess(guess);
      displayMessage(`Game Over!! Number:${randomNumber}`);
      console.log('STOP');
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed the number coreectly.`)
    endGame();
  }else if(guess > randomNumber){
    displayMessage('You guessed very High number')
  }else{
    displayMessage('You guessed very LOW number');
  }
}

function displayGuess(guess){
  userInput.value = '';
  prevSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remaining.innerHTML = `${11-numGuesses}`;
}

function displayMessage(message){
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = '<h2 id="nGame" style = "cursor : pointer;">Start new game</h2>';
  startover.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGuess = document.querySelector('#nGame');
  newGuess.addEventListener('click',function(e){
    userInput.value='';
    userInput.removeAttribute('disabled');
    startover.removeChild(p);
    numGuesses = 1;
    prevGuesses = [];
    prevSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuesses}`;
    randomNumber = parseInt(Math.random() * 100 + 1);
  })
}


```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

## solution by me
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div id="color">
    <table>
    <tr>
      <th>Key</th>
      <th>Key Code</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

## solution by me

let randomColor = function(){
  let hex = '0123456789ABCDEF';
  let color = '#';
  for( let i=0; i < 6 ; i++){
    color += Math.floor(Math.random() * 16);
  }
  return color;
}
let intervalId;
let startChanging = function(){
  let changingbgc = function(){
    document.body.style.backgroundColor = randomColor();
  }
  if(!intervalId){
    intervalId =  setInterval(changingbgc,500);
  }
 

}

let stopChanging = function(){
  clearInterval(intervalId);
  intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChanging);

document.querySelector('#stop').addEventListener('click',stopChanging);


```