import { Aisle } from './GodownScreen/Screens/Aisle/Aisle';
import { configureStore } from '@reduxjs/toolkit';
import VoucherSlice from "@src/Redux/Slice/Admin/customerSlice"
import ManagerSlice from './Redux/Slice/Admin/ManagerSlice';
import godownReducer from './Redux/Slice/Admin/godownSlice';
import groupsSlice from './Redux/Slice/Admin/getGroupSlice';
import ShelfsSlice from './Redux/Slice/GodownManager/ShelfSlice';
import AisleSlice from './Redux/Slice/GodownManager/AisleSlice';
import SalesOrder from './Redux/Slice/GodownManager/SalesOrder/SalesOrderSlice';
import PurchaseOrderSlice from './Redux/Slice/GodownManager/PurchaseOrder/PurchaseOrderSlice';
import ratioSlice from './Redux/Slice/Admin/ratioSlice';
import VoucherOrderSlice from './Redux/Slice/GodownManager/PurchaseOrder/VoucherSlice'
import RecouncilationSlice from './Redux/Slice/GodownManager/RecouncilationSlice';
import DatasalesSlice from './Redux/Slice/GodownManager/SalesOrder/OrderDataSlice';
import SalesBillSlice from './Redux/Slice/GodownManager/SalesOrder/SalesBillSlice';
import PurchaseBillSlice from './Redux/Slice/GodownManager/PurchaseOrder/PurchaseBillSlice';
const store = configureStore({
  reducer: {
    voucher:VoucherSlice,
    manager:ManagerSlice,
    godown: godownReducer,
    groups: groupsSlice,
    shelfs: ShelfsSlice,
    aisle:AisleSlice,
    salesOrder:SalesOrder,
    purchaseOrder:PurchaseOrderSlice,
    ratio:ratioSlice,
    voucherOrder:VoucherOrderSlice,
    recouncilation:RecouncilationSlice,
    datasales:DatasalesSlice,
    salesSlice:SalesBillSlice,
    purchaseBill:PurchaseBillSlice

  },
});

export default store;
