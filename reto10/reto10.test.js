const { checkJump } = require('./reto10'); // false

test('reto10Test', () => {
	expect(checkJump([1, 3, 8, 5, 2])).toStrictEqual(true);
	expect(checkJump([1, 7, 3, 5])).toStrictEqual(false);
});
