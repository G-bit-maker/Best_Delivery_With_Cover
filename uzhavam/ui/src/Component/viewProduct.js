import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as DashboardAction from '../Action/DashboardAction'
import InputBox from "./Common/inputbox"
import Label from "./Common/label"
import Button from "./Common/button"
import "./products.scss"
import userimage from "../Image/userimage.png"
//import userimage from "../Image/user.jpg"
import Product from "./products"
import UserList from "./userList"
import Header from "./Common/header"
import SubHeader from "./Common/subHeader"

import { Container, Col, Row, Tabs, Tab, Table } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';

function Profile(props) {
    
  const [state,setState] = useState({
    uname:"",
    pass:"",
    tab:0
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

  
  const tabChange=(e)=>{
        console.log(e)
    setState({
        ...state,
        tab:e
        })
    }

    const tempdata = [1,2,3]

    return (
        <>
      <Header />
      <SubHeader />
         

      <Container fluid>
            <Col xs={12} sm={12} md={12} lg={12} className={" adjustRow"}>
                <h4>
                    View Products
                </h4>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} className={"listContainer adjustRow"}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quentity</th>
                    <th>Price</th>
                    <th>h4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Lengthy product name for testing</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>data</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>data</td>
                    <td>data</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td >Larry the Bird</td>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            </Col>
         
      </Container>
      </>
    );
  }
  

const mapStateToProps = (state /*, ownProps*/) => {
    console.log(state)
  return {
    counter: state.counter
  }
}

const mapDispatchToProps =(dispatch)=> { 
    return bindActionCreators(
        Object.assign({}, DashboardAction),
        dispatch
    )
 }

export default connect(
  mapStateToProps ,
  mapDispatchToProps 
)(Profile)

