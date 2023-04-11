import { GlobalStyle } from 'components/ContainerClock/Clock/index.styles';

import ContainerClock from 'components/ContainerClock';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<GlobalStyle />
      <ContainerClock/>
		</div>
	);
};

export default App;
