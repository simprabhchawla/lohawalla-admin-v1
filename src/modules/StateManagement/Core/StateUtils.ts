import { AxiosError } from "axios";

export default class StateUtils<T> {
	protected state: T;
	protected setState: (setter: (newState: T) => T) => void;

	constructor(state: T, setState: (setter: (newState: T) => T) => void) {
		this.state = state;
		this.setState = setState;
	}

	public mutateState(setter: (state: T) => void) {
		this.setState((s) => {
			const newState = { ...s };
			setter(newState);
			return newState;
		});
	}
}

export class ServerStateUtils<
	T extends { loading: Record<string, AsyncState> }
> extends StateUtils<T> {
	public async handleAsync<T = any>(
		name: string,
		fn: () => Promise<T>,
		config?: {
			initializedMessage?: string;
			successMessage?: string;
			errMessage?: string;
			onError?: (err: AxiosError) => void;
			onSuccess?: (data: T) => void;
			onEnd?: (data?: T, err?: AxiosError) => void;
		}
	) {
		const conf = config ? config : {};
		const {
			initializedMessage = "initialized",
			successMessage = "successful",
			errMessage = "failed",
		} = conf;

		this.mutateState((p) => {
			p.loading[name] = {
				status: "initialized",
				message: initializedMessage,
			};
		});
		try {
			const val = await fn();
			this.mutateState((p) => {
				p.loading[name] = {
					status: "success",
					message: successMessage,
				};
			});
			conf.onSuccess && conf.onSuccess(val);
			return val;
		} catch (err) {
			const error = err as AxiosError;
			conf.onError && conf.onError(error);
			const message =
				error.status && error.status >= 500 ? "server error" : errMessage;
			console.log("error received wasa", error);
			this.mutateState((p) => {
				p.loading[name] = {
					status: "failed",
					message,
				};
			});
		} finally {
			conf.onEnd && conf.onEnd();
		}
	}

	public setLoading(name: string, state: AsyncStatus, message?: string) {
		this.mutateState((p) => {
			p.loading[name].status = state;
			const data = p.loading[name].message;
			p.loading[name].message = message ? message : data;
		});
	}
}
