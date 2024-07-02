import { SalesOrderApiPath} from '@src/Redux/ApiRoutes';
import axios from 'axios';



export const getSalesOrderApiPath = async () => {
  try {
    const response = await axios.get(`${SalesOrderApiPath}`,{
      withCredentials:true
    });
    console.log("getSalesOrderApiPath",response.data)
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
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const updateSingleSalesOrder = async (salesOrder: any) => {
  console.log("api wala ", salesOrder)
  try {
    const response = await axios.post(`${SalesOrderApiPath}${salesOrder.id}`, salesOrder, {
      withCredentials: true
    })
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}