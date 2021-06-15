import axios from "../helper/axios";
import { courseConstant } from "./constants";

export const fetchCourse = () => {
  return async (dispatch) => {
    dispatch({ type: courseConstant.COURSE_FETCH_REQUEST });
    await axios
      .get("/get-order?email=adarshkumar370@gmail.com")
      .then((res) => {
        const data = res.data;
        const value = Object.values(data);
        console.log(value);
        dispatch({
          type: courseConstant.COURSE_FETCH_SUCCESS,
          payload: {
            value,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: courseConstant.COURSE_FETCH_FALIURE,
          payload: { error: error },
        });
      });
  };
};
