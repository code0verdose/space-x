import React from 'react';
import { Icon } from '../../ui/Icon';
import { Button } from '../../ui/Button';
import s from './style.module.scss';

export const FilterMenu = () => {
	return (
		<ul className={s.menu}>
			<li>
				<Button className={s.menu__btn}>
					<Icon variant="calendar" />
				</Button>
			</li>
			<li>
				<Button className={s.menu__btn}>
					<Icon variant="orderFromLower" />
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
