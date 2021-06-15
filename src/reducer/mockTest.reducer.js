/* eslint-disable default-case */
import { quesConstant } from "../actions/constants";
const initState2 = {
  docs: null,
  questionLoaded: false,
  noOfQuestion: null,
  error: null,
  loading: false,
  response:{}
};

const MockTestReducer = (state = initState2, action) => {
  switch (action.type) {
    case quesConstant.FETCH_QUES_REQUEST:
      state = { ...state, loading: true };
      break;
    case quesConstant.FETCH_QUES_SUCCESS:
      state = {
        ...state,
        docs: action.payload.value,
        loading: false,
        noOfQuestion: action.payload.noOfQuestion,
        questionLoaded: true,
      };
      break;
    case quesConstant.FETCH_QUES_FALIURE:
      state = {
        ...state,
        loading: false,
        questionLoaded: false,
        error: action.payload.error,
      };
      console.log("Faliure to retrive data");
      break;
  }

  return state;
};
export default MockTestReducer;
