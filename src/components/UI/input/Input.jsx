import React from 'react';
import cs from './input.module.css';

export const Input = ({
	value,
	onChangeValue,
	placeholder = '',
	error,
	...props
}) => {
	return (
		<input
			{...props}
			className={error ? [cs.field, cs.error].join(' ') : cs.field}
			placeholder={placeholder}
			value={value}
			onChange={onChangeValue}
		/>
	);
};
