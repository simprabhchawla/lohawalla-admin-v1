import { configureStore } from '@reduxjs/toolkit';
import VoucherSlice from "@src/Redux/Slice/Admin/customerSlice"
import ManagerSlice from './Redux/Slice/Admin/ManagerSlice';
import godownReducer from './Redux/Slice/Admin/godownSlice';
import groupsSlice from './Redux/Slice/Admin/getGroupSlice';
import ShelfsSlice from './Redux/Slice/GodownManager/ShelfSlice';

const store = configureStore({
  reducer: {
    voucher:VoucherSlice,
    manager:ManagerSlice,
    godown: godownReducer,
    groups: groupsSlice,
    shelfs: ShelfsSlice,

  },
});

export default store;
