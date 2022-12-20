const { getCompleted } = require('./reto11');

test('reto11Test', () => {
	expect(getCompleted('01:00:00', '03:00:00')).toStrictEqual('1/3');
});
