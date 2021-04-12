import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as UserAction from '../Action/UserAction'
import "./style/dashboard.scss"
import Header from "../Common/header"
import Button from "../Common/button"
import SubHeader from "../Common/subHeader"

import Tags from "../Common/tags"

import ProductContainer from "./Components/ProductContainer"

import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { FormatListBulletedRounded } from '@material-ui/icons';
import AddressList from './Components/AddressList';

function Profile(props) {
    const [state,setState] = useState({
      failure:"",
      userName:"",
      gender:"",
      pincode:"",
      mobile:"",
      email:""
    })
    
const onChange=(e)=>{
  let id = e.target.id
  const re = /^[0-9\b]+$/;
  if(id === "mobile" || (id === "pincode" && (e.target.value && e.target.value.length < 7))){
      if(re.test(e.target.value) || e.target.value===""){
           setState({
                ...state,
                [e.target.id]:e.target.value 
            })
      }
  }else{
      setState({
          ...state,
          [e.target.id]:e.target.value
        })
  }
}

 const onProfileEdit=()=>{
     setState({
         ...state,
        profileEdit:true
     })
 }

    return (
        <>
      <Header {...props} />
      <br/>
      <br/>

      <Container /* fluid */>
        <Row className={""}>
            <Col xs={12} sm={4} md={4} lg={4} className={" "}>
                {
                    state.profileEdit ? 
                     
                            <div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" id="email" onChange={onChange} 
                                    className={"form-control"+(state.failure.email ?" error ":"")} 
                                    placeholder="Enter email" 
                                />
                                {state.failure.email ? 
                                <label className={"labelError"}>
                                    {state.failure.email}
                                </label> : 
                                ""}
                            </div>

                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" id="userName" onChange={onChange} 
                                    className={"form-control"+(state.failure.userName ?" error ":"")} 
                                    placeholder="Enter user name" 
                                />
                                {state.failure.userName ? 
                                <label className={"labelError"}>
                                    {state.failure.userName}
                                </label> : 
                                ""}
                            </div>

                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" id="mobile" onChange={onChange} 
                                    value={state.mobile}
                                    className={"form-control"+(state.failure.mobile ?" error ":"")} 
                                    placeholder="Enter mobile number" 
                                />
                                {state.failure.mobile ? 
                                <label className={"labelError"}>
                                    {state.failure.mobile}
                                </label> : 
                                ""}
                            </div>

                            <div className="form-group">
                                <label>Gender</label>
                                <select id="gender" onChange={onChange} className="form-control">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Pincode</label>
                                <input type="text" id="pincode" onChange={onChange} 
                                value={state.pincode}
                                className={"form-control"+(state.failure.pincode ?" error ":"")}  
                                placeholder="Pincode" />
                                {state.failure.pincode ? 
                                    <label className={"labelError"}>
                                    {state.failure.pincode}
                                    </label> : 
                                ""}
                            </div>
                            <br/>
                            <Button loading={false} primary text="Save"  className={"width100 mb5px"} />
                            <Button loading={false} text="Cancel" onClick={()=>setState({...state,profileEdit:false})}  className={"width100 "} />
                                
                        </div> : 
                         
                        <div>

                        <div className="form-group">
                            <label>Email</label>
                            <h6>ssuriya@gmail.com</h6>
                        </div>

                        <div className="form-group">
                            <label>User Name</label>
                            <h6>ssuriya@gmail.com</h6>
                        </div>

                        <div className="form-group">
                            <label>Mobile</label>
                            <h6>ssuriya@gmail.com</h6>
                        </div>

                        <div className="form-group">
                            <label>Gender</label>
                            <h6>ssuriya@gmail.com</h6>
                        </div>

                        <div className="form-group">
                            <label>Pincode</label>
                            <h6>ssuriya@gmail.com</h6>
                        </div>
                        <br/>
                        <Button loading={false} primary text="Edit" onClick={onProfileEdit}  className={"width100 mb5px"} />
                            
                    </div>
                }
            </Col>
            <Col xs={12} sm={6} md={6} lg={8} className={" "}>
              <AddressList select={false} />
            </Col>
        </Row>
      </Container>
      </>
    );
  }
  

const mapStateToProps = (state /*, ownProps*/) => {
    console.log(state)
  return {
    cartList: state.userReducer.cartList ? state.userReducer.cartList : [],
    categoryList: state.userReducer.categoryList ? state.userReducer.categoryList : [],
    proudctList: state.userReducer.proudctList ? state.userReducer.proudctList : []
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

