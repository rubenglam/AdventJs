const { dryNumber } = require('./reto18');

test('reto18Test', () => {
	expect(dryNumber(1, 15)).toStrictEqual([1, 10, 11, 12, 13, 14, 15]);
	expect(dryNumber(2, 20)).toStrictEqual([2, 12, 20]);
});
