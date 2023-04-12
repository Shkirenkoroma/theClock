import { FC } from 'react';

import * as S from './index.styles';

interface IProps {
	hours: number;
	minutes: number;
	seconds: number;
}

const Clock: FC<IProps> = ({ hours, minutes, seconds }): JSX.Element => {
	return (
		<S.Container>
			<S.Hour style={{ transform: `rotate(${hours}deg)` }}></S.Hour>
			<S.Minute style={{ transform: `rotate(${minutes}deg)` }}></S.Minute>
			<S.Second style={{ transform: `rotate(${seconds}deg)` }}></S.Second>
		</S.Container>
	);
};

export default Clock;
