import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import backgroundImage from 'img/backgroundclock.png';

export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #091921;
}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 350px;
	height: 350px;
	border-radius: 50%;
	background: url(${backgroundImage}),
		radial-gradient(
			circle,
			rgb(37, 73, 90) 0%,
			rgb(25, 48, 60) 11%,
			rgba(9, 25, 33, 1) 38%
		);
	background-size: cover;
	box-shadow: 0 -15px 15px rgba(134, 134, 134, 0.35), inset 0 -15px 15px #191919,
		0 15px 15px rgba(134, 134, 134, 0.35), inset 0 15px 15px #191919;
	:before {
		content: '';
		position: absolute;
		z-index: 999;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: #ffffff;
	}
`;

export const Hour = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	width: 160px;
	height: 160px;
	border-radius: 50%;
	:before {
		content: '';
		position: absolute;
		z-index: 10;
		width: 8px;
		height: 80px;
		border-radius: 6px 6px 0 0;
		background-color: #ffc600;
	}
`;

export const Minute = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	width: 190px;
	height: 190px;
	border-radius: 50%;
	:before {
		content: '';
		position: absolute;
		z-index: 11;
		width: 4px;
		height: 90px;
		border-radius: 6px 6px 0 0;
		background-color: #fff;
	}
`;

export const Second = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	width: 230px;
	height: 230px;
	border-radius: 50%;
	:before {
		content: '';
		position: absolute;
		z-index: 12;
		width: 2px;
		height: 150px;
		border-radius: 6px 6px 0 0;
		background-color: #fff;
	}
`;
