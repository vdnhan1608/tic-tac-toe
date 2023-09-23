let startGameButton = document.getElementById('start-game-button');
let popUp = document.getElementsByClassName('pop-up')[0];
let cells = document.getElementsByClassName('cell');
let restartButton = document.getElementById('restartBtn');
let message = document.getElementById('message');
// X or O on this pattern wins the game
let winningPatter = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

// Check if X or O winning
const checkGame = () => {
	for (let i = 0; i < 9; i++) {
		console.log(i, ' ', cells[i].textContent);
	}

	let n = winningPatter.length;
	for (let i = 0; i < n; i++) {
		if (
			cells[winningPatter[i][0]].textContent === 'X' &&
			cells[winningPatter[i][1]].textContent === 'X' &&
			cells[winningPatter[i][2]].textContent === 'X'
		) {
			return 1;
		} else if (
			cells[winningPatter[i][0]].textContent === 'O' &&
			cells[winningPatter[i][1]].textContent === 'O' &&
			cells[winningPatter[i][2]].textContent === 'O'
		) {
			return 2;
		}
	}

	return 0;
};
// Clicking new game button, the tic-tac-toe appear
startGameButton.addEventListener('click', () => {
	// Access the style of pop up
	popUp.style.display = 'none';
});

// Player 1: X
// Player 2: O
let isP1 = true; // Every turn isP1 turn false/true

// Tick on the cell
for (let i = 0; i < 9; i++) {
	cells[i].addEventListener('click', () => {
		if (isP1 && cells[i].textContent.length < 1) {
			cells[i].textContent = 'X';
			isP1 = false;
		} else if (!isP1 && cells[i].textContent.length < 1) {
			cells[i].textContent = 'O';
			isP1 = true;
		}

		// Check game and annouce winner
		let result = checkGame();
		console.log('result ', result);
		if (result != 0) {
			resetGame();
			announceWinner(result);
		}
	});
}

// Announce the winner
const announceWinner = (player) => {
	message.textContent = 'Player ' + player + ' wins!';
	popUp.style.display = 'flex';
};
// Reset game, all cell is clear
const resetGame = () => {
	for (let i = 0; i < 9; i++) {
		cells[i].textContent = '';
	}
};
// Restart game handle button
restartButton.addEventListener('click', () => {
	for (let i = 0; i < 9; i++) {
		cells[i].textContent = '';
	}
});
