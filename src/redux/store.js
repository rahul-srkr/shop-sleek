import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './feature/categories/categoriesSlice'
import sidebarReducer from './feature/sidebar/sidebarSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        sidebar: sidebarReducer
    }
})

