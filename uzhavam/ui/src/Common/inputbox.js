import React, { useState } from 'react';
import "./common.scss"

function InputBox(props) {
    return <input 
                type={props.type || ""}
                id={props.id || ""}
                onChange={e=>props.onChange(e)} 
                className={"inputBox "+(props.className || "")} 
            />
}

export default InputBox