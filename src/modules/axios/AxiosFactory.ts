import axios, { CreateAxiosDefaults } from "axios";
export const basePath = "http://localhost:8080/";
// export const basePath = "/";
// export const basePath = "https://www.lohawalla.com/";
// export const basePath = "https://lohawalla.onrender.com/";
export default class AxiosFactory {
	static createInstance<T = any>(config?: CreateAxiosDefaults<T>) {
		const _config = config ? config : ({} as CreateAxiosDefaults<any>);
		const burl = _config.baseURL ? _config.baseURL : "";
		_config.baseURL = basePath + burl;
		return axios.create(_config);
	}
}
