import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getFirestore } from "firebase/firestore";
import LoginPage from "./components/LoginComponent";
import HomePage from "./components/HomePage";

function App() {

	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
