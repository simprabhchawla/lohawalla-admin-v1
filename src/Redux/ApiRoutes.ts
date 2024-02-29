import { basePath } from "@src/modules/axios/AxiosFactory";
export const getAllVouchersApiPath = `${basePath}voucher/getVoucher`;
export const addVouchersApiPath = `${basePath}voucher`;
export const updateVouchersApiPath = `${basePath}voucher/updateVoucher`;
export const getAllManagerApiPath = `${basePath}manager`;
export const getAllAssistantManagerApiPath = `${basePath}manager/Godown/Assistant`;
export const getAllGodownApiPath = `${basePath}store/godown/`;
export const getAllGroupsApiPath = `${basePath}admin/pages/employeeListing/getVerifiedEmployee`;


// Godown Manager

export const getAllShelfApiPath = `${basePath}store/shelf/`;
export const getAllAisleApiPath = `${basePath}store/aisle/`
export const RatioApiPath=`${basePath}admin/pages/ratio/`
export const GetAllItemApiPath=`${basePath}purchaser/forms/itemForm/getAllItems`
export const GetAllUnitPath=`${basePath}purchaser/forms/companyProductForm/getAllUnit`
export const getVoucherApiPath=`${basePath}voucher/getVoucherData`
export const getRecouncilationApiPath=`${basePath}store/reconciliation/`

// sales order
export const SalesOrderApiPath = `${basePath}salesOrder/`;
export const createSalesOrderApiPath=`${basePath}salesOrder/`
export const salesApiPath=`${basePath}sales/salesbill`
export const salesDataApiPath=`${basePath}sales/salesbill/getByOrder/`


// purchaseOrder
export const PurchaseOrderApiPath = `${basePath}purchaseOrder/`;
export const PurchaseBillApiPath = `${basePath}purchaser/pages/purchaseBill/`;
export const getPurchaseByOrderApiPath = `${basePath}purchaser/pages/purchaseBill/getByOrder/`;
