import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../screens/Settings/redux/settingsSlice";


export const store = configureStore({
    reducer: {
        settings: settingsReducer
    }
})