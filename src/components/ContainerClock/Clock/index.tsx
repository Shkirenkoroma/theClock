import { FC, useEffect, useState } from 'react';

import * as S from './index.styles';

const Clock: FC = (): JSX.Element => {
	const [degreesSecond, setDegreesSecond] = useState<number>(0);
	const [degreesMinute, setDegreesMinute] = useState<number>(0);
	const [degreesHours, setDegreesHours] = useState<number>(0);

	useEffect(() => {
		const timer = setInterval(() => setDegreesSecond((prev) => prev + 6), 1000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const timer = setInterval(
			() => setDegreesMinute((prev) => prev + 6),
			61000,
		);
		return () => clearInterval(timer);
	}, []);

	return (
		<S.Container>
			<S.Hour style={{ transform: `rotate(${degreesHours}deg)` }}></S.Hour>
			<S.Minute style={{ transform: `rotate(${degreesMinute}deg)` }}></S.Minute>
			<S.Second style={{ transform: `rotate(${degreesSecond}deg)` }}></S.Second>
		</S.Container>
	);
};

export default Clock;
