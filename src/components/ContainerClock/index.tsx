import { FC, useEffect, useState } from 'react';
import {
	getHoursIntoDegrees,
	getLocalTime,
	getSecAndMinIntoDegrees,
} from 'utils/api';
import { CircleProgressiveBar } from 'components/ProgressiveBar';

import Clock from './Clock';
import * as S from './index.styles';

const ContainerClock: FC = (): JSX.Element => {
	const [currentData, setCurrentData] = useState<any>({});
	const { hour_12_wolz, minutes, seconds } = currentData?.data?.datetime ?? {};
	const transformSecond = getSecAndMinIntoDegrees(+seconds);
	const transformMinute = getSecAndMinIntoDegrees(+minutes);
	const transformHours = getHoursIntoDegrees(+hour_12_wolz, +minutes);

	useEffect(() => {
		getLocalTime(setCurrentData);
	}, []);

	useEffect(() => {
		const timer = setInterval(() => getLocalTime(setCurrentData), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<S.Container>
			<Clock
				hours={transformHours}
				minutes={transformMinute}
				seconds={transformSecond}
			/>
			<CircleProgressiveBar transformHours={transformHours} />
		</S.Container>
	);
};

export default ContainerClock;
