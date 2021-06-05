import { userConstant } from "../actions/constants";

const initState4 = {
  error: null,
  message: "",
  loading: false,
};
const UserRegister = (state = initState4, action) => {
  switch (action.type) {
    case userConstant.USER_REGISTER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstant.USER_REGISTER_SUCCESS:
      state = {
        ...state,
        loding: false,
        message: action.payload.message,
      };
      break;
    case userConstant.USER_REGISTER_FALIURE:
      state = {
        ...state,
        loding: false,
        error: action.payload.error,
      };

      break;
    default:
      return state;
  }
  return state;
};
export default UserRegister;
