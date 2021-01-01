import React from "react";
import "../../../css/common.css";
import "../../../css/utils.css";
import { Button,Form,Navbar,Nav,FormControl, NavDropdown, Row, Col} from 'react-bootstrap';


class ButtonOut extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            btnText: this.props.btnText,
            btnSize: this.props.btnSize,
            btnClass: this.props.btnClass,
            btnParentClass: this.props.btnParentClass,
            btnVariant: this.props.btnVariant,
            btnColor: this.props.btnColor,
        };
    }
    onClick = () =>{
        this.props.onClick()
    }
    render(){
        return(
            <div className={this.state.btnParentClass}>
                <Button variant={this.state.btnVariant} 
                        size={this.state.btnSize} 
                        color={this.state.btnColor} 
                        className={this.state.btnClass}
                        onClick={this.onClick}
                        >
                    {this.props.btnText}
                </Button>
            </div>
        )
    }
}

export default ButtonOut;