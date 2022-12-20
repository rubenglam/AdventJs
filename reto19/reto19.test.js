const { sortToys } = require('./reto19');

test('reto19Test', () => {
	expect(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])).toStrictEqual(['puzzle', 'car', 'ball', 'doll']);
	expect(sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])).toStrictEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo']);
});
