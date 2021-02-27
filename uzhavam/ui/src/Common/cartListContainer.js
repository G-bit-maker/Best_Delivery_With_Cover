
import {Navbar, Nav, Container, Col, Row, Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import React, { useState,useEffect } from 'react';
import session from "../session"
import * as UserAction from '../Action/UserAction'
import { ShoppingCartOutlined } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import Popover from '@material-ui/core/Popover';

import CloseIcon from '@material-ui/icons/Close';
import userimage from "../Image/product.png"
import "./common.scss"

function Header(props) {
    
  const [state,setState] = useState({
    userType:session.getCookie("UserType")
  })

  const onChange=(e)=>{
    setState({
        ...state,
        [e.target.id]:e.target.value
      })
  }

  const list =[1,2,3,4,5]
  useEffect(() => {
    props.getCartDetails()
  }, []);

  
  
    return (
        <>
            <div className={"cartListCon"}>
                <div className={"CartList"}>
                    {props.cartProductList && props.cartProductList.length != 0 ? 
                        props.cartProductList.map((data,i)=>(
                            <Col xs={12} sm={12} md={12} lg={12} className={"CartList2"}>
                            <Row>
                                <Col xs={3} sm={3} md={3} lg={3}>
                                    <img height="50px" src={userimage}/>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={7} className={"adjustRow"}>
                                    <div className={"proName"}>{data.productName}</div>
                                    <div className={"price"}>&#x20B9;{data.mrp} x {data.count}</div>
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={2} className={"close adjustRow"}>
                                    <CloseIcon onClick={()=>props.cartUpdate(data._id,"0")} />
                                </Col>
                            </Row>
                        </Col>
                        )) :""
                    }
                        
                </div>
                <div className={"cartfooter"}>
                    Check out
                    <span className={"total"}>{props.cartProductList.length} items&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
         </>
    );
  }
  
  //export default Header
 const mapStateToProps = (state) => {
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
)(Header) 

