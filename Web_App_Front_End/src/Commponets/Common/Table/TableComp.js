import React from 'react'
import {Form, Col, Table} from "react-bootstrap"
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

    onClickAction = (action, id) => {
        this.props.onClickAction(action, id)
    }

    render(){
      return(
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Categories</th>
                  <th>Discription</th>
                  <th>Show Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody> 
                {this.props.listData 
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
                          onClick={()=>this.onClickAction("Edit", data._id)}>
                            Edit
                        </a> / 
                        <a
                          href={"#"}                       
                          onClick={()=>this.onClickAction("Delete", data._id)}>
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