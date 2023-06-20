import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getCategories: (state, action) => {
            state.items = action.payload
        },
    },
});

export const { getCategories } = categoriesSlice.actions;

export const categories = (state) => state.categories.items;

export default categoriesSlice.reducer;