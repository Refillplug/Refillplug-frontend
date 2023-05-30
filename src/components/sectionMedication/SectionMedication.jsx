import React, { useEffect, useState } from "react";
import "./style.scss";
// import Slide from "./slide";
// import MedicationSearch from "./MedicationSearch";
import { Users } from "./users";
import axios from "../../utils/axios";
import { data } from "autoprefixer";
import { useActionData } from "react-router-dom";
// import Slide from "./slide";


function SectionMedication() {
  const [query, setQuery] = useState("");
  const [drug, setDrug] = useState([])

  const searchQuery = ({users})=>{

  }
  useEffect(()=>{
    axios
      .get("https://refillplug.up.railway.app/admin_view/list_medication/")
      .then((response) => {
        console.log(response, typeof response);
        setDrug(response.data);
        response.data.map((data) => console.log(data.name));
      })
      .catch((error) => console.log(error));
  },[])
  
console.log('drug', drug)
  return (
    <section className="medication">
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Refillplug Medications
      </h1>
      <div className="medication-cont">
        <div className="section-slider">
          <div
            className="slider-btn-cont"
            style={{ marginLeft: "5rem", marginBottom: "1rem" }}
          >
            <div
              className="slider-01-btn"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              By Medication
            </div>
            <div
              className="slider-02-btn"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              By Condition
            </div>

          </div>

          <div className="input-cont">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="slider">
            {/* <Slide data={Users}/> */}
            <div className="slider-01">
                 <ul>
              {
                drug.map(data=><li key={data.id}>{data.name}</li>)
              }
            </ul>
            </div>
         
            
            <div className="slider-02"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionMedication;
