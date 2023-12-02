import { Aisle } from './GodownScreen/Screens/Aisle/Aisle';
import { configureStore } from '@reduxjs/toolkit';
import VoucherSlice from "@src/Redux/Slice/Admin/customerSlice"
import ManagerSlice from './Redux/Slice/Admin/ManagerSlice';
import godownReducer from './Redux/Slice/Admin/godownSlice';
import groupsSlice from './Redux/Slice/Admin/getGroupSlice';
import ShelfsSlice from './Redux/Slice/GodownManager/ShelfSlice';
import AisleSlice from './Redux/Slice/GodownManager/AisleSlice';
import SalesOrder from './Redux/Slice/GodownManager/SalesOrderSlice';
import PurchaseOrderSlice from './Redux/Slice/GodownManager/PurchaseOrderSlice';

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

  },
});

export default store;
