const { getFilesToBackup } = require('./reto13');

const lastBackup = 1546300800;
const changes = [
	[3, 1546301100],
	[2, 1546300800],
	[1, 1546300800],
	[1, 1546300900],
	[1, 1546301000],
];

test('reto13Test', () => {
	expect(getFilesToBackup(lastBackup, changes)).toStrictEqual([1, 3]);
});
