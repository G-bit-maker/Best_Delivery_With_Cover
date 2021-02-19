
import {Navbar, Nav, Container, Col, Row, Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import React, { useState,useEffect } from 'react';
import session from "../session"
import * as UserAction from '../Action/UserAction'
import { ShoppingCartOutlined } from '@material-ui/icons';

function Header(props) {
    
  const [state,setState] = useState({
    userType:session.getCookie("UserType")
  })

  const onChange=(e)=>{
    setState({
        ...state,
        [e.target.id]:e.target.value
      })
  }
  useEffect(() => {
    //props.getUserDetails({userId:"5fe6338648dbce25f84702b9"})
  }, []);

  const logoutAction=()=>{
    session.delteCookies()
    props.history.push("/Login")
  }
  
    return (
        <>
         <Navbar /* fixed="top" */ collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Uzhalavam</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Nav>
                  {state.userType === "Admin" ? <Nav.Link href="#deets">Last seen: 21-02-2021</Nav.Link> : ""}
                  {state.userType != "Admin" ? 
                      <Nav.Link eventKey={1} onClick={()=>alert(props.cartList ?props.cartList.length : 0 )}>
                          <ShoppingCartOutlined />
                      </Nav.Link>
                      : ""}
                  <Nav.Link eventKey={2} onClick={logoutAction}>
                    Logout
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
         </>
    );
  }
  
  //export default Header
 const mapStateToProps = (state) => {
  return {
    cartList: state.userReducer.cartList ? state.userReducer.cartList : [],
  }
}

const mapDispatchToProps =(dispatch)=> { 
    return bindActionCreators(
        Object.assign({}, UserAction),
        dispatch
    )
 }

export default connect(
  mapStateToProps ,
  mapDispatchToProps 
)(Header) 

