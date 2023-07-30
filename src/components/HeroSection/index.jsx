import React from 'react';
import s from './style.module.scss';
import { MissionArticle } from '../MissionArticle';
import { Container } from '../../layout/Container';
import { Grid } from '../../layout/Grid';
import { Spinner } from '../../ui/Spinner';
import { useGetAllQuery } from '../../store';

export const HeroSection = () => {
	const { data = [], isLoading } = useGetAllQuery();

	const lanuchesCards = data.map((mission) => (
		<MissionArticle key={mission.id} data={{ ...mission }} />
	));

	return (
		<section className={s.hero}>
			<Container>
				<Grid>{isLoading ? <Spinner /> : lanuchesCards}</Grid>
			</Container>
		</section>
	);
};
