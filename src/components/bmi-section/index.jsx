import React, { useEffect } from 'react'
import { useState } from 'react';
import './style.scss'
import doctorImage from '../../assets/image/doctor.jpg';
import axios from 'axios';

import { data } from 'autoprefixer';


function BmiSection() {
  
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('');
  const [BMIResalt,setBMIResalt] = useState(0);
  const [ispopup, setIspopup] = useState(false);
const [response, setResponse] = useState('')

  // function handleBMI(e){
  //   e.preventDefault();
  //   if (height && mass){
  //     setBMIResalt( mass / ((height / 100) * (height / 100)));
 
  //     setIspopup(!ispopup)
  //   }else{
  //     setBMIResalt(0)
  //   }
  // }
 

 
const calcBMI = async() => {
    console.log(gender)
  try{
    const res = await axios.post(
      "https://refillplug.up.railway.app/api/calculate-bmi/",
      {
        weight: weight,
        height: height,
        gender: gender,
      }
    );
    setIspopup(!ispopup); 
    setResponse(res.data)
    console.log(res.data ,'response' , res , response)
  }catch(err){

  }

   
};
  
  return (
    <section className="flex gap-[2rem] p-2 ">
      {ispopup ? (
        <>
          <div className="modal max-w-xl max-h-sm  " id="popup">
            <button
              className="close-modal "
              onClick={() => setIspopup(!ispopup)}
            >
              &times;
            </button>
            <p>
              <b>Your body mass index:</b> {response.bmi}
            </p>
            <p>
              <b>Classification:</b> {response.classification}
            </p>
            <p>
              <b> Recommendation:</b> {response.recommendation}
            </p>
          </div>
          <div className="overlay " onClick={() => setIspopup(!ispopup)}></div>
        </>
      ) : null}

      <div className="image">
        <img src={doctorImage} alt="" />
      </div>
      <form
        action="POST"
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
          calcBMI();
        }}
        style={{ boxShadow: "0em 0em 0em rgb(0 0 0 / 0%)" }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Check Your BMI
        </h1>
        <h3>Gender</h3>
        <div className="row">
          <div className="row">
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              onClick={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              id="female"
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="">Weight</label>
          <input
            type="number"
            onChange={(e) => setWeight(Number(e.target.value))}
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
