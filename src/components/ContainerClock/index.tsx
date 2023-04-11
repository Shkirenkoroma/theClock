import { useEffect } from 'react';
import axios from 'axios';

import Clock from './Clock';
import * as S from './index.styles';

const ContainerClock = () => {
	useEffect(() => {
		const latitudeBlr = 53.31;
		const longitudeBlr = 28.02;

		const response = axios.get(
			`https://www.timeapi.io/api/Time/current/coordinate?latitude=${latitudeBlr}&longitude=${longitudeBlr}`,
		);
		console.log('response', response);
	}, []);

	return (
		<S.Container>
			<Clock />
		</S.Container>
	);
};

export default ContainerClock;
