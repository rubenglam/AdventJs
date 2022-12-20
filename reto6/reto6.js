function createCube(size) {
	const cube = [];
	for (let i = 0; i < size * 2; i++) {
		const row = [];
		const start = i * 2;
		const end = i * 2 * i;
		for (let t = 0; t < size * 2; t++) {
			if (middle === t) {
				row.push('/');
			}
		}
		cube.push(row);
	}
}

module.exports = { createCube };

// NOT FINISHED
