let score = 0;

const result = document.getElementById("result");
const scoreText = document.getElementById("score");

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice =
        choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        result.textContent =
            "Draw! Computer chose " + computerChoice;
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        score++;
        result.textContent =
            "You Win! Computer chose " + computerChoice;
    }
    else {
        score--;
        result.textContent =
            "You Lose! Computer chose " + computerChoice;
    }

    scoreText.textContent = "Score: " + score;
}

document.getElementById("rock")
.addEventListener("click", () => playGame("rock"));

document.getElementById("paper")
.addEventListener("click", () => playGame("paper"));

document.getElementById("scissors")
.addEventListener("click", () => playGame("scissors"));
