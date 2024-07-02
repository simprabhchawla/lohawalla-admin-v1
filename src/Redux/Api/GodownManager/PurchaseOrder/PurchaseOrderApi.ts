import { PurchaseOrderApiPath} from '@src/Redux/ApiRoutes';
import axios from 'axios';


export const getPurchaseOrderApiPath = async () => {
  try {
    const response = await axios.get(`${PurchaseOrderApiPath}`,{
      withCredentials:true
    });
    console.log("PurchaseOrderApiPath",response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSInglePurchaseOrderApiPath = async (id:any) => {
  console.log("api",id)
  try {
    const response = await axios.get(`${PurchaseOrderApiPath}${id}`,{
      withCredentials:true
    });
    console.log("PurchaseOrderApiPath",response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSinglePurchaseOrder = async (purchaseOrder: any) => {
  console.log("api wala ", purchaseOrder)
  try {
    const response = await axios.patch(`${PurchaseOrderApiPath}${purchaseOrder.id}`, purchaseOrder, {
      withCredentials: true
    })
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}