import React from "react";
import {Formik} from "formik";
import {Form,Alert,Row, Col} from 'react-bootstrap';
import Button from "../Commponets/Common/Buttons/ButtonOut";
import * as yup from "yup";
import {bindActionCreators } from "redux";
import Navbars from "../Commponets/Common/navBar";
import Constants from "../constants";   
import {connect} from "react-redux";
import * as BaseAction from "../Actions/BaseAction";
import Backdrop from "../Commponets/Common/ProgresBar/Backdrop"


class Login extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    componentDidUpdate = () => {    
        // document.title = `You clicked ${this.state.count} times`;  
        // this.props.redirectToHome ? this.props.history.push({ pathname: "/home"}) : null    
    }


    render(){
        return(
            <Formik
            initialValues = {
                {email: "",
                password: "",}
            }
    
            validationSchema = {yup.object({
                email: yup.string()
                    .strict()
                    .trim()
                    .min(3, " minimum 3 characters required")
                    .required("Please enter your register email id or user name"),
                password: yup.string()
                    .required("Please enter your password")
                    .min(5, "Minimum 5 letters required")
                    .max(15, "Maximum 15 letters required"),
            })} 
    
            onSubmit={(inputData) => {
                this.props.loginAction(inputData)
            }}
            render={
                ({ handleSubmit, handleChange, handleBlur, values, errors }) => (
                    <div className = "">
                        {this.props.pageLoading ? 
                        (
                            <Backdrop
                            enable = {true}/>
                        ): ""}
                        <Navbars
                            SiteName={Constants.site_Name}
                        />
                        <Row>
                            <Col lg={3} xs={3} sm={3}>

                            </Col>

                            <Col lg={6} xs={6} sm={6} className="jumbotron bgwhite m-t-32 border_radius_25 fadin">
                                {this.props.Error ? 
                                <Alert variant="danger">
                                    {this.props.Error}
                                </Alert> : null}
                                {this.props.success ? <Alert variant="success">
                                    {this.props.success}
                                </Alert> : null}    
                                <h2>WELCOME BACK</h2>
                                <Form autoComplete="off" onSubmit = {handleSubmit} className={"m-t-35"}>
                                    <Form.Group controlId="formBasicEmail">

                                        <div>
                                            <Form.Label className={"fload_left m-t-15"}>Email Or UserName</Form.Label>
                                            <Form.Control 
                                            type="text" 
                                            name="email"
                                            onChange = {handleChange}
                                            value = {values.email}
                                            />
                                                {errors.email?
                                                <div className = "text-danger">
                                                    {errors.email}
                                                </div>
                                                : null}
                                        </div>
                                        
                                        <div>
                                            <Form.Label className={"fload_left m-t-15"}>Password</Form.Label>
                                            <Form.Control 
                                            type="text" 
                                            name="password"
                                            onChange = {handleChange}
                                            value = {values.password}
                                            />
                                                {errors.password ? 
                                                <div className = "text-danger">
                                                    {errors.password}
                                                </div>
                                                : null}
                                        </div>
                                    </Form.Group>
                                    
                                    {/* material ui button components */}
                                    <Button 
                                        btnVariant="primary" 
                                        btnSize="medium" 
                                        btnColor="secondary" 
                                        type="submit"
                                        btnText={"Submit"}
                                        onClick={handleSubmit}>
                                    </Button>

                                    <div className="link">
                                        <a
                                        href= "#"
                                        onClick = {()=>{
                                            window.location.href = "register"
                                        }}
                                        >
                                        create new user
                                        </a>
                                    </div>
                                </Form>
                            </Col>

                            <Col lg={3} xs={3} sm={3}>

                            </Col>

                            </Row>
                            
                            {this.props.redirectToHome ? this.props.history.push({ pathname: "/Dashboard"}) : null}
                        </div>
                )
            }
        />
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