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
function convertToQueryString(data: any) {
	let queryStr = '';
	for (let key in data) {
	  if (data.hasOwnProperty(key) && data[key] !== '' && data[key] !== null) {
		if (queryStr !== '') {
		  queryStr += '&';
		}
		queryStr += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
	  }
	}
	return queryStr;
  }

export default async function getVerifiedUserList(filterdata:any) {
	const data=convertToQueryString(filterdata)
	console.log("dddddd",data)
	return AxiosFactory.createInstance().get<VerifiedEmployeeListing[]>(
		
		apiIndex.getVerifiedUserList(data)
	);
}
