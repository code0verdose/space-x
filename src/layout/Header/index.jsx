import React from 'react';
import { Container } from '../Container';
import s from './style.module.scss';

export const Header = () => {
	return (
		<header className={s.header}>
			<Container>
				<h1>Space-X Mission's</h1>
			</Container>
		</header>
	);
};
