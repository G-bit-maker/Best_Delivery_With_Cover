import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as DashboardAction from '../Action/DashboardAction'
import InputBox from "./Common/inputbox"
import Label from "./Common/label"
import Button from "./Common/button"
import "./dashboard.scss"
import userimage from "../Image/userimage.png"
//import userimage from "../Image/user.jpg"
import Product from "./products"
import UserList from "./userList"

import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

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
          <div className="bgDesign">
             
          </div>
      <div className="profileBackground">


      <Container>
        <Row className={"profileFullpage"}>
            <Col xs={12} sm={3} md={3} lg={12} className={" adjustRow"}>
                <Tabs onSelect={tabChange} >
                    <Tab eventKey={0} title="Product">
                        <Product productData={tempdata} />
                    </Tab>
                    <Tab eventKey={1} title="User">
                        <UserList userList={tempdata} />
                    </Tab>
                </Tabs>
            </Col>
        </Row>
         
      </Container>
      </div>
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

