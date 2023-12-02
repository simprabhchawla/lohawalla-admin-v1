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