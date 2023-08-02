import AxiosFactory from "@src/modules/axios/AxiosFactory";
import RoleIndex from "@src/modules/types/Roles.enum";
import apiIndex from "../apis";

interface VerifiedEmployeeListing {
	id: string;
	email: string;
	name: string;
	aadhar: string;
	role: RoleIndex;
	dateOfCreation: string;
	phoneNumber: string;
	profile: string;
}

export default async function getVerifiedUserList() {
	return AxiosFactory.createInstance().get<VerifiedEmployeeListing[]>(
		apiIndex.getVerifiedUserList
	);
}
