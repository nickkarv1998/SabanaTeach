import * as actionTypes from "./actions";

const initialState = {
  IsUserLoggedIn: false,
  name: "",
  surname: "",
  email: "",
  error:false,
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
        error:false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        IsUserLoggedIn: false,
        name: "",
        surname: "",
        email: "",
      };
      case actionTypes.ERROR:
        return{
          ...state,
          error: true
        }
    default:
      return state;
  }
};

export default reducer;
