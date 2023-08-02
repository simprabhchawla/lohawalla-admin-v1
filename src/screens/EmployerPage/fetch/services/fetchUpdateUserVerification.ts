import apiIndex from "../apis";
import EmployeeListInstance from "../instance";

export default async function updateUserVerification(id:string) {
  return await EmployeeListInstance.post<string>(apiIndex.updateUserVerification(id))
}