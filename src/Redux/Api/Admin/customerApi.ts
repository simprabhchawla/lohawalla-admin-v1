import axios from 'axios';
import { addVouchersApiPath, getAllGroupsApiPath, getAllVouchersApiPath, updateVouchersApiPath } from "../../ApiRoutes";



export const AllVouchersDataApi = async () => {
  try {
    const response = await axios.get(`${addVouchersApiPath}`,{
      withCredentials:true
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AllGroupsDataApi = async () => {
  try {
    const response = await axios.get(`${getAllGroupsApiPath}?limit=100`,{
      withCredentials:true
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const addVouchersAPI = async (updatedData:any) => {
  try {
    const response = await axios.post(`${addVouchersApiPath}`, updatedData,{
      withCredentials:true
    });
    
    return response.data;
  } catch (error:any) {
    throw new Error('Error adding : ' + error.message);
  }
};


export const editCustomerAPI = async (editData: any) => {
  try {
    const response = await axios.patch(`${updateVouchersApiPath}/${editData.id}`, editData, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Customer');
  }
};




export const deleteCustomerApi = async (id: any) => {
  try {
    const response = await axios.delete(`${addVouchersApiPath}/${id}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error deleting godown:", error);
  }
}
