export const getCityByTerm = async term => {
	const res = await fetch(
		'https://autocomplete.travelpayouts.com/places2?types[]=city&' +
			`term=${term}`
	);
	return res.json();
};
