function sortToys(toys, positions) {
	const data = toys
		.map((toy, i) => ({
			toy: toy,
			position: positions[i],
		}))
		.sort((a, b) => a.position - b.position);
	return data.map(x => x.toy);
}

module.exports = { sortToys };