import React from 'react'
import{Col} from 'react-bootstrap'
const MockDIv = (props) => {
    return (
        <Col sm={{span:1}} className='m-2 '>
            <a className={ `${props.classNames} p-2  text-decoration-none text-reset`} onClick={props.onClickHandler}>{props.quesNo}</a>
            </Col>
    )
}

export default MockDIv
