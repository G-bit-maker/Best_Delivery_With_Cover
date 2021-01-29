import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as profileAction from '../Action/profileAction'
import InputBox from "./Common/inputbox"
import Label from "./Common/label"
import ButtonCus from "./Common/button"
import "./dashboard.scss"
import userimage from "../Image/userimage.png"
//import userimage from "../Image/user.jpg"

import { Container, Col, Row, Tabs, Tab, Button } from 'react-bootstrap';

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
    props.getUserDetails({userId:"5fe6338648dbce25f84702b9"})
  }, []);

  
  const tabChange=(e)=>{
        console.log(e)
    setState({
        ...state,
        tab:e
        })
    }


    return (
        <Row>
         <Col xs={12} sm={3} md={3} lg={4} className={"p20 "}>
              <div className="form-group">
                  <label>Product Name</label>
                  <input type="text" id="productName" onChange={onChange} className="form-control" placeholder="Enter product name" />
              </div>

              <div className="form-group">
                <label>Type</label>
                  <input type="text" id="productType" onChange={onChange} className="form-control" placeholder="Enter type" />
              </div>

              <div className="form-group">
                  <label>Rate</label>
                  <input type="text" id="rate" onChange={onChange} className="form-control" placeholder="Enter rate" />
              </div>

              <div className="form-group">
                  <label>Quantity</label>
                  <input type="text" id="quantity" onChange={onChange} className="form-control" placeholder="Enter quantity" />
              </div>

              <div className="form-group">
                  <label>Image</label>
                  <input type="file" id="productName" onChange={onChange} className="form-control" placeholder="Enter product name" />
              </div>
            <Button className={"floatRight"} variant="outline-dark">Add product</Button>
         </Col>
         <Col xs={12} sm={3} md={3} lg={8} className={"p20 "}>
         <Row>
         {props.productData ? props.productData.map(data=>{
               return <Col xs={12} sm={3} md={3} lg={12} className={"p20 productcon"}>
                            <div className={"ShadowBox "}>
                                <Row>
                                    <Col xs={12} sm={3} md={3} lg={3} className={""}>
                                            <div className="Imagecon">
                                                <img src={userimage} />
                                            </div>
                                    </Col>
                                    <Col xs={12} sm={3} md={3} lg={9} className={"adjustRow"}>
                                            <div className="p20 ">
                                                <div>
                                                    <span className="proName">
                                                        Product name
                                                    </span>
                                                <span className={"floatRight procreated"}>
                                                    30-01-2020
                                                </span>
                                                </div>
                                                <div className="">
                                                <span>
                                                    Type
                                                </span>
                                                </div>
                                                <div className="">
                                                <span className="proRate">
                                                    Rs 10
                                                </span>
                                                <span>
                                                    {" - "}
                                                </span>
                                                <span>
                                                    13 qty
                                                </span>
                                                </div>
                                                <div>
                                                <span className={"proDec"}>
                                                    This is the description This is the description This is the description This is the description 
                                                </span>
                                                </div>
                                            </div>
                                            
                                    </Col>
                                </Row>
                            </div>
                        </Col>
         }):""}
         </Row>
         </Col>
         
      </Row>
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
        Object.assign({}, profileAction),
        dispatch
    )
 }

export default connect(
  mapStateToProps ,
  mapDispatchToProps 
)(Profile)

