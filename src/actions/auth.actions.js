import axios from "../helper/axios";
import { authConstants } from "../actions/constants";

export const Login = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
     await axios
      .post("/signin", {
        ...user,
      })
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        console.log(localStorage.getItem('user'));

        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      })
      .catch((error) => {
        localStorage.setItem("token", '');
        localStorage.setItem("user", '');
        dispatch({
          type: authConstants.LOGIN_FALIURE,
          payload: { error: error.message},
        });
      });
  };
};
