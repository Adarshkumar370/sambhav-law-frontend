import axios from '../helper/axios';
import {userConstant} from './constants';

const userSignup=(user) =>{
  return async (dispatch) =>{
    dispatch({type:userConstant.USER_REGISTER_REQUEST});
    await axios.post('/signup',{
      ...user,
    }).then((res)=>{
      const {message}=res.data;
      dispatch({
        type:userConstant.USER_REGISTER_SUCCESS,
        payload:{message},
      });
    }).catch((error)=>{
      console.log(error);
      dispatch({
        type:userConstant.USER_REGISTER_FALIURE,
        payload:{error:error.response.statusText},
      })
    });
  }
}
export default userSignup;