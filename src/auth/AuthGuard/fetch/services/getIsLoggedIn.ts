
import AuthInstance from "../instance";
import apiIndex from "../apis";
import RoleIndex from "@src/modules/types/Roles.enum";

interface LoginData {
	token: string;
	loginData: {
		success: boolean;
		userId: string;
		createdAt: number;
		maxAge: number;
		role: RoleIndex;
		name: string;
		email: string;
		phoneNumber: string;
		image: string;
	};
}

export default async function getIsLoggedIn() {
	return AuthInstance.post<LoginData>(apiIndex.isLoggedIn);
}
