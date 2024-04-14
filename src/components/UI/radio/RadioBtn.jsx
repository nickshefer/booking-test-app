import React from 'react';
import cs from './radioBtn.module.css';

export default function ({ quantity, label, name, handleChange, checked }) {
	return (
		<div className={cs.block}>
			<input
				name={name}
				className={cs.input}
				id={quantity}
				type='radio'
				onChange={() => handleChange(quantity)}
				value={quantity}
				checked={checked}
			/>
			<label className={cs.label} htmlFor={quantity}>
				{label}
			</label>
		</div>
	);
}
