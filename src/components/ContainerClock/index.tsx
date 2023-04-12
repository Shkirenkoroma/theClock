import { FC, useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';
import {
	IData,
	getHoursIntoDegrees,
	getLocalTime,
	getSecAndMinIntoDegrees,
} from 'utils/api';
import { CircleProgressiveBar } from 'components/ProgressiveBar';

import Clock from './Clock';
import * as S from './index.styles';

const ContainerClock: FC = (): JSX.Element => {
	const [currentData, setCurrentData] = useState<IData>();
	const { hour_12_wolz, minutes, seconds } = currentData?.data?.datetime ?? {};
	const transformSecond = getSecAndMinIntoDegrees(Number(seconds));
	const transformMinute = getSecAndMinIntoDegrees(Number(minutes));
	const transformHours = getHoursIntoDegrees(
		Number(hour_12_wolz),
		Number(minutes),
	);
	
	const getLocalData = async () => {
		const time = await getLocalTime();
		setCurrentData(time);
	};
	
	useEffect(() => {
		const timer = setInterval(() => getLocalData(), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<S.Container>
			{!seconds ? (
				<ClockLoader color="#36d7b7" size="150" loading={true} />
			) : (
				<>
					<Clock
						hours={transformHours}
						minutes={transformMinute}
						seconds={transformSecond}
					/>
					<CircleProgressiveBar hours={transformHours} />
				</>
			)}
		</S.Container>
	);
};

export default ContainerClock;
