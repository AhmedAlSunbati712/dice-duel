/**
 * Ahmed Al Sunbati          Jul 9 2025
 * Description: Javascript file to handle rolling the dice, and
 *              button actions.
 */


/**
 * Description: Generates random numbers for the numbers on the dice,
 *              converts each score into the appropirate classes to add
 *              each dice to style it with the appropirate number of circles.
 * @params Takes no parameters
 * @returns Doesnt return any value
 */
function rollDice() {

    var player2Score = Math.floor(Math.random() * 6) + 1;
    var player1Score = Math.floor(Math.random() * 6) + 1;

    var scoreNumToWordArray = ["one", "two", "three", "four", "five", "six"];

    var score2Word = scoreNumToWordArray[player2Score - 1];
    var score1Word = scoreNumToWordArray[player1Score - 1];

    var player2 = document.querySelector(".player-2");
    var player1 = document.querySelector(".player-1");
    player1.innerHTML = "";
    player2.innerHTML = "";
    addScoreOnDice(player1, player1Score, score1Word);
    addScoreOnDice(player2, player2Score, score2Word);

    displayResult(player1Score, player2Score);
    displayScore();

}

/**
 * Description: Adds the score style (circles) on the dice for the given
 *              player.
 * @param  playerDiv The player div (dice) to target.
 * @param  playerScore The score of the player.
 * @param  playerScoreWord The score but as a word (i.e "one", "two"...etc)
 */
function addScoreOnDice(playerDiv, playerScore, playerScoreWord) {
    for (let i = 1; i <= playerScore; i++) {
        var circleDiv = document.createElement("div");
        var className = playerScoreWord + "-" + i;
        circleDiv.classList.add(className);
        playerDiv.appendChild(circleDiv);
    }
}

/**
 * Description: Displays the result of the dice roll at the top of the page.
 * @param  player1Score Score of player 1
 * @param  player2Score Score of player 2
 */
function displayResult(player1Score, player2Score) {
    var result = document.querySelector("#result-text");

    if (player2Score > player1Score) {
        result.textContent = "Player 2 Wins";
        player2CumScore++;
    } else if (player1Score > player2Score) {
        result.textContent = "Player 1 Wins";
        player1CumScore++;
    } else {
        result.textContent = "Draw";
    }
}
/**
 * Description: Targets the scoreboard cards for each player and updates it
 *              with the new scores.
 */
function displayScore() {
    var player1Scorediv = document.querySelector(".player1Score");
    var player2Scorediv = document.querySelector(".player2Score");
    player1Scorediv.textContent = player1CumScore;
    player2Scorediv.textContent = player2CumScore;
}
/**
 * Description: Resets the scores of players.
 */
function resetScore() {
    player1CumScore = 0;
    player2CumScore = 0;
    displayScore();
}

var player1CumScore = 0;
var player2CumScore = 0;
displayScore();
rollDice();
document.querySelector("#roll-btn").addEventListener("click", rollDice);
document.querySelector("#reset-btn").addEventListener("click", resetScore);
