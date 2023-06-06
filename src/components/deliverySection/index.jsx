import React from 'react'
import './style.scss'
import doctorImage from "../../assets/image/delivery.jpg";
function index() {
  return (
    <section className="delivery-section">
      <div className="grid-el grid-el-cont-2">
        <h1 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom:'2rem'}}>
          We make your delivery <br /> fast and to Your <br /> Doorstep
        </h1>
        <ul style={{ listStyle: "initial", marginLeft: "2rem" }}>
          <li>Personalized medication plans</li>
          <li>Repeat prescriptions sorted </li>
          <li>Save time and Effort</li>
        </ul>
      </div>
      <div
        className="grid-el grid-el-cont-1"
        style={{ display: "grid", placeItems: "center" }}
      >
        <div className="image">
          <img src={doctorImage} width={"100%"} alt={"delivery"} />
        </div>
      </div>
    </section>
  );
}

export default index
