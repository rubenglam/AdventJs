function wrapping(gifts) {
	return gifts.map(gift => {
		const around = '*'.repeat(gift.length + 2);
		return `${around}\n*${gift}*\n${around}`;
	});
}

module.exports = { wrapping };
