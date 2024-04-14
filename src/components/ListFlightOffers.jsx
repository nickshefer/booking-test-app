'use client';

import { useEffect, useState } from 'react';
import FlightOffer from './FlightOffer';
import { filterFlightOffers } from '@/utils/filterFlightOffers';
import Sort from './Sort';
import { sortFlightOffers } from '@/utils/sortFlightOffers';

export default function ListFlightOffers({ flightOffers, transfers }) {
	const [filteredFlightOffers, setFilteredFlightOffers] = useState(
		filterFlightOffers(flightOffers, transfers)
	);
	const [sorting, setSorting] = useState('');
	const changeSorting = value => {
		setSorting(value);
	};
	useEffect(() => {
		setFilteredFlightOffers(filterFlightOffers(flightOffers, transfers));
	}, [transfers]);

	useEffect(() => {
		setFilteredFlightOffers(sortFlightOffers(filteredFlightOffers, sorting));
	}, [sorting]);

	return (
		<div className='flex flex-col gap-4 w-full'>
			{filteredFlightOffers && (
				<>
					<Sort sorting={sorting} changeSorting={changeSorting} />
					{filteredFlightOffers.map(offer => (
						<FlightOffer key={offer.link} offer={offer} />
					))}
				</>
			)}
		</div>
	);
}
