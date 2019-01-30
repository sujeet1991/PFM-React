import React from 'react'
import './hoc.css';

const  hoc=(props)=>{
  return (
    <div className="outer_wrapper">
       {props.children}
    </div>
  )
}

export default hoc;