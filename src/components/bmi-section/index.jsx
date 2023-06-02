import React, { useEffect } from 'react'
import { useState } from 'react';
import './style.scss'
import doctorImage from '../../assets/image/doctor.jpg';



function BmiSection() {
  
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [BMIResalt,setBMIResalt] = useState(0);
  const [ispopup, setIspopup] = useState(false);


  function handleBMI(e){
    e.preventDefault();
    if (height && mass){
      setBMIResalt( mass / ((height / 100) * (height / 100)));
 
      setIspopup(!ispopup)
    }else{
      setBMIResalt(0)
    }
  }
 

 
  
  return (
    <section className="flex gap-[2rem] p-2 ">
      {ispopup && BMIResalt ? ( <>
            <div className="modal max-w-xl max-h-sm  " id="popup">
              <button
                className="close-modal "
                onClick={() => setIspopup(!ispopup)}
              >
                &times;
              </button>
              <h1 className="text-center">
                BMI Resalt: {Math.round(BMIResalt)} kg/m
                <sup>2</sup>
              </h1>
              <p>Note a healthy BMI range: 18.5 kg/m<sup>2</sup> - 25kg/m <sup>2</sup></p>
            </div>
            <div
              className="overlay "
              onClick={() => setIspopup(!ispopup)}
            ></div>
          </>) : null
      }

      
      <div className="image">
        <img src={doctorImage} alt="" />
      </div>
      <form
        id="form"
        onSubmit={handleBMI}
        style={{ boxShadow: "0em 0em 0em rgb(0 0 0 / 0%)" }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Check Your BMI
        </h1>
        <h3>Gender</h3>
        <div className="row">
          <div className="row">
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" />
          </div>
          <div className="row">
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="female" />
          </div>
        </div>

        <div className="row">
          <label htmlFor="">Weight</label>
          <input
            type="number"
            onChange={(e) => setMass(Number(e.target.value))}
            placeholder="In kg"
            id="mass"
          />
        </div>
        <div className="row">
          <label htmlFor="">Height</label>
          <input
            type="number"
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="In Inches"
            id="height"
          />
        </div>

        <button type="submit" id="submit" style={{ color: "#FFFFFF" }}>
          Caculate
        </button>
      </form>
    </section>
  );
}

export default BmiSection
