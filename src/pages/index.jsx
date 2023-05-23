import React from "react";

// components
import $plan from "../components/plan";
import $banner from "../components/banner";
import $review from "../components/review";
import $started from '../components/started';
import $portfolio from "../components/portfolio";
import $subscribe from "../components/subscribe";
import BmiSection from '../components/bmi-section'

export default () => {
    return <>
        <$banner />
        <$plan />
        <$portfolio />
        <$started />
        <$review />
        <$subscribe />
        <BmiSection/>
    </>
}; 
