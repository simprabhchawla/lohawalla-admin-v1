import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import logo from "./logo.svg";
import "./App.css";
import EmployerPage from "./screens/EmployerPage/EmployerPage";
import { DashboardVouchers } from "./screens/Vouchers/DashboardVouchers";
import { RatioSelect } from "./screens/RatioSelect/ratioSelect";
import { ManagerDashboard } from "./screens/ManagerDashboard/ManagerDashboard";
import { Godown } from "./screens/Godown/Godown";
import LoginPage from "./Login/LoginPage/Loginpage";
import { Routes } from "react-router-dom/dist";
import AuthGuard from "./auth/AuthGuard/AuthGuard";
// import { GodownDashboard } from "./screens/Godown/GodownDashboard";

function App() {

	return (

		<div>
			<AuthGuard>

			<Routes>
				<Route path="/" element={<DashboardVouchers />}></Route>
				<Route path="/employer" element={<EmployerPage />}></Route>
				<Route path="/ratio" element={<RatioSelect />}></Route>
				<Route path="/manager" element={<ManagerDashboard />}></Route>
				<Route path="/godown" element={<Godown />}></Route>
			</Routes>


			{/* <Routes>
				<Route path="/login" element={<LoginPage />}></Route>
			</Routes> */}


			<Toaster
				position="top-center"
				reverseOrder={false}
			/>
			</AuthGuard>
		</div>

	);
}

export default App;
