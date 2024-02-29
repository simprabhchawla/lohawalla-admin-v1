import axios from 'axios';
import {  getAllManagerApiPath } from "../../ApiRoutes";



export const AllManagerDataApi = async () => {

  
  try {
    const response = await axios.get(`${getAllManagerApiPath}`,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addManagerDataApi = async (formData:any) => {

  
  try {
    const response = await axios.post(`${getAllManagerApiPath}`,formData,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const updateManagerApi = async (editData:any) => {
  
  try {
    const response = await axios.patch(`${getAllManagerApiPath}/${editData.id}`,editData.data,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteManagerApi = async (id: any) => {
  
  try {
    // 
    const response = await axios.delete(`${getAllManagerApiPath}/${id}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error deleting Manager:", error);
  }
}



