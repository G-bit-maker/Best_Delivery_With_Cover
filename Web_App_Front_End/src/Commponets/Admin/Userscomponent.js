import {Col, Row, Table, Spinner, Form, Button} from "react-bootstrap"
import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators } from "redux";
import * as BaseAction from "../../Actions/BaseAction"
import Toster from "../Common/TosterComponent"
import BasicModel from "../Common/Model/BasicMomdel"

const headList = [
  "S.No", "User Name", "Mobile", "Email Id", "Address", "Status", "Action" 
]

class Ordercomponent extends React.Component { 
    constructor(){
        super();
        this.state={
          modelStatus: false,
          modelTitle: "",
          modelBody: "",
          leftName: "",
          rightName: "",
        }
    }

    onClickAction = (action, id, i) => {
        this.onClickActionParent(action, id, this.props.listData, i)
    }

    onClickActionParent = (action, id, listData, i) => {
      if(action === "Delete"){
        this.setState({
          modelStatus: true,
          modelTitle: "Alert",
          modelBody: "Are You Sure Want To Delete This User",
          leftName: "Close",
          rightName: "Delete",
          action,
          id
        })
        //this.props.ActionDelete(this.props.userType, "delete", "deleteUser", id)
      }else if(action === "viewMore"){
        window.open("/dashboard/view-user/"+id, "_self")
      }
    }

    leftClick = () =>{
      this.setState({
        modelStatus: false,
        modelStatus: "",
        modelTitle: "",
        modelBody: "",
        leftName: "",
        rightName: "",
        action: "",
        id: ""
      })
    }

    rightClick = () =>{
      this.decisionmaker(this.state.action, this.state.id)
    }

    decisionmaker = async(action, id) => {
      if(action === "Delete"){
        await this.props.ActionDelete(this.props.userType, "delete", "deleteUser", id)
        this.leftClick()
      }else if(action === "viewMore"){

      }
    }
    render(){
      return(
        <div className="commonfont">
          <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={""}>

                <h4 className={"float-l"}>Users</h4>

              <Col xl={6} lg={6} md={6} sm={6} xs={6} className={"float-r p-r-0"}>
                <Form className={"float-r"}>
                  <Form.Row className="align-items-center">
                    <Col xs="auto">
                      <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Enter to search e.g., Name, Email"
                      />
                    </Col>
                    <Col xs="auto">
                      <Button variant="dark" className="mb-2">
                        search
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </Col>

            </Col>
          </Row>

          <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={""}>
              <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      {headList ? 
                      headList.map((data, i)=>(
                        <th>{data}</th>
                      )) : ""}
                    </tr>
                  </thead>
                  <tbody> 
                    {this.props.pageLoading ? 
                    <td colSpan={headList.length}>
                      <Spinner animation="border" variant="dark" />
                    </td>
                    :
                    this.props.listData 
                    && this.props.listData.length !== 0 ? 
                    this.props.listData.map((data, i)=>(
                        <tr>
                          <td>{i+1}</td>
                          <td>{data.name}</td>
                          <td>{data.mobile}</td>
                          <td>{data.email}</td>
                          <td>{data.address || "NA"}</td>
                          <td>{data.swithStatus ? "Enabled" : "Disabled  "}</td>
                          <td>
                          <a
                              href={"#"}                       
                              onClick={()=>this.onClickAction("viewMore", data._id, i)}>
                              View
                            </a> /
                            <a
                              href={"#"}                       
                              onClick={()=>this.onClickAction("Delete", data._id, i)}>
                              Delete
                            </a>    
                          </td>
                        </tr>
                    )) :
                    <tr>
                      <td colSpan={headList.length}>{this.props.failure}</td>
                    </tr> 
                    }
                    
                  </tbody>
              </Table>
                  
              {/* Toster */}
              <Toster
                openState = {this.props.toster}
                severity = {this.props.error ? "error" : "success"}
                message = {this.props.failureObj.message || this.props.successObj.message}
              />

              {/* Toster */}
              <BasicModel
                showStatus = {this.state.modelStatus}
                modelTitle = {this.state.modelTitle}
                modelBody={this.state.modelBody}
                leftName={this.state.leftName}
                rightName={this.state.rightName}
                leftClick={this.leftClick}
                rightClick={this.rightClick}
              />


            </Col>

          </Row>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    pageLoading: state && state.pageLoading ? true : false,
    listData: state && state.listData ? state.listData : [],
    failure: state && state.failure ? state.failure : [],
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

export default connect(mapStateToProps, mapDispatchToProps)(Ordercomponent) 

