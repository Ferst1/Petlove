import { createSlice } from "@reduxjs/toolkit";


const initialState  = {
        productItem : [],
        productLoading : true,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.categoryLoading = true;
            state.productItem = action.payload;
            state.productLoading = false;
        },
    },
})

export const { setFilter } = categorySlice.actions;

export default categorySlice.reducer;