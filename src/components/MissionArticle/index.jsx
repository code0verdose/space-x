import s from './style.module.scss';
import React from 'react';

export const MissionArticle = ({ data }) => {
	const { date_utc, name, details, rocket } = data;
	const missionDate = new Date(date_utc).toLocaleString('ru-RU');

	return (
		<article className={s.item}>
			<div className={s.item__img_wrapper}>
				<img
					className={s.item__img}
					src="https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg"
					alt="Rocket"
				/>
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
