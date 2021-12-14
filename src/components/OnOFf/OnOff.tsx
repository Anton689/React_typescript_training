import React, {useState} from 'react';
import s from './onOff.module.css';

type PropsType = {
 //   on: boolean;
}


export const OnOff = (props: PropsType) => {
    console.log("onOff rendering");
    let [on, setOn] = useState(false);

    console.log('on: ' + on);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    };

    return (
        <div>
            <div style={onStyle} onClick={ () => {setOn(true)}}>On</div>
            <div style={offStyle} onClick={ () => {setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

