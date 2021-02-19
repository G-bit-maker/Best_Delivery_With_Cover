import React from 'react'
import SubNav from "../Commponets/Common/SubNav"
import ProductComponent from "../Commponets/Admin/Productcomponent"
import DashboardComponent from "../Commponets/Admin/DashboardComponent"
import Ordercomponent from "../Commponets/Admin/Ordercomponent"
import UpdateTags from "../Commponets/Admin/UpdateTags"
import Userscomponent from "../Commponets/Admin/Userscomponent"
import Clientscomponent from "../Commponets/Admin/Clientscomponent"
import Raiderscomponent from "../Commponets/Admin/Raiderscomponent"
import {connect} from "react-redux";
import {bindActionCreators } from "redux";
import * as BaseAction from "../Actions/BaseAction";


class Dashboard extends React.Component { 
    constructor(){
        super();
        this.state={ 
          winWidth: window.innerWidth,
          userType: localStorage.getItem("userType"),
          tabId: 0
        }
    }

    handleChange = (newValue) => {
      this.setState({
        tabId: newValue
      },()=>{
        let tabVal = this.state.tabId;
        if(tabVal === 3){
          this.props.GetAllCategories(this.state.userType, "get", "getAllCategories")
        }
      })
    }

    componentDidMount = () => {
      const {
          match: { params }
      } = this.props;
      this.setState({
        tabId: params.id
      },()=>{
        this.handleChange(this.state.tabId)
      })
    }

    render(){
      return(
        <div>
            <SubNav
              title={"Admin"}
              tabId={this.state.tabId}
              handleChange={this.handleChange}
              container={[
                  <DashboardComponent/>,
                  <ProductComponent/>,
                  <Ordercomponent/>,
                  <UpdateTags 
                    userType={this.state.userType}
                  />,
                  <Userscomponent/>,
                  <Clientscomponent/>,
                  <Raiderscomponent/>
              ]}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) 