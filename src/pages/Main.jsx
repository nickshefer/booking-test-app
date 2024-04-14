'use client';

import { useState } from 'react';
import MainSearchForm from '../components/MainSearchForm';
import ListFlightOffers from '@/components/ListFlightOffers';
import Filter from '@/components/Filter';
import Loader from '@/components/UI/loader/Loader';

export default function Main() {
	const [flightOffers, setFlightOffers] = useState(null);
	const [transfers, setTransfers] = useState(10);
	const [loading, setLoading] = useState(false);
	const changeTransfers = quantity => {
		setTransfers(quantity);
	};
	return (
		<main>
			<div className='h-16'></div>
			<MainSearchForm
				loading={loading}
				setLoading={setLoading}
				setFlightOffers={setFlightOffers}
			/>
			<div className='custom-container'>
				{loading ? (
					<Loader />
				) : flightOffers ? (
					<div className='flex sm:flex-row flex-col  gap-4'>
						<Filter transfers={transfers} changeTransfers={changeTransfers} />
						<ListFlightOffers
							flightOffers={flightOffers}
							transfers={transfers}
						/>
					</div>
				) : (
					<div className='text-center text-2xl'>Здесь будут предложения...</div>
				)}
			</div>
		</main>
	);
}
