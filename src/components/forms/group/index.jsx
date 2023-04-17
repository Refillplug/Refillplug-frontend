import './style.sass'
import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function (props) {
  const Tag = props?.tag || 'input';

  // states
  const [show, setShow] = React.useState(false);

  // methods
  const togglePassword = () => { setShow(prev => !prev) };

  // memo
  const PasswordIcon = React.useMemo(() => (props?.type === 'password' && show) ? AiFillEyeInvisible : AiFillEye, [show]);

  return <div className={`form-group ${props?.name}`}>
    {props?.label ? <label htmlFor={props?.name}>{props?.label}</label> : null}
    {Tag == 'input' ? <Tag {...props} type={props?.type === 'password' && show ? 'text' : props?.type} link={null} /> : <Tag></Tag>}
    {props?.type === 'password' ? <PasswordIcon onClick={togglePassword} /> : null}
    {props?.link ? <Link to={props.link?.to}>{props.link?.text}</Link> : null}
  </div>
}