import { configureStore } from '@reduxjs/toolkit';
import VoucherSlice from "@src/Redux/Slice/customerSlice"
import ManagerSlice from './Redux/Slice/ManagerSlice';

const store = configureStore({
  reducer: {
    voucher:VoucherSlice,
    manager:ManagerSlice

  },
});

export default store;
