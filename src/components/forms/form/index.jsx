import './style.sass'
import React from 'react'
import Group from '../group'
import { Link } from 'react-router-dom';

export default function (props) {
    // states
    const [data, setData] = React.useState({});

    // methods
    const handleData = ({ currentTarget: t }) => { setData(prev => ({ ...prev, [t.name]: t.value })); };
    const handleSubmit = (e) => {
        e.preventDefault();
        if ('onSubmit' in props) return props.onSubmit(data);
        console.error('onSubmit method is not implemented');
    }

    return <form action="" method="post" onSubmit={handleSubmit} style={props?.style?.form}>
        <div className="title">
            <h2>{props?.header}</h2>
            {props?.subject ? <span>{props.subject}</span> : null}
        </div>
        <div className="groups">
            {props?.inputs?.map((item, key) => <Group {...item} key={item?.name || key} onChange={handleData} />)}
        </div>
        <div className="buttons">
            {props?.buttons?.map((btn, key) => <button key={key} type={btn.type} disabled={props?.loading}>{btn.text}</button>)}
        </div>
        <div className="links">
            {
                props?.links?.map((link, key) => link.text.includes('*') ? <span key={key}>
                    {link.text.slice(0, link.text.indexOf('*'))}
                    <Link to={link.to}>{link.text.slice(link.text.indexOf('*') + 1, link.text.lastIndexOf('*'))}</Link>
                    {link.text.slice(1 + link.text.lastIndexOf('*'))}
                </span> : <Link key={key} to={link.to}>{link.text}</Link>)
            }
        </div>
    </form>
} 