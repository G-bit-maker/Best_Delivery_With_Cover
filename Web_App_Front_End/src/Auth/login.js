import React from "react";
import {Form,Alert, Jumbotron, Col} from 'react-bootstrap';
import Button from "../Commponets/Common/Buttons/ButtonOut";
import {bindActionCreators } from "redux";
import {connect} from "react-redux";
import * as BaseAction from "../Actions/BaseAction";


class Login extends React.Component {
    constructor(){
        super();
        this.state={
            userName: "",
            password: ""
        }
    }

    componentDidMount = () => {  
        let hasToken = localStorage.getItem("auth")
        let hasUserType = localStorage.getItem("userType")
        if(hasToken && hasUserType){
            window.open("/dashboard", "_self")
        }
    }

    onClick = () => {
        let loginData = {
            userName: this.state.userName,
            password: this.state.password,
        }
        this.props.loginAction(loginData)
    }

    onChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <Col  xs={12} xl={12} sm={12} md={12} lg={12} className={"text-web-center m-t-50"}>
                    <Col xs={12} xl={4} sm={12} md={4} lg={4} className={"text-left"}>
                        
                        {this.props.Error ? <Alert variant="danger">
                            {this.props.Error}
                        </Alert> : null}
                        
                        <Jumbotron>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control 
                                    id = "userName"
                                    type = "email" 
                                    placeholder = "userName" 
                                    onChange = {this.onChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    id = "password"
                                    type = "password" 
                                    placeholder = "Password" 
                                    onChange = {this.onChange}
                                />
                            </Form.Group>

                        <div className={"dis-flex"}>
                            <Button
                                variant="primary" 
                                type="submit"
                                btnText={"Submit"}
                                onClick={this.onClick}
                                btnLoading={this.props.pageLoading}
                            />
                            <Col xs={12} xl={12} sm={12} md={12} lg={12} className={""}>
                                <a className={""} href={"/register"}>not register yet</a>
                            </Col>
                        </div>
                        </Jumbotron>
                    </Col>
                    <a href={""}>Copyright © 2021 Best Delivery</a>
                </Col>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Error: state && state.err ? state.err : "",
        redirectToHome: state && state.redirectToHome ? true : false,
        success: state && state.success ? state.success : "",
        pageLoading: state && state.pageLoading ? state.pageLoading : false
    }
}

const mapDispatchToProps = (dispatch) =>({
    ...bindActionCreators(BaseAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login) 