import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    left: false,
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setDrawer: (state, action) => {
            state.left = action.payload
        },
    },
});

export const { setDrawer } = sidebarSlice.actions;

export const drawerState = (state) => state.sidebar.left;

export default sidebarSlice.reducer;