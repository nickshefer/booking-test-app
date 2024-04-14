import React from 'react';
import cs from './inputMenu.module.css';

export const InputMenu = ({ data, handleClick }) => {
	return (
		<ul className={cs.menu}>
			{data.map(elem => (
				<li
					className={cs.listItem}
					onClick={() => handleClick(elem)}
					key={elem.id}
				>{`${elem.name}, ${elem.code}`}</li>
			))}
		</ul>
	);
};
