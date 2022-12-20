const { fixLetter } = require('./reto16');

test('reto16Test', () => {
	expect(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)).toStrictEqual(
		'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'
	);
	expect(fixLetter(`  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?`)).toStrictEqual(
		`Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?`
	);
});
