import { basePath } from "@src/modules/axios/AxiosFactory";

export const getAllVouchersApiPath = `${basePath}voucher/getVoucher`;
export const addVouchersApiPath = `${basePath}voucher`;
export const updateVouchersApiPath = `${basePath}voucher/updateVoucher`;

export const getAllManagerApiPath = `${basePath}manager`;
export const getAllGodownApiPath = `${basePath}store/godown/`;
export const getAllGroupsApiPath = `${basePath}admin/pages/employeeListing/getVerifiedEmployee`;


// Godown Manager


export const getAllShelfApiPath = `${basePath}store/shelf/`;