import axios from "axios";

type Mode = "dev" | "prod";

const mode = "dev";

export const DEV = axios.create({
	// baseURL: "http://localhost:8080/",
	baseURL: "/",
	// baseURL: "https://lohawalla.onrender.com/",
});

export const PROD = axios.create({
	// ERROR
});

const server = mode === "dev" ? DEV : PROD;

export default server;
