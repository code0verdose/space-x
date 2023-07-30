import React from 'react';
import './styles/global.scss';
import { Layout } from '../layout/Layout';
import { HeroSection } from '../components/HeroSection';


export const App = () => {


	return (
		<Layout>
			<HeroSection/>
		</Layout>
	);
};
