import React from "react";
import { Button,Form,Navbar,Nav,FormControl, NavDropdown, Row, Col} from 'react-bootstrap';
import { } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect} from "react-redux";
import * as BaseAction from "../Actions/BaseAction";
import Constants from "../constants";
import Navbars from "../Commponets/Common/navBar";
import "../css/homeless.css";



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