function startNewGame() {
	if (players[0].name === '' || players[1].name === '') {
		alert('Set custom players name');
        return;
	}
	gameAreaElement.style.display = 'block';
}
