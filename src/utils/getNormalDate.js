const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const months = [
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря'
];

export const getNormalDate = date => {
	const dateObj = new Date(date);
	const dateOfMonth = dateObj.getDate();
	const month = months[dateObj.getMonth()];
	const day = daysOfWeek[dateObj.getDay()];
	const hours = dateObj.getHours();
	const minutes = dateObj.getMinutes();

	return { dateOfMonth, month, day, hours, minutes };
};
