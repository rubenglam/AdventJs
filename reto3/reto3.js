function distributeGifts(packOfGifts, reindeers) {
	let reindeersWeight = 0,
		packOfGiftsWeight = 0;
	reindeers.forEach(reindeer => (reindeersWeight += reindeer.length * 2));
	packOfGifts.forEach(packOfGift => (packOfGiftsWeight += packOfGift.length));
	return Math.trunc(reindeersWeight / packOfGiftsWeight);
}

module.exports = { distributeGifts };
