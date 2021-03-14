import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as UserAction from '../../Action/UserAction'
import "../style/checkout.scss"
import Inputbox from "../../Common/inputbox"
import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';

function Profile(props) {
    
  const [state,setState] = useState({
    name:"",
    flatno:"",
    street:"",
    city:"",
    state:"",
    pincode:"",
    mobile:"",
    isGst:false,
    gst:"",
    failure:""
  })

  const onChange=(e)=>{
      if(e.target.validity.valid){
          setState({
                ...state,
                [e.target.id]:e.target.value
            })
            
        }
  }
   const gstOnChange=(e)=>{
      setState({
          ...state,
          isGst:e.target.checked,
          gst:e.target.checked ? state.gst : ""
        })
  } 
  
  useEffect(() => {
    props.dataOnChange(state)
  },[state]);

    return (
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} className={" "}>
                <div className="form-group">
                    <label>Name</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="name" 
                        value={state.name} onChange={onChange} 
                        className="form-control" placeholder="Your full name" 
                        error={state.failure.name || ""}
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>House/Flat no.</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="flatno" 
                        value={state.flatno} onChange={onChange} 
                        className="form-control" placeholder="House/Flat no." 
                        error={state.failure.flatno || ""}
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>Street/Village</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="street" 
                        value={state.street} onChange={onChange} 
                        className="form-control" placeholder="Street/Village" 
                        error={state.failure.street || ""}
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>City</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="city" 
                        value={state.city} onChange={onChange} 
                        className="form-control" placeholder="City" 
                        error={state.failure.city || ""}
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>State</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="state" 
                        value={state.state} onChange={onChange} 
                        className="form-control" placeholder="State" 
                        error={state.failure.state || ""}
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>Pincode</label>
                    <span className={"mty"}>&nbsp;*</span>
                    <Inputbox type="text" id="pincode" 
                        value={state.pincode} onChange={onChange} 
                        className="form-control" placeholder="Pincode" 
                        error={state.failure.pincode || ""}
                        onlyNumber
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>Mobile</label>
                    <Inputbox type="text" id="mobile" 
                        value={state.mobile} onChange={onChange} 
                        className="form-control" placeholder="Mobile" 
                        error={state.failure.mobile || ""}
                        onlyNumber
                    />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={" "}>
                <div className="form-group">
                    <label>GST require</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    
                        <label class="switch">
                            <input onChange={gstOnChange}  
                                checked={state.isGst}
                                type="checkbox"  
                            />
                            <span class="slider round"></span>
                        </label>
                        
                    <Inputbox type="text" id="gst" 
                        disabled={!state.isGst}
                        value={state.gst} onChange={onChange} 
                        className="form-control" placeholder="GST Number" 
                        error={state.failure.gst || ""}
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

