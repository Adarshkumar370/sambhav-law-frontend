/* eslint-disable default-case */
import {fileConstant} from "../actions/constants";
const initState2 = {
  data:null,
  error:null,
  loading:false,
  loaded:false
};

const FileReducer = (state = initState2, action) => {
  switch (action.type) {
    case fileConstant.FILE_REQUEST:
      state = { ...state, loading: true };
      break;
    case fileConstant.FILE_SUCCESS:
      state = {
        ...state,
        data:action.payload.data,
        loading: false,
        loaded:true
      };
      break;
    case fileConstant.FILE_FALIURE:
      state = {
        ...state,
        loading: false,
        loaded:false,
        error: action.payload.error,
      };
      console.log("Faliure to retrive data");
      break;
  }

  return state;
};
export default FileReducer;
