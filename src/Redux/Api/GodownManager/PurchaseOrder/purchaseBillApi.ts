
import { PurchaseBillApiPath, getPurchaseByOrderApiPath, salesApiPath } from "@src/Redux/ApiRoutes";
import axios from "axios";


export const createPurchaseBill = async (purchaseData: any) => {
  try {
    const response = await axios.post(`${PurchaseBillApiPath}`, purchaseData, {
      withCredentials: true
    })
    // 
    return response.data;
  } catch (error) {
    throw error;
  }
}





export const getPurchaseByOrderDataApi = async (id: any) => {
  
  try {
    const response = await axios.get(`${getPurchaseByOrderApiPath}${id}`, {
      withCredentials: true
    })
    // 
    return response.data;
  } catch (error) {
    throw error;
  }
}

