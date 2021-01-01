import React from "react";
import { Formik} from "formik";
import { Button,Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import * as yup from "yup";

class TextBox extends React.Component {
    constructor(){
        super();
    }

    render(){
        alert(this.props.type)
        return(
            
                <Form.Control 
                type= {this.porps.type}
                name= {this.porps.name} 
                onChange = {this.porps.onChange} 
                value = {this.props.value}
                />
        )
    }
}

export default TextBox;