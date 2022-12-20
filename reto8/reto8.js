// NO COMPLETADO

function checkPart(part) {
	const array = part.split('');
	let wildcard = true;
	let isValid = true;
	let index = 0;
	while (isValid && index < array.length / 2) {
		const first = array[index];
		const last = array[array.length - 1 - index];
		console.log(first, last);
		if (first !== last) {
			if (!wildcard) isValid = false;
			wildcard = false;
		}
		index++;
	}
	return isValid;
}

const result = checkPart('uwu');
console.log(result);

module.exports = { checkPart };
