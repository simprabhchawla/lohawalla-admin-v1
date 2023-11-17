import axios from 'axios';
import {  getAllManagerApiPath } from "../ApiRoutes";



export const AllManagerDataApi = async () => {

  console.log()
  try {
    const response = await axios.get(`${getAllManagerApiPath}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addManagerDataApi = async (formData:any) => {

  console.log(formData)
  try {
    const response = await axios.post(`${getAllManagerApiPath}`,formData);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};


