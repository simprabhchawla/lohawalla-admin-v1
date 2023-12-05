import axios from 'axios';
import {  RatioApiPath,GetAllUnitPath, GetAllItemApiPath} from "../../ApiRoutes";



export const AllRatioDataApi = async () => {
  try {
    const response = await axios.get(`${RatioApiPath}getAll`,{
      withCredentials:true
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const AllUnitApi = async () => {
  try {
    const response = await axios.get(`${GetAllUnitPath}`,{
      withCredentials:true
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const AllItemApi = async () => {
  try {
    const response = await axios.get(`${GetAllItemApiPath}`,{
      withCredentials:true
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addRatioDataApi = async (formData:any) => {
  try {
    const response = await axios.post(`${RatioApiPath}`,formData,{
      withCredentials:true
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};