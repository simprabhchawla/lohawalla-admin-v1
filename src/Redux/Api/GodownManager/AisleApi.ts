import { getAllAisleApiPath } from '@src/Redux/ApiRoutes';
import axios from 'axios';



export const AllAisleApi = async (shelfCode:any) => {
  try {
    console.log(shelfCode)
    const response = await axios.get(`${getAllAisleApiPath}?shelfCode=${shelfCode}`,{
      withCredentials:true
    });
    console.log("aisle",response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddAisleApi = async (aisles:any) => {
  try {
    console.log(aisles)
    const response = await axios.post(`${getAllAisleApiPath}`,aisles,{
      withCredentials:true
    });
    console.log("aisle",response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};




