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

import userimage from "../../Image/product1.jpg"
import "../style/products.scss"

export default function MediaCard(props) {
  const data=props.data
  const [state,setState] = useState({
    count:Number(data.count) || 0
  })

  const cartUpdate=(count)=>{
    console.log(count,data.wholesale_quantity,count < data.wholesale_quantity,count < data.wholesale_quantity ? data.selling_price * count : data.special_price * count)
    if(Number.isNaN(count)){
      return false
    }
    setState({
      ...state,
      count:Number(count) || 0
    })
    let price = parseInt(count) < data.wholesale_quantity ? data.selling_price * count : data.special_price * count
    props.cartUpdate(data._id,count,price)
  }

  
  useEffect(() => {
    const count= props.data ? props.data.count || 0 : 0
    setState({
      ...state,
      count:Number(count) || 0
    })
  }, [props.data.count])

  return (
      <Col xs={12} sm={12} md={12} lg={12} className={"proCon adjustRowMob"}>
          <Col xs={4} sm={12} md={12} lg={12} className={"imgp mobileImgD adjustRow"}>
              {/* <CardMedia
                className={"img"}
                //src={data.main_img || userimage}
                title="Contemplative Reptile"
                children={<img src={data.main_img || userimage} width={"100%"} height={"100%"} className={""} />}
              />  */}
               <img src={data.main_img || userimage} className={"img"} /> 
               <span class="offer"> <span class="free_font">{(
                        ((data.mrp - (state.count < data.wholesale_quantity ? data.selling_price  : data.special_price)) /data.mrp) *100).toFixed(0)}</span>%<div class="clearfix free_font"></div>OFF </span>
          </Col>
          <Col xs={8} sm={12} md={12} lg={12} className={"adjustRow mobSizeCon"}>
              <div title={data.productName || ""} className={"proName "}>
                  {/* <h5> */}{(data.productName || "")}{/* </h5> */}
              </div>
              <div className={"proPrice"}>
                  <span className={" mrpCon"}>
                    {data.mrp ?<><span>MRP</span> 
                      <span className={"proPrice1"}>&#x20B9;{data.mrp || ""}</span> </> :""}
                  </span>
              </div>
              <div>
                <span className={state.count < data.wholesale_quantity ? "pActive" :""}>&#x20B9;{data.selling_price || ""}</span><b>/</b>
                <span className={state.count >= data.wholesale_quantity ? "pActive" :""}>&#x20B9;{data.special_price || ""}</span>
                <label className={'floatRight'}>&nbsp;&nbsp;min {data.wholesale_quantity} qty</label>
              </div>
              <div>
              
              </div>
                {/* <Rating name="read-only" value={3.6} precision={0.1} readOnly size="small" /> 
                <label className={"rateUserCount"}>&nbsp;3.6 (17k)</label> */}
                
                <Col xs={8} sm={12} md={12} lg={12} className={"adjustRow addCartbtn floatRight"}>
                  {/* <div>Add</div> */}
                  {//state.count !== 0 ? 
                  <Row>
                    <Col xs={5} sm={5} md={5} lg={5} className={" "}>
                      <Button disabled={state.count == 0 ? true : false} className={"remove"} onClick={()=>cartUpdate(state.count-1)} >
                        <Remove fontSize="small"/> 
                      </Button>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} className={"adjustRow count"}>
                      {/* <span className={""} >{state.count}</span> */}
                      <input className={""} onChange={(e)=>cartUpdate(e.target.value)} value={state.count} />
                    </Col>
                    <Col xs={5} sm={5} md={5} lg={5} className={" "}>
                      <Button className={"add"} onClick={()=>cartUpdate(state.count+1)}>
                        <Add fontSize="small"  />
                      </Button>
                    </Col>
                  </Row> 
                /* :
                    <Button onClick={()=>cartUpdate(data.wholesale_quantity)}>
                        Add
                    </Button> */
                  }
              </Col>
            </Col>
      </Col>
  );
}
