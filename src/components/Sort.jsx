import React from 'react';

export default function Sort({ sorting, changeSorting }) {
	return (
		<div className='flex bg-white rounded-lg  overflow-hidden'>
			<button
				onClick={() => changeSorting('price')}
				className={`${
					sorting == 'price' ? 'activeBtn' : ''
				} flex-50 flex-50 px-[1.2rem] py-[1rem] text-[1.4rem]`}
			>
				Самый дешевый
			</button>
			<button
				onClick={() => changeSorting('duration_to')}
				className={`${
					sorting == 'duration_to' ? 'activeBtn' : ''
				} flex-50 flex-50 px-[1.2rem] py-[1rem] text-[1.4rem] `}
			>
				Самый быстрый
			</button>
		</div>
	);
}
