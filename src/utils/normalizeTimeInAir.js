export const normalizeTimeInAir = (departureDate, duration) => {
	const date = new Date(departureDate);
	const departureTime = `${date.getHours()}:${date.getMinutes()}`;
	let minutes = date.getMinutes() + (duration % 60);
	let hours =
		date.getHours() + Math.floor(duration / 60) + Math.floor(minutes / 60);
	minutes = minutes % 60;
	const arrivalTime = `${hours}:${minutes}`;
	return `${departureTime} - ${arrivalTime}`;
};
