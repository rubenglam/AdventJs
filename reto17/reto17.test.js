const { carryGifts } = require('./reto17');

test('reto17Test', () => {
	expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toStrictEqual(['game bike', 'book toy']);
	expect(carryGifts(['game', 'bike', 'book', 'toy'], 7)).toStrictEqual(['game', 'bike', 'book toy']);
});
