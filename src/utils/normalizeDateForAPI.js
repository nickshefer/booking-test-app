export const normalizeDateForApi = dateObj => {
	const year = dateObj.getFullYear();
	const month =
		dateObj.getMonth() + 1 <= 9
			? `0${dateObj.getMonth() + 1}`
			: dateObj.getMonth() + 1;
	const date =
		dateObj.getDate() <= 9 ? `0${dateObj.getDate()}` : dateObj.getDate();
	return `${year}-${month}-${date}`;
};
