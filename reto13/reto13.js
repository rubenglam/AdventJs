function getFilesToBackup(lastBackup, changes) {
	return changes
		.filter(item => item[1] > lastBackup)
		.map(item => item[0])
		.filter((value, index, array) => array.indexOf(value) === index)
		.sort((prev, next) => prev - next);
}

module.exports = { getFilesToBackup };
