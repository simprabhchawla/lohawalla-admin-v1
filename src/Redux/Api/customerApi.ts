import axios from 'axios';
import { addVouchersApiPath, getAllGroupsApiPath, getAllVouchersApiPath } from "../ApiRoutes";



export const AllVouchersDataApi = async (groups:any) => {

  console.log(groups)
  try {
    const response = await axios.post(`${getAllVouchersApiPath}`,groups);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AllGroupsDataApi = async () => {
  try {
    const response = await axios.get(`${getAllGroupsApiPath}`);
    console.log("aa",response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const addVouchersAPI = async (updatedData:any) => {
  try {
    console.log("efnefuw",updatedData)
    const response = await axios.post(`${addVouchersApiPath}`, updatedData);
    console.log("efnefuw",response.data)
    return response.data;
  } catch (error:any) {
    throw new Error('Error adding : ' + error.message);
  }
};


// export const editCustomerAPI = async (editData: any) => {
//   console.log(editData)
//   try {
//     const response = await axios.patch(`${getAllCustomersApiPath}${editData.id}`, editData.data, {
//       withCredentials: true
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error('Failed to fetch Customer');
//   }
// };




// export const deleteCustomerApi = async (id: any) => {
//   try {
//     // console.log("hiihihihihih",id)
//     const response = await axios.delete(`${getAllCustomersApiPath}${id}`, {
//       withCredentials: true,
//     });
//     return response;
//   } catch (error) {
//     console.error("Error deleting godown:", error);
//   }
// }
