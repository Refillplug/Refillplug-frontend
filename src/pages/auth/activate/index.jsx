import React from "react";

import { ReActivateConfig } from '../../../config'

export default (props) => {
  const handleSubmit = (data) => { };

  return <props.form {...ReActivateConfig} onSubmit={handleSubmit} />
}; 
