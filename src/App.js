import Navbar from './components/Navbar';
import Header from './components/Header';
import Header2 from './components/Header2';
import Services from './components/Services';
import Result from './components/Result';
import Response from './components/Response';
import Price from './components/Price';
import Question from './components/Question';
import Reason from './components/Reason';
import Footer from './components/Footer';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import Notfound from './components/Notfound';
import Custom from './components/Custom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar />
							<Header />
							<Header2 />
							<Services />
							<Result />
							<Response />
							<Price />
							<Question />
							<Reason />
							<Footer />
						</>
					}
				/>
				<Route
					path="payment/:id"
					element={
						<>
							<Navbar to="payment" />
							<Payment />
							<Footer to="payment" />
						</>
					}
				/>
				<Route
					path="confirmation/:ref"
					element={
						<>
							<Navbar to="payment" />
							<Confirmation />
							<Footer to="payment" />
						</>
					}
				/>
				<Route
					path="*"
					element={
						<>
							<Navbar to="payment" />
							<Notfound />
						</>
					}
				/>
				<Route
					path="custom"
					element={
						<>
							<Navbar to="payment" />
							<Custom />
							<Footer to="payment" />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
