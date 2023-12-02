import { PurchaseOrderApiPath, SalesOrderApiPath} from '@src/Redux/ApiRoutes';
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