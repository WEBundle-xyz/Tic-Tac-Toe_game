const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');

const editPlayer1BtnElement = document.getElementById('edit_player_1_btn');
const editPlayer2BtnElement = document.getElementById('edit_player_2_btn');
const cancelConfigBtnElement = document.getElementById('cancel_config_button');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
