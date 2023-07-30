import React from 'react';
import { Container } from '../Container';
import { Header } from '../Header';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<footer>
				<Container>
					Made by <a href="https://github.com/code0verdose">codeoverdose</a>
				</Container>
			</footer>
		</>
	);
};
