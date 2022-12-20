function dryNumber(dry, numbers) {
	const array = [];
	for (let i = 1; i <= numbers; i++) array.push(i);
	return array.filter(x => x.toString().includes(dry));
}

module.exports = { dryNumber };
