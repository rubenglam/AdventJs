function checkJump(heights) {
	const maxValue = Math.max(...heights);
	const idxMaxValue = heights.indexOf(maxValue);
	const arraySplitted1 = heights.slice(0, idxMaxValue + 1);
	const arraySplitted2 = heights.slice(idxMaxValue, heights.length);
	const array1Increment = arraySplitted1.reduce((acc, curr, i, array) => array[i] >= array[i - 1]);
	const array2Decrement = arraySplitted2.reduce((acc, curr, i, array) => array[i] <= array[i - 1]);
	return array1Increment && array2Decrement;
}

const result = checkJump([1, 7, 3, 5]);
console.log(result);

module.exports = { checkJump };
