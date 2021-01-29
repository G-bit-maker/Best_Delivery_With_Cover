import React, { useState } from 'react';
import "./common.scss"

function Buttons(props) {
    return <button onClick={()=>props.onClick()} className={"btnclass "+props.className}>
                {props.text}
            </button>
}

export default Buttons