import React, { useEffect, useState } from "react";
import "./style.scss";

import { Users } from "./users";
import axios from "../../utils/axios";

function SectionMedication() {
  const [query, setQuery] = useState("");
  const [drug, setDrug] = useState([])


  console.log(drug)
  useEffect(()=>{
    axios
      .get("https://refillplug.up.railway.app/api/list_subscription_medication/")
      .then((response) => {
        setDrug(response.data);
      })
      .catch((error) => console.log(error));
  },[])

  return (
    <section className="medication">
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
       All Subscription Medications
      </h1>
<center>
      <small>
          <p>
          Search for your medications
          </p>
       </small>
</center>
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
         
            <div className="slider-01">
                 <ul>                           
              {

                drug.filter((item)=> item.name.toLowerCase().includes(query.toLowerCase())).map(data=><li key={data.id}>{data.name }- { data.drug_form }</li>)

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
