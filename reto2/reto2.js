function countHours(year, holidays) {
	const isWorkDay = dayOfWeek => dayOfWeek !== 0 && dayOfWeek !== 6;
	let extraHours = 0;
	for (const holiday of holidays) {
		const date = new Date(`${year}/${holiday}`);
		if (isWorkDay(date.getDay())) extraHours += 2;
	}
	return extraHours;
}

module.exports = { countHours };
