import apiIndex from "../apis";
import EmployeeListInstance from "../instance";

export default async function deleteUser(id:string) {
  return await EmployeeListInstance.post<string>(apiIndex.deleteUser(id))
}