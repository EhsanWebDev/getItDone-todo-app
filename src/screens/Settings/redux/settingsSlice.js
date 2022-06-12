import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        themeSource: "local",
        theme: "light"
    },

    reducers: {
        setTheme(state, action) {
            const { theme, themeSource } = action.payload || {}
            console.log({ action })
            state.theme = theme
            state.themeSource = themeSource
        }
    }
})

export const { setTheme } = settingsSlice.actions || {}
export default settingsSlice.reducer