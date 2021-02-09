import React from "react";
import { Button,Form,Navbar,Nav,FormControl, NavDropdown, Row, Col} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "react-router-dom";

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        }
    }

    componentDidMount = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("userType");
        window.open("/login", "_self")
    }

    render(){
        return (
            <div>
                Please Wait!..
            </div>
        )
    }
  }

export default Logout