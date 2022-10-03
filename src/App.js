import { useEffect } from 'react';
import './App.css';
//----NOT SECURE------
const API_URL = 'http://www.omdbapi.com?apikey=15b1dca3';
//--------------------

//App Object
function App() {
	//-----Fetch-----
	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		console.log(data.Search); //JSON results
	};

	//-----Search function-----
	useEffect(() => {
		searchMovies('Watchmen');
	}, []);

	//-----RETURN-----
	return (
		<>
			<h1>App</h1>
		</>
	);
}

//-----export-----
export default App;
