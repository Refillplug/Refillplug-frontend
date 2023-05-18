import React from "react";

import { signupConfig } from '../../../config'
import { useMyDispatch, useMyStore } from '../../../store'

export default (props) => {
  // custom store hook
  const [{ auth }, { register }] = [useMyStore(), useMyDispatch()];

  // effects
  React.useEffect(() => {},[auth.error])

  // methods
  const handleSubmit = (data) => {
    console.log(data);
    register(data);
  };

  return <props.form {...signupConfig} onSubmit={handleSubmit} loading={auth.load} />
}; 
