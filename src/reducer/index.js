import mockTestReducer from "./mockTest.reducer";
import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import orderReducer from "./order.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";
import notifyReducer from './notify.reducer';
const rootReducer = combineReducers({
  auth: authReducer,
  order: orderReducer,
  product: productReducer,
  user: userReducer,
  mock: mockTestReducer,
  notify:notifyReducer
});
export default rootReducer;
