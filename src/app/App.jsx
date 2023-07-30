import React from 'react';
import './styles/global.scss';
import { Layout } from '../layout/Layout';
import { ContentSection } from '../components/ContentSection';
import { FilterPanel } from '../components/FilterPanel';


export const App = () => {


	return (
		<Layout>
			<FilterPanel/>
			<ContentSection/>
		</Layout>
	);
};
