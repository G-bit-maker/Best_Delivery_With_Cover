import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as DashboardAction from '../../Action/DashboardAction'
import Pagination from '@material-ui/lab/Pagination';
import "../style/products.scss"

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

  const handleChange = (event, value) => {
    console.log( value)
  };


    return (
        <>
        <Col xs={12} sm={12} md={12} lg={12} className={" adjustRow"}>
                <h4>
                    Manage Users
                </h4>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} className={"listContainer adjustRow"}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Gender</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                {props.list.map((data,i)=>{
                    return <tr key={i}>
                            <td>{data.userName || ""}</td>
                            <td>{data.email || ""}</td>
                            <td>{data.mobile || ""}</td>
                            <td>{data.gender || ""}</td>
                            <td>{data.address1 + (data.address2 && data.address1 ? ", " : "")+ data.address2}</td>
                            </tr>
                }) }
                </tbody>
            </Table>
                <Col xs={12} sm={12} md={12} lg={12} className={" adjustRow"}>
                    <Pagination className={"floatRight"} count={10} onChange={handleChange} />
                </Col>
            </Col>
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

