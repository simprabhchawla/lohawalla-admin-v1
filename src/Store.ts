import { configureStore } from '@reduxjs/toolkit';
import VoucherSlice from "@src/Redux/Slice/customerSlice"
import ManagerSlice from './Redux/Slice/ManagerSlice';
import godownReducer from './Redux/Slice/godownSlice';
import groupsSlice from './Redux/Slice/getGroupSlice';

const store = configureStore({
  reducer: {
    voucher:VoucherSlice,
    manager:ManagerSlice,
    godown: godownReducer,
    groups: groupsSlice,

  },
});

export default store;
