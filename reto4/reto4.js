function fitsInOneBox(boxes) {
	const sortedBoxes = boxes.sort((a, b) => (b.h > a.h && b.l > a.l && b.w > a.w ? -1 : 1));
	let isValid = true;
	let index = 1;
	let lastBox = sortedBoxes[0];
	while (index < sortedBoxes.length && isValid) {
		const box = sortedBoxes[index];
		isValid = lastBox.h < box.h && lastBox.l < box.l && lastBox.w < box.w;
		lastBox = box;
		index++;
	}
	return isValid;
}

module.exports = { fitsInOneBox };
