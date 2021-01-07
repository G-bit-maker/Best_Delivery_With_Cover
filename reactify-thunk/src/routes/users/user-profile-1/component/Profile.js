/**
 * Profile Page
 */
import React, { Component } from 'react';
import { FormGroup, Input, Form, Label, Col, InputGroup, InputGroupAddon,FormText } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { NotificationManager } from 'react-notifications';
import api from 'Api';
import {Url} from "../../../../api/config";
import Cropper from 'react-cropper';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
// intlmessages
import IntlMessages from 'Util/IntlMessages';
export default class Profile extends Component {
   state={
      name:"",
      phone:"",
      line1:"",
      city:"",
      state:"",
      pincode:"",
      src:""
   }
   /**
    * On Update Profile
    */
   componentDidMount() {
		let token = localStorage.getItem('token');
		api.get(Url+"/api/users/profile/avatar",{headers:{"Authorization":token}})
			.then((response) => {
				console.log(response.data)
			})
			.catch(error => {
				// error hanlding
			})
	}
   onUpdateProfile() {
      let details = {
         name:this.state.name,
         phone:this.state.phone,
         address:{
            line1:this.state.line1,
            city:this.state.city,
            state:this.state.state,
            pincode:this.state.pincode
         }
      }
      let token = localStorage.getItem('token');
			api.post(Url+"/api/users/profile", details, {
				headers: {
              'Authorization': token,
              'content-type': 'multipart/form-data'
				}
			  })
			.then((response) => {
				NotificationManager.success('Profile Updated Successfully!');
			})
			.catch(error => {
				// error hanlding
			})
      
   }

   render() {
      return (
         <div className="profile-wrapper w-50">
            <h2 className="heading"><IntlMessages id="widgets.personalDetails" /></h2>
            <Form>
               <FormGroup row>
                  <Label for="firstName" sm={3}><IntlMessages id="components.firstName" /></Label>
                  <Col sm={9}>
                     <Input type="text" name="firstName" id="firstName" className="input-lg" onChange={(event) => this.setState({ name: event.target.value })}/>
                  </Col>
               </FormGroup>
               <FormGroup row>
                  <Label for="lastName" sm={3}><IntlMessages id="components.lastName" /></Label>
                  <Col sm={9}>
                     <Input type="text" name="lastName" id="lastName" className="input-lg" />
                  </Col>
               </FormGroup>
               <FormGroup row>
                  <Label for="occupation" sm={3}><IntlMessages id="components.occupation" /></Label>
                  <Col sm={9}>
                     <Input type="text" name="occupation" id="occupation" className="input-lg" />
                  </Col>
               </FormGroup>
               <FormGroup row>
                  <Label for="company" sm={3}><IntlMessages id="components.companyName" /></Label>
                  <Col sm={9}>
                     <Input type="text" name="company" id="company" className="input-lg mb-20" />
                     <div className="help-text d-flex p-10">
                        <i className="ti-info-alt mr-15 pt-5"></i>
                        <span>If you want your invoices addressed to a company. Leave blank to use your full name.</span>
                     </div>
                  </Col>
               </FormGroup>
               <FormGroup row>
                  <Label for="telephone" sm={3}><IntlMessages id="components.phoneNo" /></Label>
                  <Col sm={9}>
                     <Input type="tel" name="telephone" id="telephone" className="input-lg" onChange={(event) => this.setState({ phone: event.target.value })}/>
                  </Col>
               </FormGroup>
            </Form>
            <hr />
            <h2 className="heading"><IntlMessages id="components.address" /></h2>
            <Form>
               <FormGroup row>
                  <Label for="address" sm={3}><IntlMessages id="components.address" /></Label>
                  <Col sm={9}>
                     <Input type="text" name="address" id="address" className="input-lg" onChange={(event) => this.setState({ line1: event.target.value })}/>
                  </Col>
               </FormGroup>
               <FormGroup row>
                  <Label for="city" sm={3}><IntlMessages id="components.city" /></Label>
                  <Col sm={9}>
                     <Input type="text" name="city" id="city" className="input-lg" onChange={(event) => this.setState({ city: event.target.value })}/>
                  </Col>
               </FormGroup>
               <FormGroup row>
                  <Label for="state" sm={3}><IntlMessages id="components.state" /></Label>
                  <Col sm={9}>
                     <Input type="text" name="state" id="state" className="input-lg" onChange={(event) => this.setState({ state: event.target.value })}/>
                  </Col>
               </FormGroup>
               <FormGroup row>
                  <Label for="zip" sm={3}><IntlMessages id="components.zipCode" /></Label>
                  <Col sm={9}>
                     <Input type="text" name="zip" id="zip" className="input-lg" onChange={(event) => this.setState({ pincode: event.target.value })} />
                  </Col>
               </FormGroup>
            </Form>
            <hr />
            <h2 className="heading"><IntlMessages id="components.social Connection" /></h2>
            <div>
               <InputGroup className="mb-20">
                  <InputGroupAddon addonType="prepend">
                     <IconButton aria-label="facebook">
                        <i className="zmdi zmdi-facebook"></i>
                     </IconButton>
                  </InputGroupAddon>
                  <Input defaultValue="https://www.facebook.com" />
               </InputGroup>
               <InputGroup className="mb-20">
                  <InputGroupAddon addonType="prepend">
                     <IconButton aria-label="facebook">
                        <i className="zmdi zmdi-twitter"></i>
                     </IconButton>
                  </InputGroupAddon>
                  <Input defaultValue="https://www.twitter.com" />
               </InputGroup>
               <InputGroup className="mb-20">
                  <InputGroupAddon addonType="prepend">
                     <IconButton aria-label="facebook">
                        <i className="zmdi zmdi-linkedin"></i>
                     </IconButton>
                  </InputGroupAddon>
                  <Input defaultValue="https://www.linkedin.com" />
               </InputGroup>
            </div>
            <hr />
            <Button variant="contained" color="primary" className="text-white" onClick={() => this.onUpdateProfile()}><IntlMessages id="widgets.updateProfile" /></Button>
         </div>
      );
   }
}
