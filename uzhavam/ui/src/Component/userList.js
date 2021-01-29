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
         <Col xs={12} sm={3} md={3} lg={6} className={"p20 "}>
         <Row>
         {props.userList ? props.userList.map(data=>{
               return <Col xs={12} sm={3} md={3} lg={12} className={" userCon"}>
                            <div className={"borderBottom "}>
                                <Row>
                                    <Col xs={12} sm={3} md={3} lg={2} className={""}>
                                            <div className="Imagecon">
                                                <img src={userimage} />
                                            </div>
                                    </Col>
                                    <Col xs={12} sm={3} md={3} lg={10} className={"adjustRow"}>
                                            <div className="detail ">
                                                <div>
                                                    <span className="useName">
                                                        Suriya kumar
                                                    </span>
                                                <span className={"floatRight procreated"}>
                                                    Type
                                                </span>
                                                </div>
                                                <div className="">
                                                <span>
                                                    location, chennai
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

