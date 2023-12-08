import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
import { SalesOrder } from "./GodownScreen/Screens/SalesOrder/SalesOrder";
import Aside from "./GodownScreen/Components/Aside/Aside";
import { SalesOrderDetail } from "./GodownScreen/Screens/SalesOrder/SalesOrderPages/SalesOrderDetail";
import { Purchase } from "./GodownScreen/Screens/Purchase/Purchase";
import { PurchaseDetail } from "./GodownScreen/Screens/Purchase/PurchasePages/PurchaseDetail";
import { PurchaseOrder } from "./GodownScreen/Screens/PurchaseOrder/PurchaseOrder";
import { PurchaseOrderDetail } from "./GodownScreen/Screens/PurchaseOrder/PurchaseOrderPages/PurchaseOrderDetail";
import { Selfs } from "./GodownScreen/Screens/Selfs/Selfs";
import { Aisle } from "./GodownScreen/Screens/Aisle/Aisle";
import { DashboardGodowns } from "./GodownScreen/Screens/Godowns/DashboardVouchers";
import LoginPage from "./Login/LoginPage/Loginpage";
import { Routes } from "react-router-dom/dist";
import NewAuthGuard from "./newAuth/AuthGuard";
import SelfAuth from "./newAuth/ShelfAuth";
import { Transfer } from "./GodownScreen/Screens/Transfer/Transfer";
import { Reconcilation } from "./GodownScreen/Screens/Reconcilattion/Reconcilation";
import { SalesOrderDetailsTab } from "./GodownScreen/Screens/SalesOrder/SalesOrderPages/Button Components/SalesOrderDetailsTab";
// import { GodownDashboard } from "./screens/Godown/GodownDashboard";

function App() {

	return (

		<div>
			{/* <AuthGuard> */}

			{/* <NewAuthGuard> */}
			<Routes>
				<Route path="/" element={<DashboardVouchers />}></Route>
				<Route path="/employer" element={<EmployerPage />}></Route>
				<Route path="/ratio" element={<RatioSelect />}></Route>
				<Route path="/manager" element={<ManagerDashboard />}></Route>
				<Route path="/godown" element={<Godown />}></Route>
			</Routes>
			{/* </NewAuthGuard> */}


			<Routes>
				<Route path="/login" element={<LoginPage />}></Route>
			</Routes>

			<SelfAuth>
				<Routes>
					<Route path="/sales/:id" element={<Aside><SalesOrder /></Aside>}></Route>
					<Route path="/selfs" element={<Aside><Selfs /></Aside>}></Route>
					<Route path="/aisles" element={<Aside><Aisle /></Aside>}></Route>
					<Route path="/purchase" element={<Aside><Purchase /></Aside>}></Route>
					<Route path="/purchaseDetail" element={<Aside><PurchaseDetail /></Aside>}></Route>
					<Route path="/purchaseorder/:id" element={<Aside><PurchaseOrder /></Aside>}></Route>
					<Route path="/PurchaseOrderDetail/:id" element={<Aside><PurchaseOrderDetail /></Aside>}></Route>
					<Route path="/GodownDashboard" element={<Aside><DashboardGodowns /></Aside>}></Route>
					<Route path="/transfer" element={<Aside><Transfer /></Aside>}></Route>
					<Route path="/reconcilation" element={<Aside><Reconcilation /></Aside>}></Route>
					<Route path="/salesdetail/:id" element={<Aside><SalesOrderDetail /></Aside>}></Route>
				</Routes>
			</SelfAuth>

			<Toaster
				position="top-center"
				reverseOrder={false}
			/>
			{/* </AuthGuard> */}
		</div>

	);
}

export default App;
