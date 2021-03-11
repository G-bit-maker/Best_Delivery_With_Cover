import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as UserAction from '../Action/UserAction'
import "./style/checkout.scss"
import Header from "../Common/header"
import SubHeader from "../Common/subHeader"
import CardMedia from '@material-ui/core/CardMedia';
import {Edit,DeleteForever, RowingTwoTone} from '@material-ui/icons';

import Tags from "../Common/tags"
import ButtonCus from "../Common/button"

import userimage from "../Image/product1.jpg"
import ProductContainer from "./Components/ProductContainer"

import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';

function Profile(props) {
    
  const [state,setState] = useState({
    uname:"",
    pass:"",
    tab:0,
    productCategory:"All"
  })

  const onChange=(e)=>{
    setState({
        ...state,
        [e.target.id]:e.target.value
      })
  }
  const selectCategory=(e)=>{
    props.getProductList(e.target.value)
  }


  useEffect(() => {
    props.getCartDetails()
  }, []);
  const tagActive =(data)=>{
    console.log(data)
  }
  let temmpdata =[1,2,3,4,4]
    return (
        <>
      <Header {...props} />
      <br/>

      <Container  fluid >
        <Row className={""}>
            <Col xs={12} sm={12} md={12} lg={12} className={" "}>
              <Col xs={12} sm={12} md={12} lg={12} className={"adjustRow "}>
                <h2>
                  Check out
                </h2>
              </Col>
            </Col>
            <br/>
            <br/>
            <br/>
            <Col xs={12} sm={8} md={9} lg={8} className={" "}>
                    <Col xs={12} sm={12} md={12} lg={12} className={" "}>
                        <Row className={"listCon"}>
                                <Col xs={12} sm={12} md={12} lg={6} className={" "}>
                                    <h5>Product</h5> 
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={2} className={" textAlignCenter"}>
                                    <h6>Price</h6>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={1} className={" textAlignCenter"}>
                                    <h6>Qty</h6>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={2} className={" textAlignCenter"}>
                                    <h6>Subtotal</h6>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={1} className={" textAlignRight"}>
                                    
                                </Col>
                        </Row>
                        {props.cartProductList ? props.cartProductList.map((data,i)=>(
                                <Row className={"listCon conPad"}>
                                        <Col xs={12} sm={12} md={12} lg={2} className={" "}>
                                            <img width="100%" src={userimage} />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={4} className={" "}>
                                            <h5>{data.productName}</h5> sku:{data.SKU}
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={2} className={" textAlignCenter"}>
                                            <h6>&#x20B9;{data.mrp}</h6>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={1} className={" textAlignCenter"}>
                                            <h6>{data.count}</h6>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={2} className={" textAlignCenter"}>
                                            <h6>&#x20B9;{data.count * data.mrp}</h6>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={1} className={" textAlignRight"}>
                                            <DeleteForever fontSize="small"
                                                //onClick={()=>productRemove(data._id)} 
                                            />
                                        </Col>
                                </Row>
                        )):""}
                        
                    </Col>
            </Col>
            <Col xs={12} sm={8} md={9} lg={4} className={" "}>
                <Col xs={12} sm={8} md={9} lg={12} className={" totalCon"}>
                    <Row className={"priceRow"}>
                        <Col xs={12} sm={8} md={9} lg={7} className={" textAlignRight"}>
                            <h6>
                                CART SUMMARY
                            </h6>
                        </Col>
                        <Col xs={12} sm={8} md={9} lg={5} className={" textAlignRight"}>
                            <h6>
                                2 ITEMS
                            </h6>
                        </Col>
                    </Row>
                    <div className={"padding"}>
                    <Row className={"margin0"}>
                        <Col xs={12} sm={8} md={9} lg={7} className={" textAlignRight"}>
                            <h6>
                                SUBTOTAL
                            </h6>
                        </Col>
                        <Col xs={12} sm={8} md={9} lg={5} className={" textAlignRight"}>
                            <h6>
                            &#x20B9;699.00
                            </h6>
                        </Col>
                    </Row>
                    <Row className={"margin0"}>
                        <Col xs={12} sm={8} md={9} lg={7} className={" textAlignRight"}>
                            <h6>
                                CGST
                            </h6>
                        </Col>
                        <Col xs={12} sm={8} md={9} lg={5} className={" textAlignRight"}>
                            <h6>
                            &#x20B9;18.00
                            </h6>
                        </Col>
                    </Row>
                    <Row className={"priceRow"}>
                        <Col xs={12} sm={8} md={9} lg={7} className={" textAlignRight"}>
                            <h6>
                                SGST
                            </h6>
                        </Col>
                        <Col xs={12} sm={8} md={9} lg={5} className={" textAlignRight"}>
                            <h6>
                            &#x20B9;18.00
                            </h6>
                        </Col>
                    </Row>

                    </div>
                    <Row className={"priceRow padding"}>
                        <Col xs={12} sm={8} md={9} lg={7} className={" textAlignRight"}>
                            <h4>
                                GRAND TOTAL
                            </h4>
                        </Col>
                        <Col xs={12} sm={8} md={9} lg={5} className={" textAlignRight"}>
                            <h4>
                            &#x20B9; 699.00
                            </h4>
                        </Col>
                    </Row>
                    <Row className={""}>
                        <Col xs={12} sm={12} md={12} lg={12} className={" textAlignRight"}>
                            <br/>
                            <ButtonCus  primary 
                                className={""} text={"PROCEED TO BUY"}
                            />
                        </Col>
                    </Row>
                </Col>
            </Col>
        </Row>
         
      </Container>
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
)(Profile)

