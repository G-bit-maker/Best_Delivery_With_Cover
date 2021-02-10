import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as DashboardAction from '../Action/DashboardAction'
import InputBox from "../Common/inputbox"
import Label from "../Common/label"
import Tags from "../Common/tags"
import Button from "../Common/button"
import "./style/products.scss"
import userimage from "../Image/userimage.png"
//import userimage from "../Image/user.jpg"
import Product from "./products"
import UserList from "./userList"
import Header from "../Common/header"
import SubHeader from "../Common/subHeader"

import { Container, Col, Row, Tabs, Tab, Table } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';

function UpdateTags(props) {
    
  const [state,setState] = useState({
    Category:""
  })

  const onChange=(e)=>{
    setState({
        ...state,
        [e.target.id]:e.target.value
      })
  }
  useEffect(() => {
    props.getCategory()
  }, []);

  const addRemoveCategory=(flag)=>{
      if(state.Category){
            setState({
                ...state,
                Category:""
            })
            props.AddCategory(state.Category,flag)
      }
  }


  

    return (
        <>
      <Header />
      <SubHeader />
         

      <Container fluid>
            <Col xs={12} sm={12} md={12} lg={12} className={" adjustRow"}>
                <h4>
                    Add Auto suggesion values
                </h4>
            </Col>
            <Row>
                <Col xs={12} sm={6} md={3} lg={5} className={" "}>
                    <Row>
                        <Col xs={12} sm={6} md={3} lg={10} className={" "}>
                            <div className="form-group">
                                <label>Category</label>
                                <input type="text" id="Category" value={state.Category} onChange={onChange} className="form-control" placeholder="Add Category" />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={2} className={" "}>
                            <Button text="Add" onClick={()=>addRemoveCategory("Add")} className={"mt33"} />
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={12} className={" "}>
                            {props.categoryList ? props.categoryList.map((data,i)=>{
                                return <Tags key={i} text={data.category} onClose={()=>addRemoveCategory("Remove",data._id)} />
                            }) : ""}
                        </Col>
                    </Row>
                </Col>
            </Row>
         
      </Container>
      </>
    );
  }
  

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    categoryList: state.dashboardReducer.categoryList ? state.dashboardReducer.categoryList : []
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
)(UpdateTags)

