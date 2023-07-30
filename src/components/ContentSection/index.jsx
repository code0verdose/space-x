import React, { useEffect } from 'react';
import s from './style.module.scss';
import { MissionArticle } from '../MissionArticle';
import { Container } from '../../layout/Container';
import { Grid } from '../../layout/Grid';
import { Spinner } from '../../ui/Spinner';
import { useGetByDateRangeMutation } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setMissionsData } from '../../store/slices/missionsSlice';

export const ContentSection = () => {
	const dispatch = useDispatch();
	const [getByDateRange, { data, isLoading, isError }] =
		useGetByDateRangeMutation();
	const sortByDate = useSelector((state) => state.missions.sortByDate);

	const showSuccessfulMissions = useSelector(
		(state) => state.missions.showSuccessfulMissions
	);
	const dateRange = useSelector((state) => state.missions.dateRange);
	const perRangeData = useSelector((state) => state.missions.data);

	const getDataByRange = async ({ dateStart, dateEnd }) => {
		getByDateRange({
			query: {
				date_utc: {
					$gte: dateStart,
					$lte: dateEnd,
				},
			},
			options: {
				limit: 10000,
			},
		});
	};

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
		console.log(filteredData.length);
		return filteredData.map((mission) => (
			<MissionArticle key={mission.id} missionData={{ ...mission }} />
		));
	};

	useEffect(() => {
		getDataByRange(dateRange);
	}, [dateRange]);

	useEffect(() => {
		if (data) {
			dispatch(setMissionsData(data.docs));
		}
	}, [data, dispatch]);

	console.log(showSuccessfulMissions);

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
