const resultText = document.getElementById('result-text');
const retryButton = document.getElementById('retry-button');
const choiceList = document.getElementById('choice-list');
let countClicks = 0;

const generateRandomNumber = () => Math.ceil(Math.random() * 6);

let randomNumber = generateRandomNumber();
console.log(randomNumber);

const guessNumber = (inputNumber = 'a') => {
  if (inputNumber == randomNumber) {
    return 'Correct';
  } else if (inputNumber < randomNumber) {
    return 'Too low';
  } else if (inputNumber > randomNumber) {
    return 'Too high';
  } else {
    return 'input invalid';
  }
};

for (let i = 1; i <= 6; i++) {
  const choice = document.getElementById(`choice-${i}`);
  choice.addEventListener('click', () => {
    const answer = parseInt(choice.innerText);
    const text = guessNumber(answer);
    console.log(i);
    resultText.innerText = text;
    countClicks++;
    console.log(`click ${countClicks}`);
    if (countClicks == 3 && text != 'Correct') {
      resultText.innerText = 'Failed';
      choiceList.classList.add('pointer-events-none');
    }
    if (text == 'Correct') {
      choiceList.classList.add('pointer-events-none');
    }
  });
}

retryButton.addEventListener('click', () => {
  randomNumber = generateRandomNumber();
  resultText.innerText = 'Pick Number';
  choiceList.classList.remove('pointer-events-none');
  countClicks = 0;
  console.log(randomNumber);
});
