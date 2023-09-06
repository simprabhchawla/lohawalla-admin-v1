import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import logo from "./logo.svg";
import "./App.css";
import EmployerPage from "./screens/EmployerPage/EmployerPage";
import Dashboard from "./screens/Dashboard/Dashboard";
import AuthGuard from "./auth/AuthGuard/AuthGuard";

function App() {
	return (

		// <AuthGuard>
			<div>
				<Routes>
					<Route path="/" element={<Dashboard />}></Route>
					<Route path="/employer" element={<EmployerPage />}></Route>
				</Routes>
				<Toaster
					position="top-center"
					reverseOrder={false}
				/>
			</div>
		// {/* </AuthGuard> */}

	);
}

export default App;
