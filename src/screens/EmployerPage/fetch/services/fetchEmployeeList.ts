import apiIndex from "../apis";
import EmployeeListInstance from "../instance";


enum RoleIndex {
	CUSTOMER = "CUSTOMER",
	ADMIN = "ADMIN",
	PURCHASER = "PURCHASER",
	PURCHASER_UNVERIFIED = "PURCHASER_UNVERIFIED",
	SALES = "SALES",
	SALES_UNVERIFIED = "SALES_UNVERIFIED",
	UNKNOWN = "UNKNOWN",
}
export interface PendingEmployeeListing{
  id: string,
  name: string,
  aadhar: string,
  role: RoleIndex,
  dateOfCreation: string,
  phoneNumber: string,
  profile: string,
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


export default async function fetchPendingEmployeeList(filterdata:any){
  const data=convertToQueryString(filterdata)
  return await EmployeeListInstance.get<PendingEmployeeListing[]>(apiIndex.getPendingEmployeeListing(data))
}

