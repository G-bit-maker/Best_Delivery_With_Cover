import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as loginAction from '../Action/loginAction'
import InputBox from "./Common/inputbox"
import Label from "./Common/label"
import Button from "./Common/button"
import "./login.scss"

import { Container, Col, Row } from 'react-bootstrap';

import React, { useState } from 'react';

function SignUP(props) {
      const [state,setState] = useState({
        name:"",
        userName:"",
        password:"",
        cpassword:"",
        email:""
      })
      const onChange=(e)=>{
        setState({
            ...state,
            [e.target.id]:e.target.value
          })
      }
    return (
      <div className="Loginfullpage">
      <Container>
        <Row>
          <Col className={"textAlignCenter"}>
          <Col lg={5} className={"ShadowBox p10 mt80 mb30px login"}>
              <div>
                  <Label text="Sign up" className={"loginCaption mb20px"} />

                  <Label text="Name" />
                  <InputBox className={"mb15px"} id={"name"} onChange={onChange} />

                  <Label text="Email" />
                  <InputBox className={"mb15px"} id={"email"} onChange={onChange} />

                  <Label text="User Name" />
                  <InputBox className={"mb15px"} id={"userName"} onChange={onChange} />

                  <Label text="Password" />
                  <InputBox type={"Password"} className={"mb15px"} id={"password"} onChange={onChange} />

                  <Label text="Confirm Password" />
                  <InputBox type={"Password"} className={"mb30px"} id={"cpassword"} onChange={onChange} />

                <Button 
                    className={"loginBtn mb15px"}
                    text={"Sign up"}
                    onClick={()=>props.signUp(state)} 
                />

                <div className={"textAlignCenter"}>
                  <a className={"mb30px"} href={"/login"}>
                    Already have an account?
                  </a>
                </div>
                  
              </div>
          </Col>
          </Col>
        </Row>
         
      </Container>
      </div>
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
        Object.assign({}, loginAction),
        dispatch
    )
 }

export default connect(
  mapStateToProps ,
  mapDispatchToProps 
)(SignUP)

