import React from 'react';
import { FaPlaneDeparture } from 'react-icons/fa';
import Link from 'next/link';
export default async function Header() {
	return (
		<header className='h-16 fixed w-full bg-blue text-white z-[100]'>
			<div className='custom-container h-full flex items-center justify-center'>
				<div className=' font-semibold text-4xl'>
					<Link href='/'>
						<span>Air</span>
						<FaPlaneDeparture className='inline-block mx-2' />
						<span>Tickets</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
