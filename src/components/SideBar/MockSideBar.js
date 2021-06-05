import React from 'react'

const MockSideBar = (props) => {

    const item=props.list;
   console.log(props.list);
    if(props.list){
        return (
            <>
               {
                   props.list.map((element,index)=>{
                       return(<span >{index+1}{' '}</span>);
                   })
                   
               }
            </>
        )
    }
    return('');
}

export default MockSideBar
// className={element}