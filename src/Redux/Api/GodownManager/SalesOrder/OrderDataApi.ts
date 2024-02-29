import { salesDataApiPath } from "@src/Redux/ApiRoutes";
import axios from "axios";

export const getSalesOrderDataApi = async (ids:any) => {
    try {
      const response = await axios.get(`${salesDataApiPath}${ids}`, {
        withCredentials: true
      })
      
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  