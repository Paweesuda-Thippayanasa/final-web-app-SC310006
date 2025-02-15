import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getFirestore } from "firebase/firestore";
import LoginPage from "./components/LoginComponent";
import HomePage from "./components/HomePage";
import EditProfilePage from "./components/EditProfilePage";
import AddCourse from "./components/AddCourse";

function App() {

	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/edit-profile" element={<EditProfilePage/>} />
				<Route path="/add-course" element={<AddCourse/>} />
				
			</Routes>
		</div>
	);
}

export default App;
