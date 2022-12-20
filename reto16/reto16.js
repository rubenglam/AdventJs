function fixLetter(letter) {
	return letter
		.trim() // Eliminar espacios al principio y final de la frase
		.replace(/[\?\!]{2,}/g, '?') // Eliminar multiples interrogaciones
		.replace(/,/g, ', ') // Separación en las comas
		.replace(/\s+/g, ' ') // Eliminar multiples separaciones
		.replace(/santa claus/gi, 'Santa Claus') // Mostar Santa Claus en mayuscula
		.replace(/\s+[\?\.\,]/g, text => text.trim()) // Eliminar el espacio antes de signos
		.replace(/[\?\!\.]+[\s][a-z]|^[a-z]/gi, char => char.toUpperCase()) // Mostrar la primera letra en mayuscula si hay signos de interrogacion, exclamacion o punto y un espacio
		.replace(/[a-z]$/gi, char => char + '.'); // Añadir un punto a final de frase
}

module.exports = { fixLetter };
