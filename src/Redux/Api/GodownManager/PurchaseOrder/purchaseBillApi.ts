
import { PurchaseBillApiPath, getPurchaseByOrderApiPath, salesApiPath } from "@src/Redux/ApiRoutes";
import axios from "axios";


export const createPurchaseBill = async (purchaseData: any) => {
  try {
    const response = await axios.post(`${PurchaseBillApiPath}`, purchaseData, {
      withCredentials: true
    })
    // console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}





export const getPurchaseByOrderDataApi = async (id: any) => {
  console.log("fadafaayys0id",id)
  try {
    const response = await axios.get(`${getPurchaseByOrderApiPath}${id}`, {
      withCredentials: true
    })
    // console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}

