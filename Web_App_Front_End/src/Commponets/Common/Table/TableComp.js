import React from 'react'
import {Table, Spinner} from "react-bootstrap"
import {bindActionCreators } from "redux";
import {connect} from "react-redux";
import * as BaseAction from "../../../Actions/BaseAction";
import { ThreeSixtySharp } from '@material-ui/icons';

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
                <td colSpan={this.props.headList ? this.props.headList.length : ""}>
                  <Spinner animation="grow" variant="danger" />
                </td>
                :
                this.props.listData 
                && this.props.listData.length !== 0 ? 
                this.props.listData.map((data, i)=>(
                    <tr>
                      <td>{i+1}</td>
                      {this.props.parentName === "updateTags" ? 
                        <>
                        <td>{data.categorieName || "NA"}</td>
                        <td>{data.categorieDecr || "NA"}</td>
                        <td>{data.swithStatus ? "Enabled" : "Disabled  "}</td>
                        </>
                        : 
                        <>
                        <td>{data.shopName || "NA"}</td>
                        <td>{data.email || "NA"}</td>
                        <td>{data.Address_2 || "NA"}</td>
                        <td>{data.swithStatus ? "Enabled" : "Disabled  "}</td>
                        </>
                      }
                      
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
                        </a>/ 
                        <a
                          href={"#"}                       
                          onClick={()=>this.onClickAction("Add_Product", data._id, i)}>
                          Add Product
                        </a>
                      </td>
                    </tr>
                )) :
                <tr>
                  <td colSpan={this.props.headList ? this.props.headList.length : ""}>{this.props.failure}</td>
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