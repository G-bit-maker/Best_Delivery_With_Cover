import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as DashboardAction from '../Action/DashboardAction'
import "./style/dashboard.scss"
import Header from "../Common/header"
import SubHeader from "../Common/subHeader"

import ProductContainer from "./Components/ProductContainer"

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

  console.log(props)
    return (
        <>
      <Header {...props} />
      <br/>
      <br/>
      <br/>

      <Container>
        <Row className={""}>
            <Col xs={12} sm={3} md={3} lg={12} className={" adjustRow"}>
              <Row className={""}>
                  <Col xs={12} sm={3} md={3} lg={3} className={" "}>
                      <ProductContainer />
                  </Col>
                  <Col xs={12} sm={3} md={3} lg={3} className={" "}>
                      <ProductContainer />
                  </Col>
                  <Col xs={12} sm={3} md={3} lg={3} className={" "}>
                      <ProductContainer />
                  </Col>
                  <Col xs={12} sm={3} md={3} lg={3} className={" "}>
                      <ProductContainer />
                  </Col>
              </Row>
            </Col>
        </Row>
         
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

