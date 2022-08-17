import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Header from 'components/Header';
import PositionsProvider from 'context/Positions';

export default function AppRouter() {
	return (
		<Router>
			<Header />
			<PositionsProvider>
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="/job/:id" element={<Detail />} />
				</Routes>
			</PositionsProvider>
		</Router>
	)
}
