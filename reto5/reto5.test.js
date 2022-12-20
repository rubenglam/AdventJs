const { getMaxGifts } = require('./reto5.js');

const result1 = getMaxGifts([12, 3, 11, 5, 7], 20, 3); // 20
const result2 = getMaxGifts([50], 15, 1); // 0
const result3 = getMaxGifts([50], 100, 1); // 50
const result4 = getMaxGifts([50, 70], 100, 1); // 70
const result5 = getMaxGifts([50, 70, 30], 100, 2); // 100
const result6 = getMaxGifts([50, 70, 30], 100, 3); // 100
const result7 = getMaxGifts([50, 70, 30], 100, 4); // 100

test('reto5Test', () => {
	// expect(result1).toStrictEqual(20);
	// expect(result2).toStrictEqual(0);
	// expect(result3).toStrictEqual(50);
	// expect(result4).toStrictEqual(70);
	// expect(result5).toStrictEqual(100);
	// expect(result6).toStrictEqual(100);
	// expect(result7).toStrictEqual(100);
});
