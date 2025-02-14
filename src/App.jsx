import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/LoginComponent";

function App() {
	return (
    // gvk
		<div>
			<Routes>
				<Route path="/" element={<LoginComponent />} />
			</Routes>
		</div>
	);
}

export default App;
