function getOptimalPath(path) {
	const funcMinPath = (acc, curr) =>
		curr.map((value, i) => {
			return value + Math.min(acc[i], acc[i + 1]);
		});
	return path.reverse().reduce(funcMinPath)[0];
}

module.exports = { getOptimalPath };
