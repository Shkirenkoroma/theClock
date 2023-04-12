import styled from 'styled-components';

export const Container = styled.div``;
export const Circle = styled.circle`
	fill: none;
	stroke: #343232;
`;

export const CircleProgress = styled.circle`
	fill: none;
	stroke: #ffc600;
	stroke-linecap: round;
	stroke-linejoin: round;
`;

export const SVGContainer = styled.svg`
	position: absolute;
	top: 48px;
	left: -75px;
	width: 500px;
	height: 405px;

	@media (max-width: 560px) {
		position: absolute;
		top: 118px;
		left: -30px;
		width: 300px;
		height: 265px;
	}
`;
