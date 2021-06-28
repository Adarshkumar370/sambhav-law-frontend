import axios from "../helper/axios";
import { courseConstant } from "./constants";

export const fetchCourse = (email) => {
  return async (dispatch) => {
    dispatch({ type: courseConstant.COURSE_FETCH_REQUEST });
    await axios
      // .get("/get-order?email=adarshkumar370@gmail.com")
      .get(`/get-order?email=${email}`)
      .then((res) => {
        const data = res.data;
        const value = Object.values(data);
        console.log(data);
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
export const placeOrder=()=>{
  return async (dispatch)=>{
    
  }
}
