import React from 'react';
import s from './style.module.scss';
import { MissionArticle } from '../MissionArticle';
import { Container } from '../../layout/Container';
import { Grid } from '../../layout/Grid';
import { Spinner } from '../../ui/Spinner';
import { useGetAllQuery } from '../../store';
import { useSelector } from 'react-redux';

export const ContentSection = () => {
	const { data = [], isLoading, isError } = useGetAllQuery();
	const sortByDate = useSelector((state) => state.missions.sortByDate);

	const sortedData = React.useMemo(() => {
		if (sortByDate === 'asc') {
			return [...data].sort(
				(a, b) => new Date(a.date_utc) - new Date(b.date_utc)
			);
		} else {
			return [...data].sort(
				(a, b) => new Date(b.date_utc) - new Date(a.date_utc)
			);
		}
	}, [data, sortByDate]);

	const renderCards = () => {
		return sortedData.map((mission) => (
			<MissionArticle key={mission.id} missionData={{ ...mission }} />
		));
	};

	if (isLoading) {
		return (
			<section className={s.content}>
				<Container>
					<div className={s.content__center}>
						<Spinner />
					</div>
				</Container>
			</section>
		);
	}

	if (isError) {
		return (
			<section className={s.content}>
				<Container>
					<h2>Ошибка при загрузке данных</h2>
				</Container>
			</section>
		);
	}

	return (
		<section className={s.content}>
			<Container>
				<Grid>{renderCards()}</Grid>
			</Container>
		</section>
	);
};
