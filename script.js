let startGameButton = document.getElementById('start-game-button');
let popUp = document.getElementsByClassName('pop-up')[0];

// Clicking new game button, the tic-tac-toe appear
startGameButton.addEventListener('click', () => {
	// Access the style of pop up
	popUp.style.display = 'none';
});
