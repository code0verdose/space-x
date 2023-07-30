import React from 'react';
import { useGetAllQuery } from '../store';
import './styles/global.scss';
import { MissionArticle } from '../components/MissionArticle';
import { Container } from '../layout/Container';
import { Layout } from '../layout/Layout';
import { Grid } from '../layout/Grid';
import { Spinner } from '../ui/Spinner';

export const App = () => {
	const { data = [], isLoading } = useGetAllQuery();

	const lanuchesCards = data.map((mission) => (
		<MissionArticle
			key={mission.id}
			// missionDesc={mission.details ?? 'details not found'}
			// missionName={mission.name}
			// missionDate={new Date(mission.date_utc).toLocaleString('ru-RU')}
			data={{...mission}}
		/>
	));

	return (
		<Layout>
			<Container>
				<Grid>{isLoading ? <Spinner/> : lanuchesCards}</Grid>
			</Container>
		</Layout>
	);
};
