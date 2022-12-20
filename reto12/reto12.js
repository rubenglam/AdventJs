function selectSleigh(distance, sleighs) {
	const items = sleighs
		.filter(item => item.consumption * distance <= 20)
		.map(item => {
			item.totalConsumption = item.consumption * distance;
			return item;
		})
		.sort((a, b) => b.totalConsumption - a.totalConsumption);
	return items[0] ? items[0].name : null;
}

module.exports = { selectSleigh };
