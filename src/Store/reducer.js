import * as actionTypes from "./actions";

const initialState = {
  IsUserLoggedIn: false,
  name: "",
  surname: "",
  email: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        IsUserLoggedIn: true,
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        IsUserLoggedIn: false,
        name: "",
        surname: "",
        email: "",
      };
    default:
      return state;
  }
};

export default reducer;
