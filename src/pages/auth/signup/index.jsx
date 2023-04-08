import React from "react";

// config
import { signupConfig } from '../../../config'

export default (props) => {
  const handleSubmit = (data) => { };

  return <props.form {...signupConfig} onSubmit={handleSubmit} />
}; 
