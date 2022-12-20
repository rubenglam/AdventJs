function getMaxGifts(giftsCities, maxGifts, maxCities) {
	const giftsCitiesSorted = giftsCities
		.filter(x => x <= maxGifts)
		.sort((a, b) => {
			if (a < b) return 1;
			else if (a > b) return -1;
			else return 0;
		});

	const travels = [];
	for (let i = 0; i < giftsCitiesSorted.length; i++) {
		let giftsDropped = 0;
		let citiesVisited = 0;
		for (let t = i; t < giftsCitiesSorted.length; t++) {
			const currentCityGifts = giftsCitiesSorted[t];
			if (giftsDropped + currentCityGifts <= maxGifts) {
				giftsDropped += currentCityGifts;
				citiesVisited++;
			}
			if (citiesVisited <= maxCities) travels.push(giftsDropped);
		}
	}
	return Math.max(...travels);
}

module.exports = { getMaxGifts };

// NOT FINISHED
