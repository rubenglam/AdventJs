const { getOptimalPath } = require('./reto14');

test('reto14Test', () => {
	expect(getOptimalPath([[0], [2, 3]])).toStrictEqual(2);
	expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toStrictEqual(5);
	expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toStrictEqual(8);
});
