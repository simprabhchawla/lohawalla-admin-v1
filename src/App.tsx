import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import logo from "./logo.svg";
import "./App.css";
import EmployerPage from "./screens/EmployerPage/EmployerPage";
import Dashboard from "./screens/Dashboard/Dashboard";
import AuthGuard from "./auth/AuthGuard/AuthGuard";
import { DashboardVouchers } from "./screens/Vouchers/DashboardVouchers";
import { RatioSelect } from "./screens/RatioSelect/ratioSelect";
import { ManagerDashboard } from "./screens/ManagerDashboard/ManagerDashboard";
import { Godown } from "./screens/Godown/Godown";
// import { GodownDashboard } from "./screens/Godown/GodownDashboard";

function App() {
	return (

		//<AuthGuard>
			<div>
				<Routes>
					<Route path="/" element={<DashboardVouchers />}></Route>
					<Route path="/employer" element={<EmployerPage />}></Route>
					<Route path="/ratio" element={<RatioSelect />}></Route>
					<Route path="/manager" element={<ManagerDashboard />}></Route>
					<Route path="/godown" element={<Godown />}></Route>
				</Routes>
				<Toaster
					position="top-center"
					reverseOrder={false}
				/>
			</div>
		//</AuthGuard>

	);
}

export default App;
