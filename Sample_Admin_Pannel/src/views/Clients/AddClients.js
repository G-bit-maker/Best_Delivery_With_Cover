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

//custom components
import ClientList from "./ClientList"

//for redux
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as dashboardAction from '../../action/dashboardAction'

const AddClient = (props) => {
  
  const [state,setState] = useState({
    ownerName:"",
    shopName:"",
    address1:"",
    address2:"",
    phoneNo:"",
    email:"",
    category:"",
    type:"",
    brochure:"",
    gst:""
  })

  const onChange=(e)=>{
    setState({
        ...state,
        [e.target.id]:e.target.value
      })
  }
  const onClick=()=>{
    let data = {
      ownerName:state.ownerName,
      shopName:state.shopName,
      address1:state.address1,
      address2:state.address2,
      phone:state.phoneNo,
      email:state.email,
      category:state.category,
      shopType:state.type,
      brochure:state.brochure,
      gst:state.gst
    }
    console.log(data)
    props.createClientDetails(data)
  }
  const imageOnChange=(e)=>{
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
      console.log(e.target.result)
      state.brochure = e.target.result
    };

    reader.readAsDataURL(file);
  }

  useEffect(() => {
    props.getClientList({userId:"5fe6338648dbce25f84702b9"})
  }, []);

  return (
    <>
    <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Add Client
              <small> Details</small>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="Owner_Name">Owner Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="ownerName" onChange={onChange} name="text-input" placeholder="Enter the Owner's Name" />
                    {/* <CFormText>This is a help text</CFormText> */}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="Shop_Name">Shop Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="shopName" onChange={onChange} name="email-input" placeholder="Enter the Shop Name" autoComplete="email"/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password-input">Address 1:</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="address1" onChange={onChange} name="password-input" placeholder="Enter the ShopNo." autoComplete="new-password" />
                    {/* <CFormText className="help-block">Please enter a complex password</CFormText> */}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password-input">Address 2:</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="address2" onChange={onChange} name="password-input" placeholder="Enter the Street Name" autoComplete="new-password" />
                    {/* <CFormText className="help-block">Please enter a complex password</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>

                  <CCol md="3">
                    <CLabel htmlFor="Phone_no">Phone No.</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="phoneNo" onChange={onChange} name="Phone_no" placeholder="Enter the Phone No." />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email-Id</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email" onChange={onChange} name="email-input" placeholder="Enter the Email-id" autoComplete="email"/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Gst</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text" id="gst" onChange={onChange} name="gst" placeholder="Enter the gst id" />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" onChange={onChange} id="category">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Type</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" onChange={onChange} id="type">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md={3}>Brochure</CLabel>
                  <CCol xs="12" md="9">
                    <CCol xs="12" md="12">
                      <CInputFile onChange={(e)=>imageOnChange(e)} accept="image/*" custom id="custom-file-input"/>
                      <CLabel htmlFor="custom-file-input" variant="custom-file">
                        Choose file...
                      </CLabel>
                    </CCol>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton onClick={onClick} style = {{marginLeft : "83%"}} type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" md="6">
            <CCard>
                <CCardHeader>
                    All Client
                    <small> Details</small>
                </CCardHeader>
                <CCardBody>
                    {props.clientList ? props.clientList.map(data=>{
                      return <ClientList data={data} />
                    }):"Loading..."}
                </CCardBody>
            </CCard>
        </CCol>
      </CRow>
      </>
  )
}

const mapStateToProps = (state /*, ownProps*/) => {
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
  )(AddClient)
