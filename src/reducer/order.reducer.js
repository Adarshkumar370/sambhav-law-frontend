/* eslint-disable default-case */
import { courseConstant } from "../actions/constants";
const initState5 = {
  value:null,
  error: null,
  loading: false,
  loaded:false
};

const CourseReducer = (state = initState5, action) => {
  switch (action.type) {
    case courseConstant.COURSE_FETCH_REQUEST:
      state = { ...state, loading: true, loaded:false };
      break;
    case courseConstant.COURSE_FETCH_SUCCESS:
      state = {
        ...state,
        value: action.payload.value,
        loading: false,
        loaded:true
      };
      break;
    case courseConstant.COURSE_FETCH_FALIURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        loaded:false
      };
      console.log("Faliure to retrive data");
      break;
  }

  return state;
};
export default CourseReducer;
