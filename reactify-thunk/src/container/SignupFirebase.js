/**
 * Sign Up With Firebase
 */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';
import { Fab } from '@material-ui/core';
import { NotificationManager } from 'react-notifications';
// components
import { SessionSlider } from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';

// redux action
import {
   signupUserInFirebase,
   signinUserWithFacebook,
   signinUserWithGoogle,
   signinUserWithGithub,
   signinUserWithTwitter
} from 'Actions';

class SignupFirebase extends Component {

   state = {
      name: '',
      email: '',
      password: '',
      emailError:false,
      passwordError:false,
      nameError:false
   }

	/**
	 * On User Signup
	 */
   onUserSignUp() {
      const { email, password,name } = this.state;
     if (email !== '' && password !== '' && name !== '') {
      this.setState({
         emailError:false,
         passwordError:false,
         nameError:false
       });
       this.props.signupUserInFirebase({ email, password,name }, this.props.history);
   }else if(email === '' && password === '' && name === ''){
      this.setState({
         emailError:true,
         passwordError:true,
         nameError:true
       });
   }else if(email === '' || password === '' || name === ''){
      if(email === ''){
         this.setState({
            emailError:true,
            passwordError:false,
            nameError:false
         });
      } 
      if(password === ''){
         this.setState({
            emailError:false,
            passwordError:true,
            nameError:false
          });
      }
      if(name === ''){
         this.setState({
            emailError:false,
            passwordError:false,
            nameError:true
          });
      }
   }
   }
   static getDerivedStateFromProps(nextProps, prevState) {
      if(nextProps.signuperror){
         NotificationManager.error('Enter Valid details');  
         return false;
      }
    }

   render() {
      const { name, email, password,emailError,passwordError,nameError } = this.state;
      const { loading,signuperror } = this.props;
      return (
         <QueueAnim type="bottom" duration={2000}>
            <div className="rct-session-wrapper">
               {loading &&
                  <LinearProgress />
               }
               <AppBar position="static" className="session-header">
                  <Toolbar>
                     <div className="container">
                        <div className="d-flex justify-content-between">
                           <div className="session-logo">
                              <Link to="/">
                                 {/* <img src={AppConfig.appLogo} alt="session-logo" width="110" height="35" /> */}
                              </Link>
                           </div>
                           <div>
                              <Link to="/signin" className="mr-15 text-white">Already have an account?</Link>
                              <Button
                                 component={Link}
                                 to="/signin"
                                 variant="contained"
                                 className="btn-light"
                              >
                                 Sign In
										</Button>
                           </div>
                        </div>
                     </div>
                  </Toolbar>
               </AppBar>
               <div className="session-inner-wrapper">
                  <div className="container">
                     <div className="row row-eq-height">
                        <div className="col-sm-7 col-md-7 col-lg-8">
                           <div className="session-body text-center">
                              <div className="session-head mb-15">
                                 <h2>Get started with</h2>
                              </div>
                              <Form>
                                 <FormGroup className="has-wrapper">
                                    <Input
                                       type="text"
                                       value={name}
                                       name="user-name"
                                       id="user-name"
                                       className="has-input input-lg"
                                       placeholder="Enter Your Name"
                                       onChange={(e) => this.setState({ name: e.target.value })}
                                    />
                                    <span className="has-icon"><i className="ti-user"></i></span>
                                    {nameError ? (<span className="error">{"Enter valid name"}</span>):null}
                                 </FormGroup>
                                 <FormGroup className="has-wrapper">
                                    <Input
                                       type="mail"
                                       value={email}
                                       name="user-mail"
                                       id="user-mail"
                                       className="has-input input-lg"
                                       placeholder="Enter Email Address"
                                       onChange={(e) => this.setState({ email: e.target.value })}
                                    />
                                    <span className="has-icon"><i className="ti-email"></i></span>
                                    {emailError ? (<span className="error">{"Enter valid email"}</span>):null}
                                 </FormGroup>
                                 <FormGroup className="has-wrapper">
                                    <Input
                                       value={password}
                                       type="Password"
                                       name="user-pwd"
                                       id="pwd"
                                       className="has-input input-lg"
                                       placeholder="Password"
                                       onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                                    <span className="has-icon"><i className="ti-lock"></i></span>
                                    {passwordError ? (<span className="error">{"Enter valid password"}</span>):null}
                                 </FormGroup>
                                 <FormGroup className="mb-15">
                                    <Button
                                       className="btn-info text-white btn-block w-100"
                                       variant="contained"
                                       size="large"
                                       onClick={() => this.onUserSignUp()}>
                                       Sign Up
                            			</Button>
                                 </FormGroup>
                              </Form>
                              <p className="mb-20">or sign in with</p>
                              <Fab size="small" variant="round" className="btn-facebook mr-15 mb-20 text-white"
                                 onClick={() => this.props.signinUserWithFacebook(this.props.history)}
                              >
                                 <i className="zmdi zmdi-facebook"></i>
                              </Fab>
                              <Fab size="small" variant="round" className="btn-google mr-15 mb-20 text-white"
                                 onClick={() => this.props.signinUserWithGoogle(this.props.history)}
                              >
                                 <i className="zmdi zmdi-google"></i>
                              </Fab>
                              {/* <Fab size="small" variant="round" className="btn-twitter mr-15 mb-20 text-white"
                                 onClick={() => this.props.signinUserWithTwitter(this.props.history)}
                              >
                                 <i className="zmdi zmdi-twitter"></i>
                              </Fab>
                              <Fab size="small" variant="round" className="btn-instagram mr-15 mb-20 text-white"
                                 onClick={() => this.props.signinUserWithGithub(this.props.history)}
                              >
                                 <i className="zmdi zmdi-github-alt"></i>
                              </Fab> */}
                              <p className="text-muted">By signing up you agree to</p>
                              <p><Link to="/terms-condition" className="text-muted">Terms of Service</Link></p>
                           </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-4">
                           <SessionSlider />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </QueueAnim>
      );
   }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
   const { loading,signuperror } = authUser;
   return { loading,signuperror };
};

export default connect(mapStateToProps, {
   signupUserInFirebase,
   signinUserWithFacebook,
   signinUserWithGoogle,
   signinUserWithGithub,
   signinUserWithTwitter
})(SignupFirebase);
