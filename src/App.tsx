import { FC } from 'react';
import { GlobalStyle } from 'components/ContainerClock/Clock/index.styles';
import ContainerClock from 'components/ContainerClock';

import * as S from './App.styles';


const App: FC = (): JSX.Element => {
	return (
		<>
			<S.Title style={{ textAlign: 'center' }}>Personal time manager</S.Title>
			<GlobalStyle />
			<ContainerClock />
		</>
	);
};

export default App;
