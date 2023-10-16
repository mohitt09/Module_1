function showRules() {
    const rulesPopup = document.getElementById("rulesPopup");
    rulesPopup.style.display = "block";
  }
  
  function closeRules() {
    const rulesPopup = document.getElementById("rulesPopup");
    rulesPopup.style.display = "none";
  }
  
  function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    const signElements = document.querySelector(".sign");
    signElements.style.display = "none";
  
    const resultElements = document.querySelector(".result");
    resultElements.style.display = "flex";
  
  
    const computerChoiceElement = document.querySelector(".computer-choice");
    computerChoiceElement.querySelector("img").src = `./${computerChoice}.png`;
    computerChoiceElement.classList.add(computerChoice);
    computerChoiceElement.classList.add("selected");
  
    const personChoiceElement = document.querySelector(".person-choice");
    personChoiceElement.querySelector("img").src = `./${playerChoice}.png`;
    personChoiceElement.classList.add(playerChoice);
    personChoiceElement.classList.add("selected");
  
    const resultText = document.querySelector(".result h1");
    const resultTexth3 = document.querySelector(".result-button h3");
    const replayButton = document.querySelector(".result-button button");
  
    if (playerChoice === computerChoice) {
      resultText.textContent = "TIE UP";
      replayButton.textContent = "REPLAY";
      showNextButton(false);
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {

      resultText.textContent = "YOU WIN";
      resultTexth3.textContent = "AGAINST PC";
      replayButton.textContent = "Play Again";
      showNextButton(true);
      personChoiceElement.classList.add("box4");
      updateScore("person-score");
    } else {
    
      resultText.textContent = "YOU LOST";
      resultTexth3.textContent = "AGAINST PC";
      replayButton.textContent = "Play Again";
      showNextButton(false);
      computerChoiceElement.classList.add("box4");
      updateScore("comp-score");
    }
  }

  function updateScore(scoreType) {
    const scoreElement = document.querySelector("." + scoreType + " h1");
    const currentScore = parseInt(scoreElement.textContent, 10);
    scoreElement.textContent = (currentScore + 1).toString();
  
    localStorage.setItem(scoreType, currentScore + 1);
  }
  

  function getScoresFromLocalStorage() {
    const compScore = localStorage.getItem("comp-score");
    const personScore = localStorage.getItem("person-score");
  
    if (compScore) {
      const compScoreElement = document.querySelector(".comp-score h1");
      compScoreElement.textContent = compScore;
    }
  
    if (personScore) {
      const personScoreElement = document.querySelector(".person-score h1");
      personScoreElement.textContent = personScore;
    }
  }
  
  function showSign() {
    const signElements = document.querySelector(".sign");
    signElements.style.display = "block";
  
    const resultElements = document.querySelector(".result");
    resultElements.style.display = "none";
  
    const additionalContent = document.querySelector(".additional-content");
    additionalContent.style.display = "none";
  
    showNextButton(false);
    const scoreBoardElements = document.querySelector(".score-board");
    scoreBoardElements.style.display = "flex";

    const computerChoiceElement = document.querySelector(".computer-choice");
    computerChoiceElement.querySelector("img").src = "";
    computerChoiceElement.classList.remove("rock", "paper", "scissors", "box4");
  
    const personChoiceElement = document.querySelector(".person-choice");
    personChoiceElement.querySelector("img").src = "";
    personChoiceElement.classList.remove("rock", "paper", "scissors", "box4");
  }
  
  function showAdditionalContent() {
    const additionalContent = document.querySelector(".additional-content");
    additionalContent.style.display = "flex";
    showNextButton(false);
   
    const resultElements = document.querySelector(".result");
    resultElements.style.display = "none";
  
    const scoreBoardElements = document.querySelector(".score-board");
    scoreBoardElements.style.display = "none";
  }
  
  function showNextButton(flag) {
    const nextButton = document.getElementById("nextButton");
   
    const playerWon = flag; 
    if (playerWon) {
      nextButton.style.display = "block";
    } else {
      nextButton.style.display = "none";
    }
  }

  showNextButton();
  getScoresFromLocalStorage();