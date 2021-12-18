import './App.scss';
import { SplitScreen } from './components/SplitScreen';

const LeftHandComponent = ({ text = "Menu" }) => {
	return <p>{text}</p>
};

const RightHandComponent = ({ text = "Content" }) => {
	return <p>{text}</p>
};

function App() {
	return (
		<div className="App">
			<SplitScreen
				leftWeight={1}
				rightWeight={4}>
				<LeftHandComponent />
				<RightHandComponent />
			</SplitScreen>
		</div>
	);
}

export default App;