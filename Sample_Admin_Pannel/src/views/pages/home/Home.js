import React from 'react'
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

//Components

import Header from "./HomeHeader"
import Body from "./HomeBody"


const Login = () => {
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
            <Header/>
            <div className="c-body">
            <Body/>
            </div>
      </div>
    </div>
  )
}

export default Login
