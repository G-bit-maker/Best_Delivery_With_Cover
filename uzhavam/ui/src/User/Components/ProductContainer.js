import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

import {Add,Remove} from '@material-ui/icons';

import { useState,useEffect } from 'react';

import userimage from "../../Image/product.png"
import "../style/products.scss"


export default function MediaCard(props) {

  const data=props.data
  const [state,setState] = useState({
    count:Number(data.count) || 0
  })

  const cartUpdate=(count)=>{
    setState({
      ...state,
      count:count
    })
    props.cartUpdate(data._id,count)
  }

  return (
      <Col xs={12} sm={12} md={12} lg={12} className={"proCon"}>
          <CardMedia
            className={"img"}
            image={userimage}
            title="Contemplative Reptile"
          />
          <Col xs={12} sm={12} md={12} lg={12} className={"adjustRow"}>
              <div title={data.productName || ""} className={"proName mt20"}>
                  {data.productName || ""}
              </div>
              <div>
                {data.discount_amount ?
                  <span className={"proPrice1"}>&#x20B9;{data.discount_amount || ""}</span>  :""}
                  {data.discount ? 
                  <span className={"offer"}>&nbsp;&nbsp;&nbsp;{data.discount}% off</span> :""}
              </div>
              <div className={"proPrice"}>
                  &#x20B9;{data.mrp || ""}
              </div>
          
                <Rating name="read-only" value={3.6} precision={0.1} readOnly size="small" /> 
                <label className={"rateUserCount"}>&nbsp;3.6 (17k)</label>
           
            </Col>
          <Col xs={12} sm={12} md={8} lg={6} className={" addCartbtn "}>
            {/* <div>Add</div> */}
            {state.count ? 
            <Row>
              <Col xs={4} sm={4} md={4} lg={4} className={"adjustRow "}>
                <Button className={"remove"}>
                  <Remove fontSize="small" onClick={()=>cartUpdate(state.count-1)} /> 
                </Button>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} className={"adjustRow count"}>
                <span className={""} >{state.count}</span>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} className={"adjustRow "}>
                <Button className={"add"} onClick={()=>cartUpdate(state.count+1)}>
                  <Add fontSize="small"  />
                </Button>
              </Col>
            </Row> 
           :
              <Button onClick={()=>cartUpdate(1)}>
                  Add
              </Button>
            }
        </Col>
      </Col>
  );
}
