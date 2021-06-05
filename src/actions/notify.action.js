import axios from "../helper/axios";
import { notifyConstant } from "../actions/constants";

export const NotifyAdd = (user) => {
  return async (dispatch) => {
    dispatch({ type: notifyConstant.NOTIFY_REQUEST });
     await axios
      .post("/notify", {
        ...user,
      })
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({
          type: notifyConstant.NOTIFY_SUCCESS,
          payload: {
            status:'successfully added '
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: notifyConstant.NOTIFY_ERROR,
          payload: { status:'Problem Occured'},
        });
      });
  };
};
