import React from "react";
import { Formik} from "formik";
import Button from "../Commponets/Common/Buttons/ButtonOut";
import {Col, Form, Alert, Jumbotron, Row } from 'react-bootstrap';
import * as yup from "yup";
import "../css/common.css";
import "../css/utils.css";
import {bindActionCreators } from "redux";
import {connect} from "react-redux";
import * as BaseAction from "../Actions/BaseAction";
import Constants from "../../src/constants";
import Backdrop from "../Commponets/Common/ProgresBar/Backdrop"


// const validate = values =>{
//     var errors = {};
//     if(!values.name){
//         errors.name = "Name is Required"
//     }else if(values.name.length > 15){
//         errors.name = "Maximum 15 characters allowd"
//     }else if(values.name.length < 3){
//         errors.name = "minimum 3 characters allowd"
//     }
//     return errors
// }


class Register extends React.Component {
    constructor(){
        super();
        this.state={
            Register:true,
            Login: false
        }
    }
    render(){
        return(
            <Formik
            initialValues = {
                {
                    name: "",
                    email: "",
                    password: "",
                    confirmpassword: "",
                    usertype: "user",
                    mobile: ""
                }
            }
            validationSchema = {
                    yup.object({
                    name: yup.string()
                        .required("Name is Required")
                        .strict()
                        .trim()
                        .min(3, " minimum 3 characters required")
                        .max(15, "Maximum 15 characters allowded"),
                    mobile: yup.string()
                        .required("Mobile Number is Required"),
                    email: yup.string()
                        .email()
                        .required("Email is required"),
                    password: yup.string()
                        .required("password is required")
                        .min(5, "Minimum 5 letters required")
                        .max(15, "Maximum 15 letters required"),
                    confirmpassword: yup.string()
                        .oneOf([yup.ref("password"),null],"Confirm password must be same as password")
                        .required("Confirm Password is required"),
                })
            }
            onSubmit={(inputData)=>this.props.registerAction(inputData)}
            render={
                ({ handleSubmit, handleChange, handleBlur, values, errors }) => (
             <div className = "">
                        {this.props.pageLoading ? 
                        (
                            <Backdrop
                            enable = {true}/>
                        ): ""}
                        <Row>
                            <Col lg={3} xs={3} sm={3}>

                            </Col>

                            <Col lg={6} xs={6} sm={6} className="jumbotron bgwhite border_radius_25 m-t-32 fadin">
                            {this.props.Error ? <Alert variant="danger">
                                {this.props.Error}
                            </Alert> : null}
                            <h2> New to {Constants.site_Name}</h2>
                            <Form autoComplete="off" onSubmit = {handleSubmit} className={"m-t-35"}>
                                <Jumbotron>
                                    <Form.Group controlId="formBasicEmail" >
                                        <div>
                                            <Form.Label className="fload_left m-t-15">Name: </Form.Label>
                                            <Form.Control  type={"text"} name={"name"} onChange = {handleChange} value = {values.name}
                                            />
                                            {errors.name ? 
                                                <div className = "text-danger">
                                                    {errors.name}
                                                </div>
                                            : null}
                                        </div>

                                        <div>
                                            <Form.Label className="fload_left m-t-15">Mobile: </Form.Label>
                                            <Form.Control  type={"text"}  name={"mobile"} onChange = {handleChange} value = {values.mobile}/>
                                            {errors.mobile? 
                                                <div className = "text-danger">
                                                    {errors.mobile}
                                                </div>
                                            : null}
                                        </div>

                                        <div>
                                            <Form.Label className="fload_left m-t-15">Email: </Form.Label>
                                            <Form.Control  type={"text"}  name={"email"} onChange = {handleChange} value = {values.email}/>
                                            {errors.email? 
                                                <div className = "text-danger">
                                                    {errors.email}
                                                </div>
                                            : null}
                                        </div>
                                        
                                        <div>
                                            <Form.Label className="fload_left m-t-15">Password: </Form.Label>
                                            <Form.Control  type={"text"} name={"password"} onChange = {handleChange} value = {values.password}/>
                                            {errors.password ? 
                                                <div className = "text-danger">
                                                    {errors.password}
                                                </div>
                                            : null}
                                        </div>

                                        <div>
                                            <Form.Label className="fload_left m-t-15">Comfirm Password: </Form.Label>
                                            <Form.Control  type={"password"} name={"confirmpassword"} onChange = {handleChange} value = {values.confirmpassword}/>
                                            {errors.confirmpassword ? 
                                                <div className = "text-danger">
                                                    {errors.confirmpassword}
                                                </div>
                                            : null}
                                        </div>
                                    </Form.Group>


                                    <Button 
                                        btnVariant="primary" 
                                        btnSize="medium" 
                                        btnColor="secondary" 
                                        btnText={"Submit"}
                                        onClick={handleSubmit}>
                                    </Button>

                                    <div className="link">
                                        <a
                                        href= "login">
                                        if already registered
                                        </a>
                                    </div>
                                </Jumbotron>
                            </Form>
                            </Col>

                            <Col lg={3} xs={3} sm={3}>

                            </Col>
                        </Row>
                        {this.props.redirectToLogin ? this.props.history.push({ pathname: "/login"}) : null}
                    </div>
                    )
                }
                />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        redirectToLogin: state && state.redirectToLogin ? state.redirectToLogin  : false,
        Error: state && state.err ? state.err : "",
        pageLoading: state && state.pageLoading ? state.pageLoading : false
    }
}

const mapDispatchToProps = (dispatch) =>({
    ...bindActionCreators(BaseAction, dispatch)
})

export default connect (mapStateToProps, mapDispatchToProps)(Register)