function countTime(leds) {
	let time = 0;
	while (leds.some(x => x === 0)) {
		const oldLeds = [...leds];
		oldLeds.forEach((led, index) => {
			if (led === 1) return;
			leds[index] = index === 0 ? oldLeds[oldLeds.length - 1] : oldLeds[index - 1];
		});
		time += 7;
	}
	return time;
}

module.exports = { countTime };
