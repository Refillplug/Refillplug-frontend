import React from "react";

// config
import { forgotPasswordConfig } from '../../../config'
export default (props) => {
  const handleSubmit = (data) => { console.log(data) };

  return <props.form {...forgotPasswordConfig} onSubmit={handleSubmit} />
}; 
