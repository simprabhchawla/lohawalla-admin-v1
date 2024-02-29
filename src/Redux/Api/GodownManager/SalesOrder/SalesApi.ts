import { SalesOrderApiPath} from '@src/Redux/ApiRoutes';
import axios from 'axios';



export const getSalesOrderApiPath = async () => {
  try {
    const response = await axios.get(`${SalesOrderApiPath}`,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleSalesOrder = async (id:any) => {
  try {
    const response = await axios.get(`${SalesOrderApiPath}${id}`, {
      withCredentials: true
    })
    
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const updateSingleSalesOrder = async (salesOrder: any) => {
  
  try {
    const response = await axios.post(`${SalesOrderApiPath}${salesOrder.id}`, salesOrder, {
      withCredentials: true
    })
    
    return response.data;
  } catch (error) {
    throw error;
  }
}