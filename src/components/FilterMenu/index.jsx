import React from 'react';
import { Icon } from '../../ui/Icon';
import { Button } from '../../ui/Button';
import s from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSortByDate } from '../../store/slices/missionsSlice';

export const FilterMenu = () => {
	const dispatch = useDispatch();

	const toggleOrder = () => {
		dispatch(toggleSortByDate());
	};

	const dateOrderState = useSelector((state) => state.missions.sortByDate);
	const orderFromLower = dateOrderState === 'asc';

	return (
		<ul className={s.menu}>
			<li>
				<Button className={s.menu__btn}>
					<Icon variant="calendar" />
				</Button>
			</li>
			<li>
				<Button handler={toggleOrder} className={s.menu__btn}>
					<Icon
						variant={orderFromLower ? 'orderFromLower' : 'orderFromUpper'}
					/>
				</Button>
			</li>
			<li>
				<Button className={s.menu__btn}>
					<Icon variant="sun" />
				</Button>
			</li>
		</ul>
	);
};
