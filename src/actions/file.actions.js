import axios from '../helper/axios';
import {fileConstant} from './constants';

export const fetchFile=() =>{
    return async (dispatch)=>{
        dispatch({type:fileConstant.FILE_REQUEST});
        await axios.get("/file")
        .then((res) => {
          const data = res.data;
         console.log(res);
          
          dispatch({
            type: fileConstant.FILE_SUCCESS,
            payload: {
              data
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: fileConstant.FILE_FALIURE,
            payload: { error: error },
          });
        });
    };
  };