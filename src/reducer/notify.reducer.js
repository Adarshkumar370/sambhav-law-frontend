/* eslint-disable default-case */
import { notifyConstant } from "../actions/constants";

const initState3 = {
  status: null,
  loading: false,
};
const NotifyReducer = (state = initState3, action) => {
  switch (action.type) {
    case notifyConstant.NOTIFY_REQUEST:
      state = { ...state, loading: true };
      break;
    case notifyConstant.NOTIFY_SUCCESS:
      state = { ...state, status: action.payload.status, loading: false };
      break;
    case notifyConstant.NOTIFY_ERROR:
      state = { ...state, status: action.payload.status, loading: false };
  }

  return state;
};
export default NotifyReducer;
