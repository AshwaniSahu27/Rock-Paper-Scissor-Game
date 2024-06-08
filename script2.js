let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", (evt) => {
    let userchoice = evt.target.id;
    showResult(userchoice);
  });
});

function genRandomChoice() {
  let random = Math.floor(Math.random() * (3 - 1) + 1);
  if (random == 1) {
    return "rock";
  } else if (random == 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function checkChoices(userInput) {
  let computerInput = genRandomChoice();
  choiceData(userInput, computerInput);
  console.log(computerInput);
  if (userInput == "rock") {
    if (computerInput == "rock") {
      return "draw";
    } else if (computerInput == "paper") {
      return "You lose!";
    } else {
      return "You won!";
    }
  } else if (userInput == "paper") {
    if (computerInput == "rock") {
      return "You win!";
    } else if (computerInput == "paper") {
      return "Draw";
    } else {
      return "You lose!";
    }
  } else if (userInput == "scissor") {
    if (computerInput == "rock") {
      return "You lose!";
    } else if (computerInput == "paper") {
      return "You win!";
    } else {
      return "Draw";
    }
  }
}

let winner = document.querySelector("#result");
let user = document.querySelector("#score1");
let computer = document.querySelector("#score2");

let userScore = 0;
let computerScore = 0;

function showResult(userchoice) {
  let result = checkChoices(userchoice);
  winner.innerHTML = result;

  if (result == "You win!") {
    userScore++;
    user.innerHTML = userScore;
  } else if (result == "You lose!") {
    computerScore++;
    computer.innerHTML = computerScore;
  }
  resultStyles(result);
}

function resultStyles(result) {
  winner.style.transform = "scale(1.5)";
  if (result == "You win!") {
    winner.style.backgroundColor = "green";
  } else if (result == "You lose!") {
    winner.style.backgroundColor = "red";
  } else { 
    winner.style.backgroundColor = "gray";
  }
  setTimeout(() => {
    winner.style.transform = "scale(1)";
  }, 2000);
}

let choiceInfo = document.querySelector(".info");

function choiceData(userInput, computerInput) {
  console.log(userInput, computerInput);
  choiceInfo.innerHTML = `Your choice is <span class="youChoice">${userInput}</span> and computer choice is <span class="comChoice">${computerInput}</span> `;
}
