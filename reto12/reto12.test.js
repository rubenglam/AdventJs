const { selectSleigh } = require('./reto12');

test('reto14Test', () => {
	expect(
		selectSleigh(1, [
			{ name: 'pheralb', consumption: 0.3 },
			{ name: 'TMChein', consumption: 0.5 },
		])
	).toStrictEqual('TMChein');
	expect(
		selectSleigh(30, [
			{ name: 'Dasher', consumption: 0.3 },
			{ name: 'Dancer', consumption: 0.5 },
			{ name: 'Rudolph', consumption: 0.7 },
			{ name: 'Midu', consumption: 1 },
		])
	).toStrictEqual('Dancer');
});
