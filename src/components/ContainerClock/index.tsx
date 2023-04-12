import { FC, useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';
import {
	getHoursIntoDegrees,
	getLocalTime,
	getSecAndMinIntoDegrees,
} from 'api';
import { CircleProgressiveBar } from 'components/ProgressiveBar';
import Clock from './Clock';
import * as S from './index.styles';

const ContainerClock: FC = (): JSX.Element => {
	const [date, setDate] = useState<Date>();
	const transformSecond = getSecAndMinIntoDegrees(date?.getSeconds());
	const transformMinute = getSecAndMinIntoDegrees(date?.getMinutes());
	const transformHours = getHoursIntoDegrees(
		date?.getHours(),
		date?.getMinutes(),
	);

	useEffect(() => {
		const getLocalData = async () => {
			const time = await getLocalTime();
			const currentDate = time!.data.datetime.date_time;
			setDate(new Date(currentDate));
		};
		getLocalData();
	}, []);

	useEffect(() => {
		if (date) {
			const timer = setTimeout(() => {
				const newDate = new Date(date);
				newDate.setSeconds(newDate.getSeconds() + 1);
				setDate(newDate);
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [date]);

	return (
		<S.Container>
			{!date ? (
				<ClockLoader color="#36d7b7" size="150" loading={true} />
			) : (
				<>
					<Clock
						hours={transformHours}
						minutes={transformMinute}
						seconds={transformSecond}
					/>
					<CircleProgressiveBar hours={transformHours!} />
				</>
			)}
		</S.Container>
	);
};

export default ContainerClock;
