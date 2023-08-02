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

export default async function fetchPendingEmployeeList(){
  return await EmployeeListInstance.get<PendingEmployeeListing[]>(apiIndex.getPendingEmployeeListing)
}

