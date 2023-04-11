import { GlobalStyle } from 'components/ContainerClock/Clock/index.styles';

import Clock from './components/ContainerClock/Clock';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<GlobalStyle />
			<Clock />
		</div>
	);
};

export default App;
