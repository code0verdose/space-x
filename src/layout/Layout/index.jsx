import React from 'react';
import {Container} from '../Container';

export const Layout = ({children}) => {

	return (
		<>
			<header>
				<Container>
					<h1>Space-X Mission's</h1>
				</Container>
			</header>
			<main>
				{children}
			</main>
			<footer>
				<Container>
          Made by <a href="https://github.com/code0verdose">codeoverdose</a>
				</Container>
			</footer>
		</>
	);
};
