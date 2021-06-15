import axios from '../helper/axios';
import {quesConstant} from './constants';

export const fetchQuestion=(year) =>{
    return async (dispatch)=>{
        dispatch({type:quesConstant.FETCH_QUES_REQUEST});
        await axios.get(`/question/get?testId=CLAT%20LLM%20${year}`)
        .then((res) => {
          const data = res.data;
          const value = Object.values(data);
          const noOfQuestion=value[0].length;
          
          dispatch({
            type: quesConstant.FETCH_QUES_SUCCESS,
            payload: {
              value,
              noOfQuestion
              
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: quesConstant.FETCH_QUES_FALIURE,
            payload: { error: error },
          });
        });
    };
  };