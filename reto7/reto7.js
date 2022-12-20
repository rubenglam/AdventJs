function getGiftsToRefill(a1, a2, a3) {
	const onlyUnique = (value, index, self) => self.indexOf(value) === index;
	const joinArray = a1.filter(onlyUnique).concat(a2.filter(onlyUnique)).concat(a3.filter(onlyUnique));
	const obj = {};
	joinArray.forEach(item => {
		obj[item] = obj[item] ? obj[item] + 1 : 1;
	});
	return Object.keys(obj).filter(x => obj[x] === 1);
}

module.exports = { getGiftsToRefill };
