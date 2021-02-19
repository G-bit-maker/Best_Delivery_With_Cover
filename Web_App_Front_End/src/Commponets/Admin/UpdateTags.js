import React from 'react'
import {Form, Col, Table} from "react-bootstrap"
import Button from "../Common/Buttons/ButtonOut";
import Switch from '@material-ui/core/Switch';
import TableComp from "../Common/Table/TableComp"
import {bindActionCreators } from "redux";
import {connect} from "react-redux";
import * as BaseAction from "../../Actions/BaseAction";
import Toster from "../Common/TosterComponent"


class Ordercomponent extends React.Component { 
    constructor(){
        super();
        this.state={
          swithStatus: true,
          categorieName: "",
          categorieDecr: "",
          fileImage: "",
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
      this.props.SaveCategorieAction(this.props.userType, "post", "saveCategorie", this.state)
    }

    onClickAction = (action, id) => {
      alert(action + id)
    }

    render(){
      return(
        <div className={"dis-flex"}>
          <Col xl={3} lg={4} md={12} sm={12} xs={12} className={"text-left border-r-2-black p-r-25 "}>
            <h4>Add Categories</h4>
            <Form.Group controlId="formBasicEmail" className={"m-t-30"}>
              <Form.Label>Categories</Form.Label>
              <Form.Control 
                id={"categorieName"}
                type="text" 
                placeholder="Categories Name" 
                onChange={this.onChangeHandle}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Discription</Form.Label>
              <Form.Control 
                id={"categorieDecr"}
                as="textarea"
                placeholder="Catergories Discription" 
                onChange={this.onChangeHandle}/>
            </Form.Group>

            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Categories Image</Form.File.Label>
              <Form.File.Input 
                id={"fileImage"}
                onChange={this.onChangeHandle}/>
            </Form.File>


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
            
            <Button 
              variant="primary" 
              type="submit"
              btnText={"submit"}
              onClick={this.onSubmit}
              btnLoading={this.props.buttonLoading}/>

            <Toster
              openState = {this.props.toster}
              severity = {this.props.error ? "error" : "success"}
              message = {this.props.failureObj.message || this.props.successObj.message}/>
          </Col>

          <Col xl={9} lg={8} md={12} sm={12} xs={12}>
            <TableComp
              onClickAction={this.onClickAction}/>
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
  }
}

const mapDispatchToProps = (dispatch) =>({
  ...bindActionCreators(BaseAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Ordercomponent) 