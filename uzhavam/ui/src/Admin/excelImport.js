import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as DashboardAction from '../Action/DashboardAction'
import InputBox from "../Common/inputbox"
import Label from "../Common/label"
import Button from "../Common/button"
import "./style/products.scss"
import Product from "./products"
import UserList from "./userList"
import Header from "../Common/header"
import SubHeader from "../Common/subHeader"
import {Edit,DeleteForever} from '@material-ui/icons';
import ModalComp from "../Common/modal"

import { Container, Col, Row, Tabs, Tab, Table } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';
import { TableRow } from '@material-ui/core';

import XLSX from "xlsx"
//import {OutTable, ExcelRenderer} from 'react-excel-renderer';

function ExcelImport(props) {
    
  const [state,setState] = useState({
    file:"",
    tableData:"",
    failure:""
  })

  const onChange=(e)=>{
    setState({
        ...state,
        file:e.target.files[0]
    })
  }
  useEffect(() => {
    props.getProductList()
  }, []);

  const onSubmit=(id)=>{
    if(!state.file){
      setState({
        ...state,
        errorMsg:"File can't be empty"
      })
      return false
    }
    if(state.file.type != "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
      setState({
        ...state,
        errorMsg:"Invalid file format"
      })
      return false
    }
    const reader = new FileReader();
    reader.onload = (evt) => { // evt = on_file_select event
        /* Parse data */
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, {type:'binary'});
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws/* ,{header:1} */);
        /* Update state */
        setState({
            ...state,
            errorMsg:"",
            tableData:data,
            showUpload:true,
            totalcount:0,
            resultArray:""
        })
    };
    reader.readAsBinaryString(state.file);
  }
  const onUpload=(id)=>{
      setState({
        ...state,
        upLoading:true
      })    
      let resultArray =[]
      let count = 0
      let length = state.tableData.length
      state.tableData.map((data,i)=>{
           let data2 = data
          data2.pageType = "Add" 
          props.addProductDetails(data2)
          .then(res=>{
            resultArray[i] = true
             if(res && res.success){
              count++
              resultArray[i] = true
            }else{
              resultArray[i] = false
            } 
            if(i === (length - 1)){
              setState({
                ...state,
                showUpload:false,
                upLoading:false,
                //tableData:"",
                totalcount:count,
                resultAlertmodal:true,
                resultArray:resultArray
              }) 
            }else{
               setState({
                ...state,
                resultArray:resultArray
              }) 
            }
            
          })
      })  
     /*  setState({
        ...state,
        showUpload:false,
        upLoading:false,
        //tableData:"",
        resultAlertmodal:true
      })  */
  }
  
    return (
        <> {console.log(state.resultAlertmodal)}
      <Header {...props} />
      <SubHeader  {...props} />
         

      <Container fluid>
            <Col xs={12} sm={12} md={12} lg={12} className={" adjustRow"}>
                <h4>
                    Import from excel sheet
                </h4>
                <Row>
                <Col xs={12} sm={6} md={3} lg={3} className={" "}>
                    <div className="form-group">
                        <InputBox type="file" id="file" accept={"application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}
                            onChange={onChange} className="form-control" placeholder="SKU" 
                            error={state.errorMsg}
                            //error={state.failure.file || ""}
                        />
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={2} className={" mb30px"}>
                    <Button  primary onClick={onSubmit} className={""} text={"Import"} />
                </Col>
                {state.showUpload ?
                <Col xs={12} sm={6} md={3} lg={2} className={" mb30px"}>
                    <Button loading={state.upLoading}  primary onClick={onUpload} className={""} text={"Upload"} />
                </Col> :""}
                </Row>
            </Col>
            {state.tableData ?
            <Col xs={12} sm={12} md={12} lg={12} className={"priviewTable listContainer adjustRow"}>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    {state.resultArray ?<th>#</th> :""}
                    <th>Product Category</th>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>sku</th>
                    <th>Unit for Weight</th>
                    <th>Weight</th>
                    <th>Available Qty</th>
                    <th>Min Sale Qty</th>
                    <th>Max Sale Qty</th>
                    <th>Is in stock</th>
                    <th>Mrp</th>
                    <th>Retail Price</th>
                    <th>Whole sale Price</th>
                    <th>status</th>
                    <th>Tax Class Id</th>
                    <th>Product visible in frontend</th>
                    <th>Retail qty allowed</th>
                    <th>Wholesale qty allowed</th>
                    <th>Product Features</th>
                    <th>Product Specification</th>
                    <th>Discount %</th>
                    <th>Discount Amount</th>
                    <th>Cgst %</th>
                    <th>Igst %</th>
                    <th>Sgst %</th>
                    <th>Cgst Amount</th>
                    <th>Igst Amount</th>
                    <th>Sgst Amount</th>
                    <th>Group Id</th>
                    <th>Meta Keyword</th>
                    <th>Ean</th>
                    <th>Short Description</th>
                    <th>Description</th>
                    <th>Main Image</th>
                    <th>Image 2</th>
                    <th>Image 3</th>
                    <th>Image 4</th>
                    <th>Image 5</th>
                    <th>Small Image</th>
                    <th>Thumbnail Image</th>
                    {/* <th style={{width:"6%"}}>#</th> */}
                    </tr>
                </thead>
                <tbody>
                  {state.tableData && state.tableData.length != 0 ? state.tableData.map((data,i)=>{
                    return <tr key={i}>
                              {state.resultArray ?<td>{state.resultArray[i]? <>&#10003;</> :<>&#x2715;</>}</td> :""}
                              <td>{data.productCategory || ""}</td>
                              <td>{data.productName || ""}</td>
                              <td>{data.brand || ""}</td>
                              <td>{data.sku || ""}</td>
                              <td>{data.unitWeight || ""}</td>
                              <td>{data.weight || ""}</td>
                              <td>{data.availableSaleQty || ""}</td>
                              <td>{data.minSaleQty || ""}</td>
                              <td>{data.maxSaleQty || ""}</td>
                              <td>{data.IsStock || ""}</td>
                              <td>&#x20B9;{data.mrp || ""}</td>
                              <td>&#x20B9;{data.retailPrice || ""}</td>
                              <td>&#x20B9;{data.wholeSalePrice || ""}</td>
                              <td>{data.status || ""}</td>
                              <td>{data.taxClassId || ""}</td>
                              <td>{data.proVisible || ""}</td>
                              <td>{data.retailQtyAllowed || ""}</td>
                              <td>{data.wholsaleQtyAllowed || ""}</td>
                              <td>{data.productFeatures || ""}</td>
                              <td>{data.ProductSpec || ""}</td>
                              <td>{data.discount || ""}</td>
                              <td>{data.discountAmt || ""}</td>
                              <td>{data.cgstp || ""}</td>
                              <td>{data.igstp || ""}</td>
                              <td>{data.sgstp || ""}</td>
                              <td>&#x20B9;{data.cgstamt || ""}</td>
                              <td>&#x20B9;{data.igstamt || ""}</td>
                              <td>&#x20B9;{data.sgstamt || ""}</td>
                              <td>{data.groupid || ""}</td>
                              <td>{data.metakey || ""}</td>
                              <td>{data.ean || ""}</td>
                              <td>{data.shortDec ? <span title={data.shortDec}>{data.shortDec.slice(0,5)+"..."}</span> : ""}</td>
                              <td>{data.description ? <span title={data.description}>{data.description.slice(0,5)+"..."}</span> : ""}</td>
                              <td>{data.mainImg  ? <a href={data.mainImg}>Img</a> : ""}</td>
                              <td>{data.img2 ? <a href={data.img2}>Img</a> : ""}</td>
                              <td>{data.img3 ? <a href={data.img3}>Img</a> : ""}</td>
                              <td>{data.img4 ? <a href={data.img4}>Img</a> : ""}</td>
                              <td>{data.img5 ? <a href={data.img5}>Img</a> : ""}</td>
                              <td>{data.smallimg ? <a href={data.smallimg}>Img</a> : ""}</td>
                              <td>{data.thumimg ? <a href={data.thumimg}>Img</a> : ""}</td>
                              {/* <td>
                                  &nbsp;
                                <Edit fontSize="small"
                                  onClick={()=>props.history.push("/EditProduct/"+data._id)} 
                                  />
                                <div className={"floatRight"}>
                                  <DeleteForever fontSize="small"
                                    onClick={()=>productRemove(data._id)} 
                                />
                                &nbsp;
                                </div>
                                
                              </td> */}
                            </tr>
                  }) : <tr><td colspan="100%"> <div className="textAlignCenter">No data available </div></td></tr> }
                </tbody>
            </Table>
            </Col>
              : ""}
             <ModalComp
                size={"sm"}
                title={"Result"}
                closeText={"Ok"}
                close={()=> setState({...state,resultAlertmodal:false}) }
                /* submitText={"Yes"}
                submitLoading={state.modalLoading}
                submit={productRemoveConfirmation} */
                component={
                  <Row>
                      <Col xs={12} sm={12} md={12} lg={12} className={" "}>
                          {state.totalcount ? "There are "+state.totalcount+" records are uploaded succefully" : "Something wrong in the records"}
                      </Col>
                  </Row>
                }
                show={state.resultAlertmodal}
            /> 
            {/* state.removeAlert ? 
              <div className={"CustomAlert"}>
                  {state.removeAlert} 
                  <span onClick={()=>setState({...state,removeAlert:""})}>&times;</span>
              </div>
            :""  
             */}
      </Container>
      </>
    );
  }
  

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    productList: state.dashboardReducer.productList ? state.dashboardReducer.productList : [],
    at: state.dashboardReducer.at ? state.dashboardReducer.at : "",
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
)(ExcelImport)

