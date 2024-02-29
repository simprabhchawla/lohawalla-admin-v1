import { PurchaseOrderApiPath} from '@src/Redux/ApiRoutes';
import axios from 'axios';


export const getPurchaseOrderApiPath = async () => {
  try {
    const response = await axios.get(`${PurchaseOrderApiPath}`,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSInglePurchaseOrderApiPath = async (id:any) => {
  
  try {
    const response = await axios.get(`${PurchaseOrderApiPath}${id}`,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSinglePurchaseOrder = async (purchaseOrder: any) => {
  
  try {
    const response = await axios.patch(`${PurchaseOrderApiPath}${purchaseOrder.id}`, purchaseOrder, {
      withCredentials: true
    })
    
    return response.data;
  } catch (error) {
    throw error;
  }
}