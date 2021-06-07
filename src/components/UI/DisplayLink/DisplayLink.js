import React from 'react'
import { Link } from 'react-router-dom'

const DisplayLink = (props) => {
    const clickHandler=()=>{
        localStorage.setItem("pdfLink",props.file)

    }
    console.log(props.file)
    return (
        <p>
            
            <Link className={props.classes} onClick={clickHandler} to="/course/clat/pdf">{props.name}</Link><br/>
            {props.description}
        </p>
    )
}

export default DisplayLink
