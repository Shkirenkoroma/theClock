import { FC } from 'react';
import { GlobalStyle } from 'components/ContainerClock/Clock/index.styles';

import ContainerClock from 'components/ContainerClock';

const App: FC = (): JSX.Element => {
	return (
		<>
			<GlobalStyle />
			<ContainerClock />
		</>
	);
};

export default App;
