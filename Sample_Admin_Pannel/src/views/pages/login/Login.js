import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

//for redux
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as loginAction from '../../../action/loginAction'



const Login = (props) => {

  const [state, setState] = useState({
    userName: "",
    password: ""
  });

  const loginAction = () => {
    props.loginAction(state)
  }

  const onChangeAction = (e) =>{
    const { id, value } = e.target;
    setState(
      {
        ...state,
        [id]: value
      })
  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>

        <CRow className="justify-content-center">

          <CCol md="8">

            <CCardGroup>

              <CCard className="p-4">

                <CCardBody>

                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>

                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        id="userName"
                        type="text" 
                        placeholder="Username" 
                        autoComplete="username" 
                        onChange={onChangeAction}
                        value={state.userName}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        id="password"
                        type="password" 
                        placeholder="Password" 
                        autoComplete="current-password"
                        onChange={onChangeAction}
                        value={state.password} 
                      />
                    </CInputGroup>

                    <CRow>

                      <CCol xs="6">
                        <CButton onClick={loginAction} color="primary" className="px-4">Login</CButton>
                      </CCol>

                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>

                    </CRow>

                  </CForm>

                </CCardBody>

              </CCard>

              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
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
  )(Login)


