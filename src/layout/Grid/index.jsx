import React from 'react';
import s from './style.module.scss';

export const Grid = ({children}) => {

	return (
		<div className={s.grid}>{children}</div>
	);
};
