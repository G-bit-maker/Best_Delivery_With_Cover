import React from 'react'
import {Form, Col, Row, Table} from "react-bootstrap"
import Button from "../Common/Buttons/ButtonOut";
import Switch from '@material-ui/core/Switch';
import TableComp from "../Common/Table/TableComp"
import {bindActionCreators } from "redux";
import {connect} from "react-redux";
import * as BaseAction from "../../Actions/BaseAction";
import Toster from "../Common/TosterComponent"

const headList = [
  "S.No", "Shop Name", "Email Id", "Address", "Status", "Action" 
]

class ClientComponent extends React.Component { 
    constructor(){
        super();
        this.state={
          swithStatus: true,
          shopName: "",
          ShopOwnerName: "",
          Address_1: "",
          Address_2: "",
          Phone: "",
          email: "",
          categorie: "",
          shopType: "",
          gst: "",
          brocher: ""
        }
    }

    handleChange = () => {
      this.setState({
        swithStatus : !this.state.swithStatus
      })
    }

    onChangeHandle = (e) => {   
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    onSubmit = () => {
      let urlPicker = this.state.status === "Edit" ? "updateShop" : "addShop"
      let methodePicker = this.state.status === "Edit" ? "put" : "post"
      this.props.SaveCategorieAction(this.props.userType, methodePicker, urlPicker, this.state)
    }

    onClickAction = (action, id, listData, i) => {
      if(action === "Delete"){
        this.props.ActionDelete(this.props.userType, "delete", "deleteShop", id)
      }else if(action === "Edit"){
        let data = listData[i]
        this.setState({
          swithStatus: data.swithStatus,
          shopName: data.shopName,
          ShopOwnerName: data.ShopOwnerName,
          Address_1: data.Address_1,
          Address_2: data.Address_2,
          Phone: data.Phone,
          email: data.email,
          categorie: data.categorie,
          shopType: data.shopType,
          gst: data.gst,
          _id: id,
          status: "Edit"
        })
      }
    }

    componentWillReceiveProps = (nextProps) => { 
      if(nextProps.clearStatus){
        this.setState({
          swithStatus: true,
          shopName: "",
          ShopOwnerName: "",
          Address_1: "",
          Address_2: "",
          Phone: "",
          email: "",
          categorie: "",
          shopType: "",
          gst: "",
          brocher: ""
        })
      }
  }

    render(){
      return(
        <div className={" commonfont"}>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className={"text-left p-r-25 "}>
            {this.state.status === "Edit" ? <h4 className={"border-b-2-black p-b-10"}>Edit Shop Details</h4> : <h4 className={"border-b-2-black p-b-10"}>Add Shop Details</h4>}
            
            <Row className={"m-t-30"}>
              <Col xl={3} lg={3} md={12} sm={12} xs={12} className={""}>
                <Form.Group controlId="formBasicEmail" className={""}>
                  <Form.Label>Shop Name</Form.Label>
                  <Form.Control 
                    id={"shopName"}
                    type="text" 
                    value={this.state.shopName}
                    placeholder="Categories Name" 
                    onChange={this.onChangeHandle}/>
                </Form.Group>
              </Col>

              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Owner</Form.Label>
                  <Form.Control 
                    id={"ShopOwnerName"}
                    type="text" 
                    value={this.state.ShopOwnerName}
                    placeholder="Owner`s Name" 
                    onChange={this.onChangeHandle}/>
                </Form.Group>
              </Col>

              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Address_1</Form.Label>
                  <Form.Control 
                    id={"Address_1"}
                    type="text" 
                    value={this.state.Address_1}
                    placeholder="Enter Door no., Area" 
                    onChange={this.onChangeHandle}/>
                </Form.Group>
              </Col>

              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Address_2</Form.Label>
                  <Form.Control 
                    id={"Address_2"}
                    type="text" 
                    value={this.state.Address_2}
                    placeholder="Enter City Name" 
                    onChange={this.onChangeHandle}/>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control 
                    id={"Phone"}
                    type="text" 
                    value={this.state.Phone}
                    placeholder="Enter Name" 
                    onChange={this.onChangeHandle}/>
                </Form.Group>
              </Col>
              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    id={"email"}
                    type="text" 
                    value={this.state.email}
                    placeholder="Enter Email" 
                    onChange={this.onChangeHandle}/>
                </Form.Group>
              </Col>
              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Categories</Form.Label>
                  <Form.Control 
                    id={"categorie"}
                    type="text" 
                    value={this.state.categorie}
                    placeholder="Catergories" 
                    onChange={this.onChangeHandle}/>
                </Form.Group>
              </Col>
              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Shop Type</Form.Label>
                  <Form.Control 
                    id={"shopType"}
                    type="text" 
                    value={this.state.shopType}
                    placeholder="Enter Shop Type" 
                    onChange={this.onChangeHandle}/>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>GST No.</Form.Label>
                    <Form.Control 
                      id={"gst"}                   
                      type="text" 
                      value={this.state.gst}
                      placeholder="Enter gst no.," 
                      onChange={this.onChangeHandle}/>
                  </Form.Group>
              </Col>
              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Brocher</Form.File.Label>
                    <Form.File.Input 
                      id={"brocher"}
                      value={this.state.brocher}
                      onChange={this.onChangeHandle}/>
                </Form.File>
              </Col>
              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicEmail" className={"m-t-15"}>
                    <Form.Label>Show Status</Form.Label>
                    <Switch
                      checked={this.state.swithStatus}
                      onChange={this.handleChange}
                      color="primary"
                      name="checkedB"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Form.Group>
              </Col>
              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                <Button 
                  variant="primary" 
                  type="submit"
                  btnText={this.state.status === "Edit" ? "Update" : "Submit"}
                  onClick={this.onSubmit}
                  btnLoading={this.props.buttonLoading}
                />
              </Col>
            </Row>

            <Toster
              openState = {this.props.toster}
              severity = {this.props.error ? "error" : "success"}
              message = {this.props.failureObj.message || this.props.successObj.message}
            />

          </Col>

          
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={"m-t-50"}>

              <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={"border-b-2-black float-r m-l-15 m-r-15 p-l-0"}>
                <h4 className={"float-l"}>Shop List</h4>
                  <Form className={"float-r"}>
                    <Form.Row >
                      <Col xs="auto">
                        <Form.Control
                          className="mb-2"
                          id="inlineFormInput"
                          placeholder="Enter Shop Name to search"
                        />
                      </Col>
                      <Col xs="auto">
                        <Button 
                          btnVariant="dark"
                          type="search"
                          btnText={"search"}
                          onClick={this.onSubmit}
                          btnLoading={this.props.buttonLoading}/>
                      </Col>
                    </Form.Row>
                  </Form>
                </Col>
              </Row>

              <Col xl={12} lg={12} md={12} sm={12} xs={12} className={"m-t-20"}>
                <TableComp
                  onClickAction={this.onClickAction}
                  headList={headList}
                  parentName={"shopDetails"}
                />
              </Col>

            </Col>
          
        
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    buttonLoading: state && state.buttonLoading ? state.buttonLoading : false,
    failureObj: state && state.failureObj ? state.failureObj : {},
    successObj: state && state.successObj ? state.successObj : {},
    toster: state && state.toster ? true : false,
    error: state && state.error ? true : false,
    clearStatus: state && state.clearStatus ? true : false,
  }
}

const mapDispatchToProps = (dispatch) =>({
  ...bindActionCreators(BaseAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientComponent) 

