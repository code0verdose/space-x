import React from 'react';
import s from './style.module.scss';

export const Grid = ({ children, className }) => {
	const rootClasses = [s.grid, className];

	return <div className={rootClasses.join(' ')}>{children}</div>;
};
