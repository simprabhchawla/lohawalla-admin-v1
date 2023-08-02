const apiIndex = {
	getPendingEmployeeListing: "getPendingEmployeeListing",
	updateUserVerification: (id: string) => `updateUserVerification/${id}`,
	deleteUser: (id: string) => `deleteUser/${id}`,
	getVerifiedUserList: "admin/pages/employeeListing/getVerifiedEmployee",
};

export default apiIndex;
