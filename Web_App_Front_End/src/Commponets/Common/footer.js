import React from "react";
import { Button,Form,Navbar,Nav,FormControl, NavDropdown, Row, Col} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "react-router-dom";

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        }
    }


    render() {
        return( 
            <Navbar bg="primary" variant="dark">
                <Row lg={12}>
                    <Col lg={12}>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    </Col>
                    <Col lg={12}>
                    <Nav defaultActiveKey="/Dashboard" className="flex-column">
                        <Nav.Link href="/Dashboard">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                    </Col>
                </Row>
                
            </Navbar>
        )
    }
  }

export default Footer