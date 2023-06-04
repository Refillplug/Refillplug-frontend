import React from "react";

// components
import $plan from "../components/plan";
import $offers from "../components/offers";
import $banner from "../components/banner";
import $review from "../components/review";
import $started from '../components/started';
import $portfolio from "../components/portfolio";
import $subscribe from "../components/subscribe";
import BmiSection from '../components/bmi-section';
import $deliverySection from '../components/deliverySection'
import SectionMedication from "../components/sectionMedication/SectionMedication";

export default () => {
    return <>
        <$banner />
        <$plan />
        <$portfolio />
        <$started /> 
        <BmiSection/>
        <$deliverySection/>
        <SectionMedication/>
        <$review />
        <$subscribe />
       
    </>
}; 
