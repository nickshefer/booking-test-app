import React from 'react';
import cs from './button.module.css';
import Loader from '../loader/Loader';

export const Button = ({ children, isLoading, ...props }) => {
	return (
		<button className={cs.btn} {...props}>
			{isLoading ? <Loader /> : children}
		</button>
	);
};
