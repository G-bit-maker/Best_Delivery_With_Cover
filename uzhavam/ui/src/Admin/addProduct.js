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
import ImageEdit from "./Components/ProImageEdit"

import { Container, Col, Row, Tabs, Tab, Table } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';

/* import createHistory from "history/createBrowserHistory";
const history = createHistory({
    forceRefresh: true
}); */

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
        ean:"",

        loading:false,
        pageType:"Add"
    })

    const onChange=(e)=>{
        console.log(state)
        setState({
            ...state,
            [e.target.id]:e.target.value
        })
    }
    const imgonChange=(id,val)=>{
        console.log(id,val)
        setState({
            ...state,
            [id]:val
        })
    }
    useEffect(() => {
        const {
            match: { params }
        } = props;
        if(params.id){
            setState({
                ...state,
                pageType:"Edit"
            })
        }
        props.getProductDetails(params.id)
        props.getCategory()
    }, []);

    useEffect( () => {
        console.log(props.productDetails);
        let details = props.productDetails
        setState({
            ...state,
            productName:details.productName,
            brand:details.brand,
            productCategory:details.category,
            sku:details.SKU,
            shortDec:details.shortdescription,
            description:details.description,
            productFeatures:details.features,
            ProductSpec:details.specs,
            unitWeight:details.unit_for_weight,
            weight:details.weight,
            availableSaleQty:details.avail_quantity,
            minSaleQty:details.min_sale_quantity,
            maxSaleQty:details.max_sale_quantity,
            IsStock:details.stock,
            mrp:details.mrp,
            sellingPrice:details.selling_price,
            specialPrice:details.special_price,
            discount:details.discount,
            discountAmt:details.discount_amount,
            status:details.status,
            mainImg:details.main_img,
            img2:details.img2,
            img3:details.img3,
            img4:details.img4,
            img5:details.img1,
            smallimg:details.small_img,
            thumimg:details.thumbnail_image,
            taxClassId:details.tax_class_id,
            cgstp:details.cgst,
            igstp:details.igst,
            sgstp:details.sgst,
            cgstamt:details.cgst_amount,
            igstamt:details.igst_amount,
            sgstamt:details.sgst_amount,
            groupid:details.group_id,
            metakey:details.meta_keyword,
            proVisible:details.product_visible,
            ean:details.ean
        })
    }, [props.productDetails])

  
    const onSubmit=()=>{
        if(state.productName !=="" && state.brand !== "" && state.mrp !== ""){
            setState({
                ...state,
                loading:true
            })
            props.addProductDetails(state)
            .then(()=>{
                setState({
                    ...state,
                    loading:false
                })
            })
        }else{
            alert("Please enter Product name and mrp")
        }
        
    }

    return (
        <>
      <Header {...props} />
      <SubHeader  {...props} />
      <Container fluid>
            <Col xs={12} sm={12} md={12} lg={12} className={"adjustRow disFlex"}>
                <Col xs={12} sm={6} md={6} lg={6} className={"adjustRow"}>
                    <h4>
                        {state.pageType === "Add" ? "Add Products" : "Edit Products"}
                    </h4>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} className={"adjustRow textAlignRight"}>
                    <a href="/ViewProduct">
                        View Products
                    </a>
                </Col>
            </Col>
            <Row>
                
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" id="productName" value={state.productName} onChange={onChange} className="form-control" placeholder="Name" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Brand</label>
                        <input type="text" id="brand" value={state.brand} onChange={onChange} className="form-control" placeholder="Brand" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Product Category</label>
                        <select id="productCategory" value={state.productCategory} onChange={onChange} className="form-control" >
                            {props.categoryList && props.categoryList.length != 0 ? props.categoryList.map(data=>{
                                return <option value={data.category}>{data.category}</option>
                            }) :""}
                        </select>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>SKU</label>
                        <input type="text" id="sku" value={state.sku} onChange={onChange} className="form-control" placeholder="SKU" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Short Description</label>
                        <textarea type="text" id="shortDec" value={state.shortDec} onChange={onChange} className="form-control" placeholder="Enter few words... " />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea type="text" id="description" value={state.description} onChange={onChange} className="form-control" placeholder="Enter brief description..." />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Product Features</label>
                        <input type="text" id="productFeatures" value={state.productFeatures} onChange={onChange} className="form-control" placeholder="Features" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Product Specification</label>
                        <input type="text" id="ProductSpec" value={state.ProductSpec} onChange={onChange} className="form-control" placeholder="Specification" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Unit for weight</label>
                        <input type="text" id="unitWeight" value={state.unitWeight} onChange={onChange} className="form-control" placeholder="Unit for weight" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Weight</label>
                        <input type="text" id="weight" value={state.weight} onChange={onChange} className="form-control" placeholder="weight" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Available sale Qty</label>
                        <input type="text" id="availableSaleQty" value={state.availableSaleQty} onChange={onChange} className="form-control" placeholder="Available sale qty" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Min Sale Qty</label>
                        <input type="text" id="minSaleQty" value={state.minSaleQty} onChange={onChange} className="form-control" placeholder="Min sale qty" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Max Sale Qty</label>
                        <input type="text" id="maxSaleQty" value={state.maxSaleQty} onChange={onChange} className="form-control" placeholder="Max sale qty" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Is in Stock</label>
                        <select id="IsStock" value={state.IsStock} onChange={onChange} className="form-control" placeholder="Available?" >
                            <option value={"Yes"}>Yes</option>
                            <option value={"No"}>No</option>
                        </select>
                        {/* <input type="text" id="IsStock" onChange={onChange} className="form-control" placeholder="Available?" /> */}
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>MRP</label>
                        <input type="text" id="mrp" value={state.mrp} onChange={onChange} className="form-control" placeholder="mrp" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Selling Price</label>
                        <input type="text" id="sellingPrice" value={state.sellingPrice} onChange={onChange} className="form-control" placeholder="Selling price" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Special Price</label>
                        <input type="text" id="specialPrice" value={state.specialPrice} onChange={onChange} className="form-control" placeholder="Special price" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Discount %</label>
                        <input type="text" id="discount" value={state.discount} onChange={onChange} className="form-control" placeholder="%" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Discount Amount</label>
                        <input type="text" id="discountAmt" value={state.discountAmt} onChange={onChange} className="form-control" placeholder="Discount Amount" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Status</label>
                        <input type="text" id="status" value={state.status} onChange={onChange} className="form-control" placeholder="Status" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Tax Class Id</label>
                        <input type="text" id="taxClassId" value={state.taxClassId} onChange={onChange} className="form-control" placeholder="Tax class id" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Cgst %</label>
                        <input type="text" id="cgstp" value={state.cgstp} onChange={onChange} className="form-control" placeholder="%" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Igst %</label>
                        <input type="text" id="igstp" value={state.igstp} onChange={onChange} className="form-control" placeholder="%" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Sgst %</label>
                        <input type="text" id="sgstp" value={state.sgstp} onChange={onChange} className="form-control" placeholder="%" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Cgst Amount</label>
                        <input type="text" id="cgstamt" value={state.cgstamt} onChange={onChange} className="form-control" placeholder="cgst amount" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Igst Amount</label>
                        <input type="text" id="igstamt" value={state.igstamt} onChange={onChange} className="form-control" placeholder="igst amount" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Sgst Amount</label>
                        <input type="text" id="sgstamt" value={state.sgstamt} onChange={onChange} className="form-control" placeholder="sgst amount" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Group Id</label>
                        <input type="text" id="groupid" value={state.groupid} onChange={onChange} className="form-control" placeholder="group id" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Meta Keyword</label>
                        <input type="text" id="metakey" value={state.metakey} onChange={onChange} className="form-control" placeholder="Meta keyword" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Product Visible in Frontend</label>
                        <select id="proVisible" value={state.proVisible} onChange={onChange} className="form-control" placeholder="Visible?" >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                        {/* <input type="text" id="proVisible" onChange={onChange} className="form-control" placeholder="Visible?" /> */}
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Country of Manufacture</label>
                        <input type="text" id="country" value={state.country} value={"INDIA"} disabled onChange={onChange} className="form-control" placeholder="Country" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Ean</label>
                        <input type="text" id="ean" value={state.ean} onChange={onChange} className="form-control" placeholder="EAN" />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Main Image</label>
                        <ImageEdit key={1} id={"mainImg"} value={state.mainImg} onChange={imgonChange} />
                        {/* <input type="file" id="mainImg" value={state.mainImg} onChange={onChange} className="form-control" placeholder="Enter email" /> */}
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Image 2</label>
                        <ImageEdit key={2} id={"img2"} value={state.img2} onChange={imgonChange} />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Image 3</label>
                        <ImageEdit key={3} id={"img3"} value={state.img3} onChange={imgonChange} />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Image 4</label>
                        <ImageEdit key={4} id={"img4"} value={state.img4} onChange={imgonChange} />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Image 5</label>
                        <ImageEdit key={5} id={"img5"} value={state.img5} onChange={imgonChange} />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Small Image</label>
                        <ImageEdit key={6} id={"smallimg"} value={state.smallimg} onChange={imgonChange} />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <label>Thumbnail Image</label>
                        <ImageEdit key={7} id={"thumimg"} value={state.thumimg} onChange={imgonChange} />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={12} className={"mt20 mb30px"}>
                    <Button loading={state.loading}  primary onClick={onSubmit} className={"AddProBtn"} text={"Submit"} />
                </Col>
            </Row>
         
      </Container>
      </>
    );
  }
  

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    categoryList: state.dashboardReducer.categoryList ? state.dashboardReducer.categoryList : [],
    productDetails: state.dashboardReducer.productDetails ? state.dashboardReducer.productDetails : ""
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

