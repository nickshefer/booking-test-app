import RadioBtn from './UI/radio/RadioBtn';

export default function Filter({ transfers, changeTransfers }) {
	const handleChange = quantity => {
		changeTransfers(quantity);
	};
	return (
		<div className='shrink-0'>
			<div className='bg-white rounded-lg p-4 '>
				<h3 className='tracking-wider text-center'>Количество пересадок</h3>
				<div className='mt-2'>
					<RadioBtn
						quantity={10}
						label={'Все'}
						checked={transfers == 10}
						name={'radio'}
						handleChange={handleChange}
					/>
					<RadioBtn
						quantity={0}
						label={'Без пересадок'}
						name={'radio'}
						checked={transfers == 0}
						handleChange={handleChange}
					/>
					<RadioBtn
						quantity={1}
						label={'1 пересадка'}
						name={'radio'}
						checked={transfers == 1}
						handleChange={handleChange}
					/>
					<RadioBtn
						quantity={2}
						label={'2 пересадки'}
						name={'radio'}
						checked={transfers == 2}
						handleChange={handleChange}
					/>
					<RadioBtn
						quantity={3}
						label={'3 пересадки'}
						name={'radio'}
						checked={transfers == 3}
						handleChange={handleChange}
					/>
				</div>
			</div>
		</div>
	);
}
