import React, { useState, useEffect } from 'react'
import {
    CRow,
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CTextarea,
    CInput,
    CInputFile,
    CInputRadio,
    CLabel,
    CSelect,
    CSwitch
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'

//for redux
/* import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as dashboardAction from '../../action/dashboardAction' */

const ClientList = (props) => {
  
    let data = props.data
  const [state,setState] = useState({
    
  })

  
  useEffect(() => {
    
  }, []);

  return (
    <>
    <CRow>
        <CCol xs="12" md="12">
            {data.ownerName}
        </CCol>
        <CCol xs="12" md="12">
            {data.shopName}
        </CCol>
        <CCol xs="12" md="12">
            {data.address1}
        </CCol>
        <CCol xs="12" md="12">
            {data.address2}
        </CCol>
        <CCol xs="12" md="12">
            {data.phone}
        </CCol>
        <CCol xs="12" md="12">
            {data.email}
        </CCol>
        <CCol xs="12" md="12">
            {data.category}
        </CCol>
        <CCol xs="12" md="12">
            {data.shopType}
        </CCol>
        <CCol xs="12" md="12">
            {data.brochure}
        </CCol>
        <CCol xs="12" md="12">
            {data.gst}
        </CCol>
      </CRow>
      <br/>
      <br/>
      </>
  )
}

export default ClientList
/* 
const mapStateToProps = (state ) => {
  console.log(state)
    return {
      clientList: state.dashboardReducer.clientList || []
    }
  }

  const mapDispatchToProps =(dispatch)=> { 
    return bindActionCreators(
        Object.assign({}, dashboardAction),
        dispatch
    )
  }

  export default connect(
    mapStateToProps ,
    mapDispatchToProps 
  )(AddClient) */
