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

import userimage from "../../Image/userimage.png"
import "../style/products.scss"


export default function MediaCard() {

  const [state,setState] = useState({
    count:0
  })

  const cartUpdate=(data)=>{
    setState({
      ...state,
      count:data
    })
  }

  return (
      <Col xs={12} sm={12} md={12} lg={12} className={"proCon"}>
          <CardMedia
            className={"img"}
            image={userimage}
            title="Contemplative Reptile"
          />
          <Col xs={12} sm={12} md={12} lg={12} className={"adjustRow"}>
              <div className={"proName mt20"}>
                  Product Name lengthy product
              </div>
              <div>
                  <span className={"proPrice1"}>$6990</span> <span className={"offer"}>&nbsp;&nbsp;&nbsp;90% off</span>
              </div>
              <div className={"proPrice"}>
                  $699
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
