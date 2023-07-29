import React from 'react';
import {useGetAllQuery} from "../store";
import './global/styles/global.scss'

export const App = () => {

	const {data = [], isLoading} = useGetAllQuery()

	if (isLoading) return <h1>Loading...</h1>

	console.log(data)

	return (
		<>
			<h1>Hiiii</h1>

		</>
	);
};
