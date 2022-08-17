
function random(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function options(play) {

	let result = '';

	if (play == 1) {

		result = 'Piedra';

	} else if (play == 2) {
		
		result = 'Papel';

	} else if (play == 3) {
		
		result = 'Tijera';

	} else {

		result = 'Seleccione una opción.';
	}

	return result;
}

let pc = 0;
let player = 0;
let wins = 0;
let losses = 0;


while(wins < 3 && losses < 3) {

	pc = random(1,3);

	player = prompt('Elige: 1 para piedra, 2 para papel, 3 para tijera.');

	alert('Tú eliges: ' + options(player));
	alert('Pc elige: ' + options(pc));


	// Resultados.
	if (pc == player) {

		alert('HUBO UN EMPATE.');

	} else if((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)) {

		alert('GANASTE.');
		wins++;

	} else {

		alert('PERDISTE.');
		losses++;
	}
}

alert(`Veces ganadas: ${wins}. Veces perdidas: ${losses}.`);