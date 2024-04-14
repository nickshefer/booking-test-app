'use client';
import getFlightOffers from '@/actions/getFlightOffers';
import React, { useState } from 'react';
import { CityInput } from './CityInput';
import useCityInput from '@/hooks/useCityInput';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from './UI/button/Button';
import { normalizeDateForApi } from '@/utils/normalizeDateForAPI';

export default function MainSearchForm({
	loading,
	setLoading,
	setFlightOffers
}) {
	const [originCity, setOriginCity, originVariants, setOriginVariants] =
		useCityInput();
	const [
		destinationCity,
		setDestinationCity,
		destinationVariants,
		setDestinationVariants
	] = useCityInput();
	const [departureDate, setDepartureDate] = useState('');
	const [returnDate, setReturnDate] = useState('');

	async function fetchingData(e) {
		e.preventDefault();
		if (!originCity.code && !destinationCity.code) {
			return alert('Вы должны указать источник или пункт назначения');
		}
		setLoading(true);
		const params = {
			origin: originCity.code,
			destination: destinationCity.code,
			departure_at: departureDate && normalizeDateForApi(departureDate),
			return_at: returnDate && normalizeDateForApi(returnDate)
		};
		console.log(params);
		try {
			const res = await getFlightOffers(params);
			setFlightOffers(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className='gradient-bg py-4'>
			<div className='custom-container'>
				<h1 className='text-center text-white text-3xl font-semibold'>
					Поиск дешевых авиабилетов
				</h1>
				<form className='max-w-[500px] mx-auto flex flex-col gap-2 py-4'>
					<CityInput
						cityState={originCity}
						variantsState={originVariants}
						handleCity={setOriginCity}
						handleVariants={setOriginVariants}
						placeholder={'Откуда'}
					/>
					<CityInput
						cityState={destinationCity}
						variantsState={destinationVariants}
						handleCity={setDestinationCity}
						handleVariants={setDestinationVariants}
						placeholder={'Куда'}
					/>
					<ReactDatePicker
						selected={departureDate}
						dateFormat={'dd.MM.YYYY'}
						onChange={date => setDepartureDate(date)}
						className='date-input'
						minDate={new Date()}
						placeholderText='Когда'
					/>
					<ReactDatePicker
						selected={returnDate}
						dateFormat={'dd.MM.YYYY'}
						onChange={date => setReturnDate(date)}
						className='date-input'
						minDate={new Date()}
						placeholderText='Обратно'
					/>
					<Button isLoading={loading} onClick={e => fetchingData(e)}>
						Найти
					</Button>
				</form>
			</div>
		</div>
	);
}
