import React from 'react'
import './style.scss'
import doctorImage from '../../assets/image/doctor.jpg'
function BmiSection() {
  return (
    <section>
      <div className="image">
        <img src={doctorImage} alt="" />
      </div>
      <form id="form" style={{ boxShadow: "0em 0em 0em rgb(0 0 0 / 0%)" }}>
        <h1>Check Your BMI</h1>
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
          <input type="text" placeholder="In kg" />
        </div>
        <div className="row">
          <label htmlFor="">Height</label>
          <input type="text" placeholder="In Inches" />
        </div>

        <button type="submit">Caculate</button>
      </form>
    </section>
  );
}

export default BmiSection
