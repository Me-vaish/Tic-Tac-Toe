# Tic Tac Toe – Human vs AI (Minimax Algorithm)

## Live Demo (MVP)
https://me-vaish.github.io/Tic-Tac-Toe/


---

## Overview
This project implements a Tic Tac Toe game where a human player competes against an AI agent.
The AI uses the Minimax algorithm to evaluate all possible future game states and always plays optimally.

---

## Technologies Used
- HTML
- CSS
- Bootstrap (layout, grid system, buttons, cards)
- JavaScript

---

## Game Flow
1. The game starts with an empty 3×3 board.
2. The human player (X) makes the first move.
3. After each move, the game checks for a win or draw.
4. If the game is not over, the AI (O) selects its move using Minimax.
5. The game ends when a player wins or the board is full.

---

## State Representation
The board is represented as a one-dimensional array of size 9.

Example:
["X", "", "O", "", "X", "", "", "", ""]

Each index corresponds to a cell on the Tic Tac Toe board.

---

## Terminal States and Scoring
The Minimax algorithm evaluates terminal states using the following scores:

AI win    → +10  
Human win → -10  
Draw      → 0  

---

## Minimax Algorithm
- The AI assumes the human player always plays optimally.
- On the AI’s turn, the algorithm selects the move with the maximum score.
- On the human’s turn, the algorithm selects the move with the minimum score.
- The algorithm recursively explores all possible future game states until a terminal state is reached.

The AI selects the move with the best possible outcome and therefore never loses.

---

## AI Decision Simulation
- All possible AI moves and their Minimax scores are displayed in a side panel.
- Moves that lead to a human win are scored -10.
- Moves that lead to a draw are scored 0.
- The move with the highest score is chosen.
- A short delay is added to simulate AI thinking.

---

## Features
- Human vs AI gameplay
- Optimal AI decision-making using Minimax
- Visual explanation of AI move evaluation
- Responsive UI using Bootstrap

---

## How to Run
Open the Live Demo (MVP) link in any modern web browser.


