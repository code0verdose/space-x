import React from 'react';
import s from './style.module.scss';
import { Icon } from '../../ui/Icon';
import { FilterMenu } from '../FilterMenu';

export const FilterPanel = () => {
	return (
		<aside className={s.panel}>
			<FilterMenu/>
		</aside>
	);
};
