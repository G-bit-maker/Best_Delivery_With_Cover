import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as DashboardAction from '../Action/DashboardAction'
import InputBox from "../Common/inputbox"
import Label from "../Common/label"
import Button from "../Common/button"
import "./style/products.scss"
import userimage from "../Image/userimage.png"
//import userimage from "../Image/user.jpg"
import Product from "./products"
import UserList from "./userList"
import Header from "../Common/header"
import SubHeader from "../Common/subHeader"

import { Container, Col, Row, Tabs, Tab, Table } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';

function ViewProduct(props) {
    
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
    props.getProductList()
  }, []);

  


    return (
        <>
      <Header {...props} />
      <SubHeader />
         

      <Container fluid>
            <Col xs={12} sm={12} md={12} lg={12} className={" adjustRow"}>
                <h4>
                    View Products
                </h4>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} className={"listContainer adjustRow"}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Category id</th>
                    <th>Product Category</th>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Available Qty</th>
                    <th>Max Sale Qty</th>
                    <th>Mrp</th>
                    <th>Sgst %</th>
                    <th>Cgst %</th>
                    </tr>
                </thead>
                <tbody>
                  {props.productList && props.productList.length != 0 ? props.productList.map((data,i)=>{
                    return <tr key={i}>
                              <td>{i}</td>
                              <td>{data.category || ""}</td>
                              <td>{data.productName || ""}</td>
                              <td>{data.brand || ""}</td>
                              <td>{data.avail_quantity || ""}</td>
                              <td>{data.max_sale_quantity || ""}</td>
                              <td>{data.mrp || ""}</td>
                              <td>{data.sgst || ""}</td>
                              <td>{data.cgst || ""}</td>
                            </tr>
                  }) : <tr><td colspan="100%"> <div className="textAlignCenter">No data available. click <a href="/AddProduct">here</a> to add </div></td></tr> }
                </tbody>
            </Table>
            </Col>
         
      </Container>
      </>
    );
  }
  

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    productList: state.dashboardReducer.productList ? state.dashboardReducer.productList : []
  }
}

const mapDispatchToProps =(dispatch)=> { 
    return bindActionCreators(
        Object.assign({}, DashboardAction),
        dispatch
    )
 }

export default connect(
  mapStateToProps ,
  mapDispatchToProps 
)(ViewProduct)

