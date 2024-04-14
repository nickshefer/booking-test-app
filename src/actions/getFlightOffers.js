'use server';

export default async function getFlightOffers(params) {
	const correctParams = {};
	for (let param in params) {
		if (params[param]) correctParams[param] = params[param];
	}
	let url =
		'https://api.travelpayouts.com/aviasales/v3/prices_for_dates?token=65388707bf015b50a8402c732d7f6921&' +
		new URLSearchParams(correctParams).toString();
	try {
		const res = await fetch(url);
		return await res.json();
	} catch (error) {
		console.log(error.message);
	}
}
