import React from 'react'
import {Form, Col, Table, Spinner} from "react-bootstrap"
import {bindActionCreators } from "redux";
import {connect} from "react-redux";
import * as BaseAction from "../../../Actions/BaseAction";

class TableComponent extends React.Component { 
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
      console.warn(this.state)
    }

    onClickAction = (action, id, i) => {
        this.props.onClickAction(action, id, this.props.listData, i)
    }

    render(){
      return(
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  {this.props.headList ? 
                  this.props.headList.map((data, i)=>(
                    <th>{data}</th>
                  )) : ""}
                </tr>
              </thead>
              <tbody> 
                {this.props.pageLoading ? 
                <td colSpan="5">
                  <Spinner animation="border" variant="dark" />
                </td>
                :
                this.props.listData 
                && this.props.listData.length !== 0 ? 
                this.props.listData.map((data, i)=>(
                    <tr>
                      <td>{i+1}</td>
                      <td>{data.categorieName}</td>
                      <td>{data.categorieDecr}</td>
                      <td>{data.swithStatus ? "Enabled" : "Disablesd  "}</td>
                      <td>
                        <a 
                          href={"#"}
                          onClick={()=>this.onClickAction("Edit", data._id, i)}>
                            Edit
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
                  <td colSpan="5">{this.props.failure}</td>
                </tr> 
                }
                
              </tbody>
            </Table>
      )
    }
}

const mapStateToProps = (state) => {
    return {
      pageLoading: state && state.pageLoading ? true : false,
      listData: state && state.listData ? state.listData : [],
      failure: state && state.failure ? state.failure : []
    }
  }
  
  const mapDispatchToProps = (dispatch) =>({
    ...bindActionCreators(BaseAction, dispatch)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(TableComponent) 