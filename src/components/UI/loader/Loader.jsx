import React from 'react';
import cs from './loader.module.css';
import { FaPlaneDeparture } from 'react-icons/fa';

export default function Loader() {
	return (
		<div>
			<FaPlaneDeparture className={cs.loader} size={28} />
		</div>
	);
}
