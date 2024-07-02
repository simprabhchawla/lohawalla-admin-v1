import apiIndex from "../apis";
import AuthInstance from "../instance";

export default async function logout() {
	AuthInstance.get(apiIndex.logout);
}
