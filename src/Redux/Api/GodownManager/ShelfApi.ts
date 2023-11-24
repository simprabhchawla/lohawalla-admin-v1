import { getAllShelfApiPath } from '@src/Redux/ApiRoutes';
import axios from 'axios';



export const AllShelfsApi = async () => {

  try {
    const response = await axios.get(`${getAllShelfApiPath}`,{
      withCredentials:true
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};



