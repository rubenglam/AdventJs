// CASI COMPLETADO

function decorateTree(base) {
	const dict = {
		PB: 'R',
		BP: 'R',
		RP: 'B',
		PR: 'B',
		BR: 'P',
		RB: 'P',
		BB: 'B',
		PP: 'P',
		RR: 'R',
	};

	const result = [base];
	let currentRow = base.split(' ');
	const length = currentRow.length - 1;
	for (let i = 0; i < length; i++) {
		currentRow = [...currentRow].splice(1).map((curr, i) => {
			return dict[currentRow[i] + curr];
		});
		result.unshift(currentRow.join(' '));
	}
	return result;
}

const result = decorateTree('B P R P');
console.log(result);
