
import { salesApiPath } from "@src/Redux/ApiRoutes";
import axios from "axios";
export const createSales = async (salesData: any) => {
  try {
    const response = await axios.post(`${salesApiPath}`, salesData, {
      withCredentials: true
    })
    // console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}