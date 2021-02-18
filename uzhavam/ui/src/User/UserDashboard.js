import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as UserAction from '../Action/UserAction'
import "./style/dashboard.scss"
import Header from "../Common/header"
import SubHeader from "../Common/subHeader"

import Tags from "../Common/tags"

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
    props.getCategory()
    props.getProductList("all")
  }, []);
  const tagActive =(data)=>{
    console.log(data)
  }

  console.log(props)
    return (
        <>
      <Header {...props} />
      <br/>
      <br/>
      <br/>

      <Container fluid>
        <Row className={""}>
            <Col xs={12} sm={3} md={3} lg={3} className={" "}>
              <Col xs={12} sm={3} md={3} lg={12} className={"adjustRow "}>
                <h3>
                  Category
                </h3>
                <br/>
              </Col>
              <Col xs={12} sm={3} md={3} lg={12} className={"adjustRow "}>
              <Tags active onActive={()=>tagActive("all")} text={"All"} />
                {props.categoryList.length != 0 ? props.categoryList.map((data,i)=>(
                    <Tags active={data.active} onActive={()=>tagActive(data,i)} text={data.category} />
                )):""}
              </Col>
            </Col>
            <Col xs={12} sm={8} md={9} lg={9} className={" "}>
              <Row className={""}>
                  <Col xs={12} sm={6} md={4} lg={3} className={" "}>
                      <ProductContainer />
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className={" "}>
                      <ProductContainer />
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className={" "}>
                      <ProductContainer />
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className={" "}>
                      <ProductContainer />
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className={" "}>
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
    categoryList: state.userReducer.categoryList ? state.userReducer.categoryList : []
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
)(Profile)

