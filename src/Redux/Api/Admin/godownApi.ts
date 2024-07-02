import axios from 'axios';
import { getAllGodownApiPath } from '../../ApiRoutes';



export const AllGodownDataApi = async () => {
  try {
    const response = await axios.get(`${getAllGodownApiPath}`,{
      withCredentials:true
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const addGodownAPI = async (godownData:any) => {
  try {
    // console.log(godownData)
    const response = await axios.post(`${getAllGodownApiPath}`, godownData,{
      withCredentials:true
    });
    return response.data;
  } catch (error:any) {
    throw new Error('Error adding godown: ' + error.message);
  }
};


export const editGodownAPI = async (editData: any) => {
  try {
    const response = await axios.patch(`${getAllGodownApiPath}${editData.id}`, editData, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Godown');
  }
};




export const deleteGodownApi = async (id: any) => {
  try {
    // console.log("hiihihihihih",id)
    const response = await axios.delete(`${getAllGodownApiPath}${id}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error deleting godown:", error);
  }
}
