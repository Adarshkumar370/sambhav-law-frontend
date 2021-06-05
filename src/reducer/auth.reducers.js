/* eslint-disable default-case */
import { authConstants } from "../actions/constants";

const initState1 = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};
const AuthReducer = (state = initState1, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        error:null
      };
      break;
    case authConstants.LOGIN_FALIURE:
      state = {
        ...initState1,
        error: action.payload.error,
        
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState1,
      };
      break;
    case authConstants.LOGOUT_FALIURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    default:
      return state;
  }

  return state;
};
export default AuthReducer;
