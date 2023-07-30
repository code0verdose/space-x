import React from 'react';
import s from './style.module.scss';
import { MissionArticle } from '../MissionArticle';
import { Container } from '../../layout/Container';
import { Grid } from '../../layout/Grid';
import { Spinner } from '../../ui/Spinner';
import { useGetAllQuery } from '../../store';

export const ContentSection = () => {
	const { data = [], isLoading } = useGetAllQuery();

	const lanuchesCards = data.map((mission) => (
		<MissionArticle key={mission.id} missionData={{ ...mission }} />
	));

	return (
		<section className={s.content}>
			<Container>
				<Grid>{isLoading ? <Spinner /> : lanuchesCards}</Grid>
			</Container>
		</section>
	);
};
