import React, { useContext, useEffect, useState } from "react";
import UnAuthPage from "./components/UnAuthPage/UnAuthPage";
import RoleIndex from "@src/modules/types/Roles.enum";
import { NameIdPair } from "@src/modules/backendTypes/change/NameIdPair";
import AsyncStateFactory from "@src/modules/StateManagement/AsyncState/AsyncStateFactory";
import AuthActions from "./actions/AuthActions";
import LoginPage from "@src/Login/LoginPage/Loginpage";
import { DashboardVouchers } from "@src/screens/Vouchers/DashboardVouchers";
// import Login from "@src/screens/Login/Login";

//* interfaces
interface Props {
	children: React.ReactNode;
}
interface AuthProps {
	user: NameIdPair;
	action: {
		logOut: () => void;
	};
	loginData: LoginData;
}
interface LoginData {
	success: boolean;
	userId: string;
	createdAt: number;
	maxAge: number;
	role: RoleIndex;
	token: string;
	name: string;
	email: string;
	phoneNumber: string;
	image: string;
}

export interface State {
	loginData: LoginData | null;
	loading: {
		getIsLoggedIn: AsyncState;
		triggerLogout: AsyncState;
		logout: AsyncState;
	};
}

//* context
const AuthGuardContext = React.createContext<AuthProps>({} as AuthProps);
export const useAuthGuardContext = () => useContext(AuthGuardContext);

export default function AuthGuard(props: Props) {
	const [state, setState] = useState<State>({
		loginData: null,
		loading: {
			getIsLoggedIn: AsyncStateFactory(),
			triggerLogout: AsyncStateFactory(),
			logout: AsyncStateFactory(),
		},
	});

	const data = localStorage.getItem("userData")
	// console.log(data)
	const authActions = new AuthActions(state, setState);

	useEffect(() => {
		authActions.isLoggedIn();
	}, []);

	if (state.loading.getIsLoggedIn.status === "initialized") {
		return <></>;
	} else if (
		state.loginData === null ||
		state.loginData.role !== RoleIndex.ADMIN
	) {
		return (
			// <UnAuthPage
			// 	login={() => {
			// 		authActions.login();
			// 	}}
			// />
			<LoginPage/>
		);
	} else {
		return (
			<AuthGuardContext.Provider
				value={{
					user: {
						userId: state.loginData.userId,
						name: state.loginData.name,
					},
					loginData: state.loginData,
					action: {
						logOut: () => {
							authActions.logout();
						},
					},
				}}
			>
				{props.children}

				{/* <DashboardVouchers /> */}
			</AuthGuardContext.Provider>
		);
	}

	return <></>;
}
