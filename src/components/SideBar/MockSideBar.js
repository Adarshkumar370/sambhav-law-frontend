import React from 'react'
import MockDiv from './MockDIv'; 
const MockSideBar = (props) => {
//    console.log(props.list);
    if(props.list){
        return (
            <>
               {
                   props.list.map((element,index)=>{
                       console.log(element);
                       return(
                           <MockDiv 
                           quesNo={index+1}
                           classNames={element}
                           key={index}/>
                           
                       );
                   })
                   
               }
            </>
        )
    }
    return('');
}

export default MockSideBar
// className={element}