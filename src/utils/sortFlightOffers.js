export const sortFlightOffers = (flightOffers, sorting) => {
	if (!flightOffers) return flightOffers;
	return flightOffers.sort((a, b) => {
		if (a[sorting] > b[sorting]) return 1;
		if (a[sorting] < b[sorting]) return -1;
		return 0;
	});
};
