import React, { useEffect } from 'react';
import s from './style.module.scss';
import { MissionArticle } from '../MissionArticle';
import { Container } from '../../layout/Container';
import { Grid } from '../../layout/Grid';
import { Spinner } from '../../ui/Spinner';
import { useGetAllQuery, useGetByDateRangeMutation } from '../../store';
import { useSelector } from 'react-redux';

export const ContentSection = () => {
	// const { data = [], isLoading, isError } = useGetAllQuery();
	const [getByDateRange, { data, isLoading, isError }] =
		useGetByDateRangeMutation();

	const perRangeData = data ? data.docs : [];

	const getDataByRange = async (gte, lte) => {
		getByDateRange({
			query: {
				date_utc: {
					$gte: '2015-01-01T00:00:00.000Z',
					$lte: '2019-01-02T00:00:00.000Z',
				},
			},
		});
	};

	useEffect(() => {
		getDataByRange();
	}, []);

	const sortByDate = useSelector((state) => state.missions.sortByDate);
	const showSuccessfulMissions = useSelector(
		(state) => state.missions.showSuccessfulMissions
	);

	const sortedData = React.useMemo(() => {
		if (sortByDate === 'asc') {
			return [...perRangeData].sort(
				(a, b) => new Date(a.date_utc) - new Date(b.date_utc)
			);
		} else {
			return [...perRangeData].sort(
				(a, b) => new Date(b.date_utc) - new Date(a.date_utc)
			);
		}
	}, [perRangeData, sortByDate]);

	const filteredData = React.useMemo(() => {
		if (showSuccessfulMissions) {
			return sortedData.filter((mission) => mission.success === true);
		}
		return sortedData;
	}, [sortedData, showSuccessfulMissions]);

	const renderCards = () => {
		return filteredData.map((mission) => (
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
