import { getAllShelfApiPath } from '@src/Redux/ApiRoutes';
import axios from 'axios';

export const AllShelfsApi = async () => {
  try {
    const response = await axios.get(`${getAllShelfApiPath}`,{
      withCredentials:true
    });
    console.log("self",response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddShelfsApi = async (selfData:any) => {

  try {
    const response = await axios.post(`${getAllShelfApiPath}`,selfData,{
      withCredentials:true
    });
    console.log("self",response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};



