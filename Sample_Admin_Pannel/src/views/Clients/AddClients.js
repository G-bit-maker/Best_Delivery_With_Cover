import React from 'react'
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

const AddClient = () => {
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
                    <CInput id="text-input" name="text-input" placeholder="Enter the Owner's Name" />
                    {/* <CFormText>This is a help text</CFormText> */}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="Shop_Name">Shop Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Enter the Shop Name" autoComplete="email"/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password-input">Address 1:</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="password-input" name="password-input" placeholder="Enter the ShopNo." autoComplete="new-password" />
                    {/* <CFormText className="help-block">Please enter a complex password</CFormText> */}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password-input">Address 2:</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="password-input" name="password-input" placeholder="Enter the Street Name" autoComplete="new-password" />
                    {/* <CFormText className="help-block">Please enter a complex password</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>

                  <CCol md="3">
                    <CLabel htmlFor="Phone_no">Phone No.</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="Phone_no" name="Phone_no" placeholder="Enter the Phone No." />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email-Id</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Enter the Email-id" autoComplete="email"/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
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
                    <CSelect custom name="select" id="select">
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
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Choose file...
                    </CLabel>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton style = {{marginLeft : "75%"}} type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
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
                    
                </CCardBody>
            </CCard>
        </CCol>
      </CRow>
      </>
  )
}

export default AddClient
