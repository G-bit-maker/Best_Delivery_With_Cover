import React from "react";
import { Button,Form,Navbar,Nav,FormControl, NavDropdown, Row, Col, Jumbotron} from 'react-bootstrap';
import { } from "react-router-dom";
import TileView from "../Common/Tileview"

class ProfileEdit extends React.Component{
    render(){
        return(
            <Row className={"common-top-margin"}>
                <Col>
                <TileView/>
                </Col>
            </Row>

            
        )
    }
}

export default ProfileEdit