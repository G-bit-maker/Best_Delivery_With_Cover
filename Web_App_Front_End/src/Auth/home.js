import React from "react";
import { Button,Form,Navbar,Nav,FormControl, NavDropdown, Row, Col} from 'react-bootstrap';
import { } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect} from "react-redux";
import * as BaseAction from "../Actions/BaseAction";
import Constants from "../constants";
import Navbars from "../Commponets/Common/navBar";
import "../css/homeless.css";
import ButtonComp from "../Commponets/Common/Buttons/ButtonOut"



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            name : localStorage.getItem("name"),
            userType : localStorage.getItem("userType")
        }
    }

    componentDidMount(){
        this.setState({
            userType: localStorage.getItem("userType")
        })
        //this.props.getDetailsAction()
    }

    onExplore = ()=>{
        alert("your are clicking Explore")
    }


    render() {
        return( 
        <div>
            <Navbars
                SiteName={Constants.site_Name}
                Menus = {Constants.nav_Menus}
                DropDown = {Constants.DropMenu}
                UserName = {this.state.name}
                userType = {this.state.userType}
                pageName = {"Home"}
            />
            {this.state.userType === "admin" ? 
            (
                <div>
                    
                </div>
            )
            :   <div className={"padding-rl-0"}>
                    <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 homecomponent rl_padd_o"}>
                        <div className={"col-lg-7 col-md-7 col-sm-7 col-xs-7 home_comp"}>
                            <h3 className={"first_h p-t-100 p-b-50 easyoutclass"}>Quality Dental service in Our Thuraiyur</h3>
                            <p className="fs-35 p-b-50 easyoutclass" >We take care about your tooth</p>
                            <ButtonComp
                                btnVariant="success" 
                                btnParentClass={"col-lg-12 col-md-12 col-sm-12 col-xs-12 font-size-1 text-left padding-rl-0"}
                                btnClass={"b-r-30 hero-btn font-size-1"}
                                btnText={"Explore Services"}
                                onClick={this.onExplore}
                            />
                        </div>
                        <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 second-home padd50"} id="welcome">
                        <h1>welcome</h1>
                    </div>
                    </div>
                    
                </div>
            }
        </div>

        )
    }
  }

const mapStateToProps = (state) => {
    return {
        Home: state && state.Name ? state.Name  : "",
        ReducerAge: state && state.Age ? state.Age  : "",
        token_data: state && state.token_data ? state.token_data : "",
        userDetails: state && state.userDetails ? state.userDetails : "",

    }
}

const mapDispatchToProps = (dispatch) =>({
    ...bindActionCreators(BaseAction, dispatch)
})

export default connect (mapStateToProps, mapDispatchToProps)(Home)