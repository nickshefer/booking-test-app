import React from 'react';
import { getCityByTerm } from '@/actions/getCityByTerm';
import { Input } from './UI/input/Input';
import { InputMenu } from './UI/inputMenu/InputMenu';

export const CityInput = ({
	cityState,
	variantsState,
	handleCity,
	handleVariants,
	placeholder,
	error
}) => {
	async function handleChange(e) {
		let eValue = e.target.value;
		handleCity(eValue ? eValue[0].toUpperCase() + eValue.slice(1) : '');
		if (!/\d+/.test(e.target.value) && e.target.value) {
			const data = await getCityByTerm(e.target.value);
			if (data.length != 0) {
				handleVariants(true, data);
			} else {
				handleVariants(false, []);
				handleCity('');
			}
		} else {
			handleVariants(false, []);
		}
	}

	function clickVariant(variant) {
		handleCity(variant.name, variant.code);
		handleVariants(false, []);
	}

	return (
		<div className='relative'>
			<Input
				value={cityState.city}
				onChangeValue={e => handleChange(e)}
				placeholder={placeholder}
				error={error}
			/>
			<div className='absolute top-0 right-0 px-5 py-4 text-think-color text-[1.4rem]'>
				{cityState.code}
			</div>
			{variantsState.visible && (
				<InputMenu data={variantsState.variants} handleClick={clickVariant} />
			)}
		</div>
	);
};
