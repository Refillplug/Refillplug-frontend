import React, { useEffect } from 'react'
import { useState } from 'react';
import './style.scss'
import doctorImage from '../../assets/image/doctor.jpg';
import PopUp from './PopUp';


function BmiSection() {
  // const [displayResalt]
  
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [BMIResault,setBMIResault] = useState(0);
  const [ispopup, setIspopup] = useState(false);



  function handleBMI(e){
    e.preventDefault();
    setBMIResault( mass / ((height / 100) * (height / 100)));
      console.log(
        BMIResault
      );
        setIspopup(true)

  }
 

 
  
  return (
    <section
      style={{
        display: "flex",
        gap: "2rem",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* {ispopup || (
        <div className="bmi-popup">
          <div className="close" onClick={() => setIspopup(false)}>
            x
          </div>
          PopUp in
          <h1>{BMIResault}</h1>
        </div>
      )} */}
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
