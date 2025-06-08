const userChoiceEl = document.getElementById("user-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const winnerEl = document.getElementById("winner");

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    userChoiceEl.textContent = capitalize(userChoice);
    computerChoiceEl.textContent = capitalize(computerChoice);
    winnerEl.textContent = winner;

    highlightResult(winner);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(user, computer) {
  if (user === computer) return "It's a draw!";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function highlightResult(result) {
  if (result.includes("win")) {
    winnerEl.style.color = "#28a745"; // green
  } else if (result.includes("draw")) {
    winnerEl.style.color = "#6c757d"; // gray
  } else {
    winnerEl.style.color = "#dc3545"; // red
  }
}
