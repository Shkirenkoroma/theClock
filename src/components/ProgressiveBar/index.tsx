import { FC } from 'react';
import * as S from './index.styles.jsx';

interface ICircleProgressiveBarProps {
	hours: number;
}

export const CircleProgressiveBar: FC<ICircleProgressiveBarProps> = ({
	hours,
}): JSX.Element => {
	const circleWidth = 200;
	const radius = 85;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - (dashArray * hours) / 360;

	return (
		<S.Container>
			<S.SVGContainer
				width={circleWidth}
				height={circleWidth}
				viewBox={`0 0 ${circleWidth} ${circleWidth}`}
			>
				<S.Circle
					cx={circleWidth / 2}
					cy={circleWidth / 2}
					strokeWidth="4px"
					r={radius}
					className="circle-background"
				/>
				<S.CircleProgress
					cx={circleWidth / 2}
					cy={circleWidth / 2}
					strokeWidth="4px"
					r={radius}
					className="circle-progress"
					style={{
						strokeDasharray: `${dashArray}`,
						strokeDashoffset: `${dashOffset}`,
					}}
					transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
				/>
			</S.SVGContainer>
		</S.Container>
	);
};
