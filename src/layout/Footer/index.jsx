import React from 'react';
import s from './style.module.scss';
import { Container } from '../Container';

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<Container>
				<strong className={s.footer__text}>
					Made by{' '}
					<a className={s.footer__link} href="https://github.com/code0verdose">
						codeoverdose❤️
					</a>
				</strong>
			</Container>
		</footer>
	);
};
