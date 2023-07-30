import React from 'react';
import s from './style.module.scss';
import { FilterMenu } from '../FilterMenu';

export const FilterPanel = () => {
	return (
		<aside className={s.panel}>
			<FilterMenu />
		</aside>
	);
};
