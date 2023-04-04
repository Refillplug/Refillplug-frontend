import './style.sass'
import React from 'react'

export default function (props) {
    // states
    const [show, setShow] = React.useState(false);

    // methods
    const togglePassword = () => { setShow(prev => !prev) };

    // memo
    const PasswordIcon = React.useMemo(() => (props.type === 'password' && show) ? ({onClick}) => <span children="hide" onClick={onClick} /> : ({onClick}) => <span children="show" onClick={onClick} />, [show]);

    return <div className={`form-group`}>
        {props?.label ? <label htmlFor={props.name}>{props.label}</label> : null}
        <input type={props.type === 'password' && show ? 'text' : props.type} placeholder={props.placeholder} required={props?.required} />
        {props.type === 'password' ? <PasswordIcon onClick={togglePassword} /> : null}
    </div>
} 
