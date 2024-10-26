import { TOGGLE_THEME } from "../action/ThemeAction";

const nilaiDefault = {
  theme: "Light",
};

const themeReducer = (state = nilaiDefault, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default themeReducer;
