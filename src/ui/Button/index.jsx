import React from 'react';
import s from './style.module.scss';

export const Button = ({ children, handler, className }) => {
	const rootClasses = [s.btn, className];

	return (
		<button className={rootClasses.join(' ')} onClick={() => handler()}>
			{children}
		</button>
	);
};
