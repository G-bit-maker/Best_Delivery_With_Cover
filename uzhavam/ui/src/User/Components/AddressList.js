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
import "../style/checkout.scss"
import ModalComp from '../../Common/modal';
import AddAddress from './AddAddress';


export default function MediaCard(props) {

  const data=props.data
  const [state,setState] = useState({
    addNew:false
  })

  const addNewModal=(flag)=>{
    setState({
      ...state,
      addNew:flag
    })
    //props.cartUpdate(data._id,count)
  }

  return (
    <>
            <Row className={"AddressList"}>
                    <Col xs={12} sm={12} md={12} lg={6} className={"p10 "}>
                        <div className={"con "}>
                            <div>John wick</div>
                            <div>No.3 Viswa appartment,</div>
                            <div>Kasturba Nagar,</div>
                            <div>Adyar,</div>
                            <div>Chennai 600020</div>
                            <div>Tamilnadu</div>
                            <div>+91 8973204238</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} className={"p10 "}>
                        <div className={"con "} onClick={()=>addNewModal(true)}>
                            <div className={"plus mhide"}>+</div>
                            <div className={"textAlignCenter"}>Add new Address</div>
                        </div>
                    </Col>
            </Row>
            <ModalComp
                title={"Add new"}
                closeText={"Close"}
                close={()=>addNewModal(false)}
                submitText={"Save"}
                component={<AddAddress/>}
                show={state.addNew}
            />
        </>
  );
}
