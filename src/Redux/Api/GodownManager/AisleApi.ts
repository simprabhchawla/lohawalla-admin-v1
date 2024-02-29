import { getAllAisleApiPath } from '@src/Redux/ApiRoutes';
import axios from 'axios';



export const AllAisleApi = async (shelfCode:any) => {
  try {
    
    const response = await axios.get(`${getAllAisleApiPath}?shelfCode=${shelfCode}`,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddAisleApi = async (aisles:any) => {
  try {
    
    const response = await axios.post(`${getAllAisleApiPath}`,aisles,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};




