function carryGifts(gifts, maxWeight) {
	const bags = [];
	let currentBag = [];
	gifts.forEach(item => {
		if (item.length > maxWeight) return;
		const totalLength = currentBag.reduce((acc, curr) => acc + curr.length, 0) + item.length;
		if (totalLength > maxWeight) {
			bags.push(currentBag.join(' '));
			currentBag = [];
		}
		currentBag.push(item);
	});
	if (currentBag.length > 0) bags.push(currentBag.join(' '));
	return bags;
}

module.exports = { carryGifts };
