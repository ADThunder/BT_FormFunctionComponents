import { createSlice } from "@reduxjs/toolkit";
import { luuLocal } from "../../utils/localStorage";
import { removeVietnameseTones } from "../../utils/removeVietnamese";

const initialState = {
  arrSinhVien: JSON.parse(localStorage.getItem("arrSinhVien")) || [],
  currentSinhVien: {},
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    setArrSinhVien: (state, action) => {
      // console.log(action);
      state.arrSinhVien.push(action.payload);
      luuLocal("arrSinhVien", state.arrSinhVien);
    },
    deleteSinhVien: (state, action) => {
      state.arrSinhVien = state.arrSinhVien.filter(
        (item) => item.maSV !== action.payload
      );
      // localStorage.setItem("arrSinhVien", JSON.stringify(state.arrSinhVien));
      luuLocal("arrSinhVien", state.arrSinhVien);
    },
    getCurrentSinhVien: (state, action) => {
      const currentSinhVien = state.arrSinhVien.find(
        (user) => user.maSV === action.payload.maSV
      );
      if (currentSinhVien) {
        state.currentSinhVien = currentSinhVien;
      }
      luuLocal("arrSinhVien", state.arrSinhVien);
    },
    updateSinhVien: (state, action) => {
      const index = state.arrSinhVien.findIndex(
        (index) => index.maSV === action.payload.maSV
      );
      if (index !== -1) {
        state.arrSinhVien[index] = action.payload;
      }
      luuLocal("arrSinhVien", state.arrSinhVien);
    },
    searchSinhVien: (state, action) => {
      // console.log(current(state));
      // console.log(action);
      const keyword = removeVietnameseTones(
        action.payload.toLowerCase().trim()
      );
      let arrFilter = state.arrSinhVien.filter((user) => {
        // console.log(user.hoTen);
        let newName = removeVietnameseTones(user.hoTen.toLowerCase().trim());
        // console.log(newName);
        return newName.includes(keyword);
      });
      keyword
        ? (state.arrSinhVien = arrFilter)
        : (state.arrSinhVien = JSON.parse(localStorage.getItem("arrSinhVien")));
    },
  },
});
export const {
  setArrSinhVien,
  deleteSinhVien,
  getCurrentSinhVien,
  updateSinhVien,
  searchSinhVien,
} = formSlice.actions;

export default formSlice.reducer;
