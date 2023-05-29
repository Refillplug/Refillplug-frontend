import React, { useState } from 'react'
import './popup.scss'
function PopUp(resault) {
    const [show, setShow] = useState("none")
    console.log({resault})
   const handleCloseModel = e=>{
       
      //  console.log(e.target.parentElement.classList);
      //  console.log(e.target.parentElement.classList.add('close-model'));
    }
    
  return (

    <div className='bmi-popup'>
        <div className="close" onClick={handleCloseModel}>x</div>PopUp in
        <h1>{resault.resault}</h1>
    </div>

  )
}

export default PopUp