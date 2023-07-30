import { useGetImageByIdQuery } from '../../store';
import { Spinner } from '../../ui/Spinner';
import s from './style.module.scss';
import React from 'react';

export const MissionArticle = ({ missionData }) => {
	const { date_utc, name, details, rocket } = missionData;
	const { data = {}, isLoading } = useGetImageByIdQuery(rocket);

	const missionDate = new Date(date_utc).toLocaleString('ru-RU');

	return (
		<article className={s.item}>
			<div className={s.item__img_wrapper}>
				{isLoading ? (
					<Spinner />
				) : (
					<img
						className={s.item__img}
						src={`${data.flickr_images[0]}`}
						alt={`${data.name}`}
					/>
				)}
			</div>
			<div className={s.item__info}>
				<div className={s.item__info_head}>
					<time className={s.item__date}>{missionDate}</time>
					<h3 className={s.item__name}>{name}</h3>
				</div>
				<div className={s.item__desc_inner}>
					<p className={s.item__desc}>{details ?? 'Not included'}</p>
				</div>
			</div>
		</article>
	);
};
