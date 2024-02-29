import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import updateUserVerification from "../fetch/services/fetchUpdateUserVerification";
import fetchPendingEmployeeList from "../fetch/services/fetchEmployeeList";
import deleteUser from "../fetch/services/fetchDeleteUser";
import getVerifiedUserList from "../fetch/services/getVerifiedUserList";

export default class EmployerAction
	extends ServerStateUtils<Employee.State>
	implements Employee.actions
{
	async deleteUser(id: string) {
		await this.handleAsync("deleteUser", () => deleteUser(id));
		this.mutateState((p) => {
			p.refresh = !p.refresh;
		});
	}

	async editUser(id: string) {
		await this.handleAsync("updateUser", () => updateUserVerification(id));
		this.mutateState((p) => {
			p.refresh = !p.refresh;
		});
	}
	async getPendingEmployeeListing() {
		const data=""
		const res = await this.handleAsync("getPendingList", () =>
			fetchPendingEmployeeList(data)
		);
		if (res) {
			this.mutateState((p) => {
				p.fetchPendingEmployeeList = res.data;
			});
		}
	}

	async getPendingEmployeeList(data: any) {
		const res = await this.handleAsync("getPendingList", () =>
			fetchPendingEmployeeList(data)
		);
		if (res) {
			this.mutateState((p) => {
				p.fetchPendingEmployeeList = res.data;
			});
		}
	}

	async getVerifiedEmployeeList(data:any) {
		
		const res = await this.handleAsync("getVerifiedList", () =>
			getVerifiedUserList(data)
		);
		if (res) {
			this.mutateState((p) => {
				p.verifiedEmployeeList = res.data;
			});
		}
	}
}
