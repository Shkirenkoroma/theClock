import { FC } from 'react';
import './style.css';
export const CircleProgressiveBar: FC<any> = ({
	transformHours,
}): JSX.Element => {
	const circleWidth = 200;
	const radius = 85;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - (dashArray * transformHours) / 360;

	return (
		<div className="container">
			<svg
				width={circleWidth}
				height={circleWidth}
				viewBox={`0 0 ${circleWidth} ${circleWidth}`}
			>
				<circle
					cx={circleWidth / 2}
					cy={circleWidth / 2}
					strokeWidth="4px"
					r={radius}
					className="circle-background"
				/>

				<circle
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
			</svg>
		</div>
	);
};
