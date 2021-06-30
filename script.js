'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 10;
let highScore = 0;
let guess;

const messageInner = function(message) {
    const text = (document.querySelector('.message').textContent = message);
    return text;
};

const displayNumber = function(number) {
    const num = (document.querySelector('.number').textContent = number);
    return num;
};

const zeroGuess = function(string) {
    const str = (document.querySelector('.guess').value = string);
    return str;
};

const changeColor = function(color) {
    const clr = (document.querySelector('body').style.backgroundColor = color);
    return clr;
};

document.querySelector('.check').addEventListener('click', () => {
    guess = Number(document.querySelector('.guess').value);

    if (!guess || guess === '' || guess > 20) {
        messageInner('⛔️ Incorrect number!');
        // document.querySelector('.message').textContent = '⛔️ Incorrect number!';
        zeroGuess('');
        // When player wins
    } else if (guess === secretNumber) {
        messageInner('Win 👍');
        displayNumber(secretNumber);
        changeColor('#60b347');
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is to low
    } else if (guess !== secretNumber) {
        if (score > 1) {
            messageInner(guess > secretNumber ? '📈 Too high ' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
            zeroGuess('');
        } else {
            messageInner('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
            changeColor('red');
        }
    }
});

// when player pushed down again button

document.querySelector('.again').addEventListener('click', () => {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 100) + 1;

    document.querySelector('.score').textContent = score;
    changeColor('#222');
    displayNumber('?');
    messageInner('Start guessing...');
    zeroGuess('');
});