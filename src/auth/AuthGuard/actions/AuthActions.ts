import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import { State } from "../AuthGuard";
import getIsLoggedIn from "../fetch/services/getIsLoggedIn";
import login from "../fetch/services/login";
import logout from "../fetch/services/logout";


export default class AuthActions extends ServerStateUtils<State> {


	async isLoggedIn() {		
		const res = await this.handleAsync("getIsLoggedIn", () => getIsLoggedIn());
		
		if (res) {
			
			this.mutateState((p) => {
				p.loginData = { ...res.data.loginData, token: res.data.token };
			});
		}
		else{
			
		}
	}
	async logout() {
		this.handleAsync("logout", () => logout(), {
			onSuccess: () => {
				this.mutateState((p) => {
					p.loginData = null;
				});
			},
		});
	}
	async login() {
		const res = await this.handleAsync("login", () => login());
	}
}
