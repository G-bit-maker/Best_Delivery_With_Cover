import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as UserAction from '../../Action/UserAction'
import "../style/checkout.scss"
import Inputbox from "../../Common/inputbox"
import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';

function Profile(props) {
    
  const [state,setState] = useState({
    Name:"",
    failure:""
  })

  const onChange=(e)=>{
    setState({
        ...state,
        [e.target.id]:e.target.value
      })
  }

    return (
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} className={" "}>
                <div className="form-group">
                    <label>Name</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="userName" 
                        value={state.userName} onChange={onChange} 
                        className="form-control" placeholder="your full name" 
                        error={state.failure.userName || ""}
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>House/Flat no.</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="userName" 
                        value={state.userName} onChange={onChange} 
                        className="form-control" placeholder="House/Flat no." 
                        error={state.failure.userName || ""}
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>Street/Village</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="userName" 
                        value={state.userName} onChange={onChange} 
                        className="form-control" placeholder="Street/Village" 
                        error={state.failure.userName || ""}
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>City</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="userName" 
                        value={state.userName} onChange={onChange} 
                        className="form-control" placeholder="City" 
                        error={state.failure.userName || ""}
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>State</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="userName" 
                        value={state.userName} onChange={onChange} 
                        className="form-control" placeholder="State" 
                        error={state.failure.userName || ""}
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>Pincode</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="userName" 
                        value={state.userName} onChange={onChange} 
                        className="form-control" placeholder="pincode" 
                        error={state.failure.userName || ""}
                        onlyNumber
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>Mobile</label>
                    <Inputbox type="text" id="userName" 
                        value={state.userName} onChange={onChange} 
                        className="form-control" placeholder="Mobile" 
                        error={state.failure.userName || ""}
                        onlyNumber
                    />
                </div>
            </Col>
        </Row>
    );
  }
  

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    cartProductList: state.userReducer.cartProductList ? state.userReducer.cartProductList : [],
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

