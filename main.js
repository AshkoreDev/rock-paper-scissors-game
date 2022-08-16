
function random(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let player = 0;
let pc = random(1,3);

player = prompt('Elige: 1 para piedra, 2 para papel, 3 para tijera.');

// Opciones del jugador.
if (player == 1) {

	alert('Elegiste Piedra');

} else if (player == 2) {
	
	alert('Elegiste Papel');

} else if (player == 3) {
	
	alert('Elegiste Tijera');

} else {

	alert('Seleccione una opción.');
}

// Resultados.
if (pc == player) {

	alert('HUBO UN EMPATE.');

} else if((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)) {

	alert('GANASTE.');

} else {

	alert('PERDISTE');
}