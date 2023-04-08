import React from "react";

import { loginConfig } from '../../../config'

export default (props) => {
  // methods
  const handleSubmit = (data) => { console.log(data) };

  return <props.form {...loginConfig} onSubmit={handleSubmit} />
}; 
