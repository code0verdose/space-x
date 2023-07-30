import React from 'react';
import s from './style.module.scss';

import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className={s.main}>{children}</main>
			<Footer />
		</>
	);
};
