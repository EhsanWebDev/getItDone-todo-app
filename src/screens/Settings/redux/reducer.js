import { SETTING_TYPES } from "./types";

const INITIAL_STATE = {
    themeSource: null,
    theme: "light"
}

const settingsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SETTING_TYPES.CHANGE_THEME_MODE:
            const { themeSource, theme } = action.type || {}

            return {
                themeSource, theme
            }

        default: return state
    }
}

export default settingsReducer