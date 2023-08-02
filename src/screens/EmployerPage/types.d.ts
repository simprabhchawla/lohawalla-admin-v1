namespace Employee {
	interface PendingEmployeeListing {
		id: string;
		name: string;
		aadhar: string;
		role: RoleIndex;
		dateOfCreation: string;
		phoneNumber: string;
		profile: string;
	}

	interface EmployeeData {
		id: string;
		name: string;
		email: string;
		aadhar: string;
		role: RoleIndex;
		dateOfCreation: string;
		phoneNumber: string;
		profile: string;
	}

	interface State {
		showForm: boolean;
		fetchPendingEmployeeList: PendingEmployeeListing[];
		verifiedEmployeeList: EmployeeData[];
		loading: {
			get: AsyncState;
		};
		currentTab: number;
		refresh: boolean;
	}

	interface actions {
		deleteUser(id: string);
		editUser(id: string);
		getPendingEmployeeListing();
	}
}
