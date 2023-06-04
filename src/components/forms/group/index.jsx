import './style.sass'
import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function (props) {
  const Tag = props?.tag || 'input';

  // states
  const [show, setShow] = React.useState(false);

  // refs
  const selfClosed = React.useRef(['input']);

  // methods
  const togglePassword = () => { setShow(prev => !prev) };

  // memo
  const PasswordIcon = React.useMemo(() => (props?.type === 'password' && show) ? AiFillEyeInvisible : AiFillEye, [show]);

  return <div className={`form-group ${props?.name}`}>
    {props?.label ? <label htmlFor={props?.name}>{props?.label}</label> : null}
    {selfClosed.current.includes(Tag) ? <Tag {...props} type={props?.type === 'password' && show ? 'text' : props?.type} link={null} /> : <Tag onChange={props?.onChange}>
      {props?.options ? props?.options?.map(opt => <option value={opt?.value} children={opt?.title} />) : null}
    </Tag>}
    {props?.type === 'password' ? <PasswordIcon onClick={togglePassword} /> : null}
    {props?.link ? <Link to={props.link?.to}>{props.link?.text}</Link> : null}
  </div>
}