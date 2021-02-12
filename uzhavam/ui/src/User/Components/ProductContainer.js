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
      <Col xs={12} sm={12} md={12} lg={12} className={"proCon "}>
          <CardMedia
            className={"img"}
            image={userimage}
            title="Contemplative Reptile"
          />
          <div className={"proName mt20"}>
              Product Name lengthy product
          </div>
          <div>
              <span className={"proPrice1"}>$6990</span> <span className={"offer"}>&nbsp;&nbsp;&nbsp;90% off</span>
          </div>
          <div className={"proPrice"}>
              $699
          </div>
          
          {/* <Box component="fieldset" mb={2} borderColor="transparent"> */}
                <Rating name="read-only" value={3.6} precision={0.1} readOnly size="small" /> 
                <label className={"rateUserCount"}>&nbsp;3.6 (17k)</label>
            {/* </Box> */}
            {/* <Button className={"Addbtn"} variant="contained" color="primary">
                Add to cart
            </Button> */}
          <Col xs={12} sm={12} md={12} lg={12} className={" addCartbtn "}>
            {/* <div>Add</div> */}
            {state.count ? 
            <>
              <Button className={"remove"} onClick={()=>cartUpdate(state.count-1)}>
                <Remove/> 
              </Button>
              <span className={"count"} >{state.count}</span>
              <Button className={"add"} onClick={()=>cartUpdate(state.count+1)}>
                <Add />
              </Button>
            </> 
           :
              <Button onClick={()=>cartUpdate(1)}>
                  Add
              </Button>
            }
        </Col>
      </Col>
  );
}
