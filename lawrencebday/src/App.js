import logo from './logo.svg';
import './App.css';
import Navbar1 from './Navbar1';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from './MainPG/Main';
import Footer from './Footer';

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={Main} />
				<Footer />
			</Router>
		</div>

		// Image sources: https://www.pexels.com/photo/brown-and-black-coffee-beans-4815956/
		//                https://www.pexels.com/photo/food-wood-dawn-people-6280321/
	);
}

export default App;
