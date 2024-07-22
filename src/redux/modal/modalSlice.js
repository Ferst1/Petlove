import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalContent: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalContent = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModalIsOpen = (state) => state.modal.isOpen;
export const selectModalModalContent = (state) => state.modal.modalContent;
export const modalReducer = modalSlice.reducer;
