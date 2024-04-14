export const filterFlightOffers = (flightOffers, transfers) => {
	if (!flightOffers) return flightOffers;
	if (transfers == 10) return flightOffers;
	return flightOffers.filter(e => {
		if (transfers == 10) {
			return e;
		}
		return e.transfers == transfers;
	});
};
