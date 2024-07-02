import AxiosFactory from "@src/modules/axios/AxiosFactory";

const AuthInstance = AxiosFactory.createInstance({
	baseURL: "auth/LogIn/companyLogIn/",
});

export default AuthInstance;
