const HUMAN = "X";
const AI = "O";

let board = ["", "", "", "", "", "", "", "", ""];
let gameFinished = false;

const winStates = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

/*HUMAN MOVE*/

function humanMove(index) {
    if (board[index] !== "" || gameFinished) return;

    board[index] = HUMAN;
    updateBoard();

    let result = checkResult(board);
    if (result !== null) {
        showPopup(result);
        return;
    }

    document.getElementById("aiStatus").innerText = "AI is calculating...";
    document.getElementById("aiSteps").innerHTML = "";

    setTimeout(aiMove, 1000);
}

/* AI MOVE */

function aiMove() {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            board[i] = AI;
            let score = minimax(board, false);
            board[i] = "";

            addStep("Checking position " + i + " → Score: " + score);

            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    addStep("Chosen position: " + bestMove + " (Best score: " + bestScore + ")");

    board[bestMove] = AI;
    updateBoard();
    document.getElementById("aiStatus").innerText = "AI played optimal move";

    let result = checkResult(board);
    if (result !== null) {
        showPopup(result);
    }
}

/* MINIMAX*/

function minimax(boardState, isAITurn) {
    let result = checkResult(boardState);
    if (result !== null) return result;

    if (isAITurn) {
        let maxScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (boardState[i] === "") {
                boardState[i] = AI;
                let score = minimax(boardState, false);
                boardState[i] = "";
                maxScore = Math.max(score, maxScore);
            }
        }
        return maxScore;
    } else {
        let minScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (boardState[i] === "") {
                boardState[i] = HUMAN;
                let score = minimax(boardState, true);
                boardState[i] = "";
                minScore = Math.min(score, minScore);
            }
        }
        return minScore;
    }
}

/* RESULT CHECK */

function checkResult(b) {
    for (let state of winStates) {
        let [a, c, d] = state;
        if (b[a] !== "" && b[a] === b[c] && b[c] === b[d]) {
            if (b[a] === AI) return 10;
            if (b[a] === HUMAN) return -10;
        }
    }

    if (!b.includes("")) return 0;
    return null;
}

/* SIMPLE UI HELPERS*/

function updateBoard() {
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < 9; i++) {
        cells[i].innerText = board[i];
    }
}

function addStep(text) {
    let item = document.createElement("li");
    item.className = "list-group-item";
    item.innerText = text;
    document.getElementById("aiSteps").appendChild(item);
}

function showPopup(result) {
    gameFinished = true;

    if (result === 10) alert("AI Wins (Score +10)");
    else if (result === -10) alert("Human Wins (Score -10)");
    else alert("Draw (Score 0)");
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameFinished = false;
    document.getElementById("aiStatus").innerText = "";
    document.getElementById("aiSteps").innerHTML = "";
    updateBoard();
}
