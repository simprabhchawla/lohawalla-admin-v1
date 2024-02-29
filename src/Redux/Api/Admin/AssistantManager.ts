import axios from 'axios';
import {  getAllAssistantManagerApiPath } from "../../ApiRoutes";

 

export const AllAssistantManagerDataApi = async () => {

  
  try {
    const response = await axios.get(`${getAllAssistantManagerApiPath}`,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addAssistantManagerDataApi = async (formData:any) => {

  
  try {
    const response = await axios.post(`${getAllAssistantManagerApiPath}`,formData,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const updateAssistantManagerApi = async (editData:any) => {
  
  try {
    const response = await axios.patch(`${getAllAssistantManagerApiPath}/${editData.id}`,editData,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};


// export const deleteAssistantManagerApi = async (id: any) => {
  
//   try {

//     const response = await axios.delete(`${getAllAssistantManagerApiPath}/${id}`, {
//       withCredentials: true,
//     });
//     return response;
//   } catch (error) {
//     console.error("Error deleting Manager:", error);
//   }
// }



