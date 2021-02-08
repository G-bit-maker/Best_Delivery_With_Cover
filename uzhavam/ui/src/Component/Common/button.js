import React, { useState } from 'react';
import "./common.scss"

function Buttons(props) {
    return <button onClick={()=>props.onClick()} className={ (props.className || "") +(props.primary?" primaryBtn ":" SecondryBtn ")}>
                {props.text}
            </button>
}

export default Buttons