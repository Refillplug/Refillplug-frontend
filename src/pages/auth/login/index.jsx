import React from "react";

import { loginConfig } from '../../../config'
import { useMyDispatch, useMyStore } from '../../../store'

export default (props) => {
  // custom store hook
  const [{ auth }, { login }] = [useMyStore(), useMyDispatch()];

  // methods
  const handleSubmit = (data) => {
    console.log(data);
    login(data);
  };

  return <props.form {...loginConfig} onSubmit={handleSubmit} loading={auth.load} />
}; 
