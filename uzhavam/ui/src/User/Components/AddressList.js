import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';
import * as UserAction from '../../Action/UserAction'

import { useState,useEffect } from 'react';
import "../style/checkout.scss"
import ModalComp from '../../Common/modal';
import AddAddress from './AddAddress';


function AddressList(props) {

  const data=props.data
  const [state,setState] = useState({
    addNew:false
  })

  const addNewModal=(flag)=>{
    setState({
      ...state,
      addNew:flag
    })
    //props.cartUpdate(data._id,count)
  }

  const dataOnChange=(data)=>{
    setState({
      ...state,
      dataOnChange:data
    })
  }

  const saveAddress=()=>{
    console.log(state.dataOnChange)
    props.addressSave(state)
  }

  return (
    <>
            <Row className={"AddressList"}>
                    <Col xs={12} sm={12} md={12} lg={4} className={"p10 "}>
                        <div className={"con "}>
                            <div>John wick</div>
                            <div>No.3 Viswa appartment,</div>
                            <div>Kasturba Nagar,</div>
                            <div>Adyar,</div>
                            <div>Chennai 600020</div>
                            <div>Tamilnadu</div>
                            <div>+91 8973204238</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className={"p10 "}>
                        <div className={"con "} onClick={()=>addNewModal(true)}>
                            <div className={"plus mhide textAlignCenter"}>+</div>
                            <div className={"textAlignCenter"}>Add new Address</div>
                        </div>
                    </Col>
            </Row>
            <ModalComp
                title={"Add new"}
                closeText={"Close"}
                close={()=>addNewModal(false)}
                submitText={"Save"}
                submit={saveAddress}
                component={<AddAddress dataOnChange={dataOnChange}/>}
                show={state.addNew}
            />
        </>
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
)(AddressList)