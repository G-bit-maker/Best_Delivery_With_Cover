import React, { useState } from 'react';
import "./common.scss"

function Label(props) {
    return <label onClick={()=>props.onClose(props.text)} className={"tagClass"}>
                {props.text}
            </label>
}

export default Label