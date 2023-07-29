import React, { useId } from 'react';
import { useGetAllQuery } from '../store';
import './styles/global.scss';
import { MissionArticle } from '../components/MissionArticle';
import { Container } from '../layout/Container';
import { Layout } from '../layout/Layout';
import { Grid } from '../layout/Grid';

export const App = () => {
	const { data = [], isLoading } = useGetAllQuery();

	return (
		<Layout>
			<Container>
				<Grid>
					{data.map((mission) => (
						<MissionArticle
							key={mission.id}
							description={mission.details ?? 'details not found'}
							name={mission.name}
							date={new Date(mission.date_utc).toLocaleString('ru-RU')}
						/>
					))}
				</Grid>
			</Container>
		</Layout>
	);
};
