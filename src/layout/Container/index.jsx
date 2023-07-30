import s from './style.module.scss';
import React from 'react';

export const Container = ({ children }) => {
	return <div className={s.container}>{children}</div>;
};
