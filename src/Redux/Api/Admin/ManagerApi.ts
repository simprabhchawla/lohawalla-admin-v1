import axios from 'axios';
import {  getAllManagerApiPath } from "../../ApiRoutes";



export const AllManagerDataApi = async () => {

  console.log()
  try {
    const response = await axios.get(`${getAllManagerApiPath}`,{
      withCredentials:true
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addManagerDataApi = async (formData:any) => {

  console.log(formData)
  try {
    const response = await axios.post(`${getAllManagerApiPath}`,formData,{
      withCredentials:true
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const updateManagerApi = async (editData:any) => {
  console.log(editData)
  try {
    const response = await axios.patch(`${getAllManagerApiPath}/${editData.id}`,editData.data,{
      withCredentials:true
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteManagerApi = async (id: any) => {
  console.log(id)
  try {
    // console.log("hiihihihihih",id)
    const response = await axios.delete(`${getAllManagerApiPath}/${id}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error deleting Manager:", error);
  }
}



