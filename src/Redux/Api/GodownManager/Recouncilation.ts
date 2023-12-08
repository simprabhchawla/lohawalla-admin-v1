import {  getRecouncilationApiPath } from '@src/Redux/ApiRoutes';
import axios from 'axios';



export const AllRecouncilationApi = async () => {
  try {
    const response = await axios.get(`${getRecouncilationApiPath}`,{
      withCredentials:true
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const RequestRecouncilationApi = async (formData:any) => {
  try {
    const response = await axios.post(`${getRecouncilationApiPath}`,formData,{
      withCredentials:true
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

