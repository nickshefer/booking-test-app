'use client';

import { getCityByTerm } from '@/actions/getCityByTerm';
import { getNormalDate } from '@/utils/getNormalDate';
import { normalizeDurationTime } from '@/utils/normalizeDurationTime';
import { normalizePrice } from '@/utils/normalizePrice';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FlightOffer({ offer }) {
	const [originCityName, setOriginCityName] = useState({ name: '', code: '' });
	const [arrivalCityName, setArrivalCityName] = useState({
		name: '',
		code: ''
	});
	const {
		dateOfMonth: originDateOfMonth,
		month: originMonth,
		day: originDay
	} = getNormalDate(offer.departure_at);
	const {
		dateOfMonth: returnDateOfMonth,
		month: returnMonth,
		day: returnDay
	} = getNormalDate(offer.return_at);
	const { hours: hoursTo, minutes: minutesTo } = normalizeDurationTime(
		offer.duration_to
	);
	const { hours: hoursBack, minutes: minutesBack } = normalizeDurationTime(
		offer.duration_back
	);

	useEffect(() => {
		getCityByTerm(offer.origin).then(data =>
			setOriginCityName({ name: data[0].name, code: data[0].code })
		);
		getCityByTerm(offer.destination).then(data =>
			setArrivalCityName({ name: data[0].name, code: data[0].code })
		);
	}, []);

	return (
		<Link href={`https://www.aviasales.com/${offer.link}`}>
			<div className=' bg-white rounded-lg'>
				<div className='flex justify-between items-center p-4'>
					<span className='text-3xl font-semibold text-blue'>{`${normalizePrice(
						offer.price
					)} ₽`}</span>
					<img
						src={`http://pics.avs.io/150/50/${offer.airline}.png`}
						alt='logo'
					/>
				</div>
				<div className='border-t-2 border-slate-400 border-dashed '></div>
				<div className='p-4 pt-2'>
					<div className='flex justify-between'>
						<span className=' text-slate-500'>Туда</span>
						<span className=' text-slate-500'>{`${originDateOfMonth} ${originMonth}, ${originDay}`}</span>
					</div>
					<div className='flex flex-col sm:flex-row justify-between items-center text-base gap-2 mt-2'>
						<div>
							<div className='leading-5'>{`${originCityName.name}, ${originCityName.code}`}</div>
						</div>
						<div className='text-sm leading-4 text-center text-slate-500'>
							<div>в пути:</div>
							<div>{`${hoursTo ? hoursTo : ''} ${
								minutesTo ? minutesTo : ''
							}`}</div>
						</div>
						<div className='text-right leading-5'>
							<div>{`${arrivalCityName.name}, ${arrivalCityName.code}`}</div>
						</div>
					</div>
				</div>

				{offer.return_at && (
					<>
						<div className='border-t-2 border-slate-400 border-dashed '></div>
						<div className='p-4 pt-2'>
							<div className='flex justify-between'>
								<span className=' text-slate-500'>Обратно</span>
								<span className=' text-slate-500'>{`${returnDateOfMonth} ${returnMonth}, ${returnDay}`}</span>
							</div>
							<div className='flex flex-col sm:flex-row justify-between items-center text-base gap-2 mt-2'>
								<div>
									<div className='leading-5'>{`${arrivalCityName.name}, ${arrivalCityName.code}`}</div>
								</div>
								<div className='text-sm leading-4 text-center text-slate-500'>
									<div>в пути:</div>
									<div>{`${hoursBack ? hoursBack : ''} ${
										minutesBack ? hoursBack : ''
									}`}</div>
								</div>
								<div className='text-right leading-5'>
									<div>{`${originCityName.name}, ${originCityName.code}`}</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</Link>
	);
}
