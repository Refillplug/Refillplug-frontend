import './style.sass'
import React from 'react'
import Group from '../group'
import { Link } from 'react-router-dom';

export default function (props) {
    // states
    const [data, setData] = React.useState({});

    // methods
    const handleData = ({ currentTarget: t }) => { setData(prev => ({ ...prev, [t.name]: t.value })) };
    const handleSubmit = (e) => 'onSubmit' in props ? props.onSubmit(e, data) : (e.preventDefault(), console.error('should define an onSubmit function in form component props'));

    return <form action="" method="post" onSubmit={handleSubmit}>
        <div className="title">
            <h2>{props?.header || 'header'}</h2>
            {props?.subject ? <span>{props.subject}</span> : null}
        </div>
        <div className="input-groups">
            {props?.inputs?.map((item, key) => <Group {...item} key={item?.name || key} onChange={handleData} />)}
        </div>
        <div className="buttons">
            {props?.buttons?.map((btn, key) => <button key={key} type={btn.type}>{btn.text}</button>)}
        </div>
        <div className="links">
            {props?.links?.map((link, key) => <Link key={key} to={link.to}>{link.text}</Link>)}
        </div>
    </form>
} 
