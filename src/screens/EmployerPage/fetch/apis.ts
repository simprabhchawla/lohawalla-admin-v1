const apiIndex = {
	getPendingEmployeeListing:(data:any)=>`getPendingEmployeeListing?${data}`,
	updateUserVerification: (id: string) => `updateUserVerification/${id}`,
	deleteUser: (id: string) => `deleteUser/${id}`,
	getVerifiedUserList:(data:any)=>`admin/pages/employeeListing/getVerifiedEmployee?${data}`,
};

export default apiIndex;
