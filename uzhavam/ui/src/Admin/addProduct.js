import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as DashboardAction from '../Action/DashboardAction'
import "./style/products.scss"
import userimage from "../Image/userimage.png"
//import userimage from "../Image/user.jpg"
import Product from "./products"
import UserList from "./userList"
import Button from "../Common/button"
import Header from "../Common/header"
import SubHeader from "../Common/subHeader"

import { Container, Col, Row, Tabs, Tab, Table } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';

function AddProduct(props) {
    
  const [state,setState] = useState({
        productName:"",
        brand:"",
        productCategory:"",
        sku:"",
        shortDec:"",
        description:"",
        productFeatures:"",
        ProductSpec:"",
        unitWeight:"",
        weight:"",
        availableSaleQty:"",
        minSaleQty:"",
        maxSaleQty:"",
        IsStock:"No",
        mrp:"",
        sellingPrice:"",
        specialPrice:"",
        discount:"",
        discountAmt:"",
        status:"",
        mainImg:"",
        img2:"",
        img3:"",
        img4:"",
        img5:"",
        smallimg:"",
        thumimg:"",
        taxClassId:"",
        cgstp:"",
        igstp:"",
        sgstp:"",
        cgstamt:"",
        igstamt:"",
        sgstamt:"",
        groupid:"",
        metakey:"",
        proVisible:false,
        country:"INDIA",
        ean:""
    })

    const onChange=(e)=>{
        setState({
            ...state,
            [e.target.id]:e.target.value
        })
    }
    useEffect(() => {
        props.getCategory()
    }, []);

  
    const onSubmit=()=>{
        if(state.productName !=="" && state.brand !== "" && state.mrp !== ""){
            props.addProductDetails(state)
        }else{
            alert("Please enter Product name and mrp")
        }
        
    }

    return (
        <>
      <Header {...props} />
      <SubHeader />
      <Container fluid>
            <Col xs={12} sm={12} md={12} lg={12} className={"adjustRow disFlex"}>
                <Col xs={12} sm={6} md={6} lg={6} className={"adjustRow"}>
                    <h4>
                        Add Products
                    </h4>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} className={"adjustRow textCenter"}>
                    <a href="/ViewProduct">
                        View Products
                    </a>
                </Col>
            </Col>
            <Row>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" id="productName" onChange={onChange} className="form-control" placeholder="Name" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Brand</label>
                        <input type="text" id="brand" onChange={onChange} className="form-control" placeholder="Brand" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Product Category</label>
                        <select id="productCategory" onChange={onChange} className="form-control" >
                            {props.categoryList && props.categoryList.length != 0 ? props.categoryList.map(data=>{
                                return <option value={data.category}>{data.category}</option>
                            }) :""}
                        </select>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>SKU</label>
                        <input type="text" id="sku" onChange={onChange} className="form-control" placeholder="SKU" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Short Description</label>
                        <textarea type="text" id="shortDec" onChange={onChange} className="form-control" placeholder="Enter few words... " />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea type="text" id="description" onChange={onChange} className="form-control" placeholder="Enter brief description..." />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Product Features</label>
                        <input type="text" id="productFeatures" onChange={onChange} className="form-control" placeholder="Features" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Product Specification</label>
                        <input type="text" id="ProductSpec" onChange={onChange} className="form-control" placeholder="Specification" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Unit for weight</label>
                        <input type="text" id="unitWeight" onChange={onChange} className="form-control" placeholder="Unit for weight" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Weight</label>
                        <input type="text" id="weight" onChange={onChange} className="form-control" placeholder="weight" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Available sale Qty</label>
                        <input type="text" id="availableSaleQty" onChange={onChange} className="form-control" placeholder="Available sale qty" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Min Sale Qty</label>
                        <input type="text" id="minSaleQty" onChange={onChange} className="form-control" placeholder="Min sale qty" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Max Sale Qty</label>
                        <input type="text" id="maxSaleQty" onChange={onChange} className="form-control" placeholder="Max sale qty" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Is in Stock</label>
                        <select id="IsStock" onChange={onChange} className="form-control" placeholder="Available?" >
                            <option value={"Yes"}>Yes</option>
                            <option value={"No"}>No</option>
                        </select>
                        {/* <input type="text" id="IsStock" onChange={onChange} className="form-control" placeholder="Available?" /> */}
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>MRP</label>
                        <input type="text" id="mrp" onChange={onChange} className="form-control" placeholder="mrp" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Selling Price</label>
                        <input type="text" id="sellingPrice" onChange={onChange} className="form-control" placeholder="Selling price" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Special Price</label>
                        <input type="text" id="specialPrice" onChange={onChange} className="form-control" placeholder="Special price" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Discount %</label>
                        <input type="text" id="discount" onChange={onChange} className="form-control" placeholder="%" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Discount Amount</label>
                        <input type="text" id="discountAmt" onChange={onChange} className="form-control" placeholder="Discount Amount" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Status</label>
                        <input type="text" id="status" onChange={onChange} className="form-control" placeholder="Status" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Main Image</label>
                        <input type="file" id="mainImg" onChange={onChange} className="form-control" placeholder="Enter email" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Image 2</label>
                        <input type="file" id="img2" onChange={onChange} className="form-control" placeholder="Enter email" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Image 3</label>
                        <input type="file" id="img3" onChange={onChange} className="form-control" placeholder="Enter email" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Image 4</label>
                        <input type="file" id="img4" onChange={onChange} className="form-control" placeholder="Enter email" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Image 5</label>
                        <input type="file" id="img5" onChange={onChange} className="form-control" placeholder="Enter email" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Small Image</label>
                        <input type="file" id="smallimg" onChange={onChange} className="form-control" placeholder="Enter email" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Thumbnail Image</label>
                        <input type="file" id="thumimg" onChange={onChange} className="form-control" placeholder="Enter email" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Tax Class Id</label>
                        <input type="text" id="taxClassId" onChange={onChange} className="form-control" placeholder="Tax class id" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Cgst %</label>
                        <input type="text" id="cgstp" onChange={onChange} className="form-control" placeholder="%" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Igst %</label>
                        <input type="text" id="igstp" onChange={onChange} className="form-control" placeholder="%" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Sgst %</label>
                        <input type="text" id="sgstp" onChange={onChange} className="form-control" placeholder="%" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Cgst Amount</label>
                        <input type="text" id="cgstamt" onChange={onChange} className="form-control" placeholder="cgst amount" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Igst Amount</label>
                        <input type="text" id="igstamt" onChange={onChange} className="form-control" placeholder="igst amount" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Sgst Amount</label>
                        <input type="text" id="sgstamt" onChange={onChange} className="form-control" placeholder="sgst amount" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Group Id</label>
                        <input type="text" id="groupid" onChange={onChange} className="form-control" placeholder="group id" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Meta Keyword</label>
                        <input type="text" id="metakey" onChange={onChange} className="form-control" placeholder="Meta keyword" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Product Visible in Frontend</label>
                        <select id="proVisible" onChange={onChange} className="form-control" placeholder="Visible?" >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                        {/* <input type="text" id="proVisible" onChange={onChange} className="form-control" placeholder="Visible?" /> */}
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Country of Manufacture</label>
                        <input type="text" id="country" value={"INDIA"} disabled onChange={onChange} className="form-control" placeholder="Country" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Ean</label>
                        <input type="text" id="ean" onChange={onChange} className="form-control" placeholder="EAN" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={12} className={"mt20 mb30px"}>
                    <Button primary onClick={onSubmit} className={"AddProBtn"} text={"Submit"} />
                </Col>
            </Row>
         
      </Container>
      </>
    );
  }
  

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    categoryList: state.dashboardReducer.categoryList ? state.dashboardReducer.categoryList : []
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
)(AddProduct)

