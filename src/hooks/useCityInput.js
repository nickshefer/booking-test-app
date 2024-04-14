import { useState } from 'react';

function useCityInput(
	initCity = '',
	initCode = '',
	initVisible = false,
	initVariants = [],
	initError = false
) {
	const [city, setCity] = useState({
		city: initCity,
		code: initCode
	});
	const [variants, setVariants] = useState({
		visible: initVisible,
		variants: initVariants
	});
	function handleChangeCity(city, code = '') {
		setCity({ city: city, code: code });
	}
	function handleChangeVariants(visible, variants) {
		setVariants({ visible: visible, variants: variants });
	}
	return [city, handleChangeCity, variants, handleChangeVariants];
}

export default useCityInput;
