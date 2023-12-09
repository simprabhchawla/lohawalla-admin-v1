
import { getVoucherApiPath } from '@src/Redux/ApiRoutes';
import axios from 'axios';



export const getVoucherOrderApi = async (data:any) => {
  try {
    const response = await axios.get(`${getVoucherApiPath}?voucherCode=${data}`,{
      withCredentials:true
    });
    console.log("PurchaseOrderApiPath",response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};