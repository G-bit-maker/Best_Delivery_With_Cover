/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input,FormFeedback } from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';
import { Fab } from "@material-ui/core";
import { NotificationManager } from 'react-notifications';
// components
import {
   SessionSlider
} from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';

// redux action
import {
   signinUserInFirebase,
   signinUserWithFacebook,
   signinUserWithGoogle,
   signinUserWithGithub,
   signinUserWithTwitter
} from 'Actions';

//Auth File
import Auth from '../Auth/Auth';

const auth = new Auth();

class Signin extends Component {

   state = {
      email: '',
      password: '',
      emailError:false,
      passwordError:false
   }

	/**
	 * On User Login
	 */
   onUserLogin() {
      if (this.state.email !== '' && this.state.password !== '') {
         this.setState({
            emailError:false,
            passwordError:false
          });
         this.props.signinUserInFirebase(this.state, this.props.history);
      }else if(this.state.email === '' && this.state.password === ''){
         this.setState({
            emailError:true,
            passwordError:true
          });
      }else if(this.state.email === '' || this.state.password === ''){
         if(this.state.email === ''){
            this.setState({
               emailError:true,
               passwordError:false
            });
         } 
         if(this.state.password === ''){
            this.setState({
               emailError:false,
               passwordError:true
             });
         }
      }
   }
   static getDerivedStateFromProps(nextProps, prevState) {
      if(nextProps.signinerror){
         //NotificationManager.error('Enter Valid details');  
         return false;
      }
    }
	/**
	 * On User Sign Up
	 */
   onUserSignUp() {
      this.props.history.push('/signup');
   }

   //Auth0 Login
   loginAuth0() {
      auth.login();
   }

   render() {
      const { email, password,emailError,passwordError } = this.state;
      const { loading,signinerror } = this.props;
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
                                 {/* <img src={AppConfig.appLogo} alt="session-logo" className="img-fluid" width="110" height="35" /> */}
                              </Link>
                           </div>
                           <div>
                              <a className="mr-15" onClick={() => this.onUserSignUp()}>Create New account?</a>
                              <Button variant="contained" className="btn-light" onClick={() => this.onUserSignUp()}>Sign Up</Button>
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
                              <div className="session-head mb-30">
                                 <h2 className="font-weight-bold">Get started with </h2>
                                 <p className="mb-0">Most powerful ReactJS admin panel</p>
                              </div>
                              <Form>
                                 <FormGroup className="has-wrapper">
                                    <Input
                                       type="mail"
                                       value={email}
                                       name="user-mail"
                                       id="user-mail"
                                       className="has-input input-lg"
                                       placeholder="Enter Email Address"
                                       onChange={(event) => this.setState({ email: event.target.value })}
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
                                       onChange={(event) => this.setState({ password: event.target.value })}
                                    />
                                    <span className="has-icon"><i className="ti-lock"></i></span>
                                    {passwordError ? (<span className="error">{"Enter valid password"}</span>):null}
                                 </FormGroup>
                                 <FormGroup className="mb-15">
                                    <Button
                                       color="primary"
                                       className="btn-block text-white w-100"
                                       variant="contained"
                                       size="large"
                                       onClick={() => this.onUserLogin()}
                                    >
                                       Sign In
                            			</Button>
                                 </FormGroup>
                                 <FormGroup className="mb-15">
                                    <Button
                                       variant="contained"
                                       className="btn-info btn-block text-white w-100"
                                       size="large"
                                       onClick={() => this.loginAuth0()}
                                    >
                                       Sign In With Auth0
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
                              <p className="mb-0"><a target="_blank" href="#/terms-condition" className="text-muted">Terms of Service</a></p>
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
   const { user, loading ,signinerror} = authUser;
   return { user, loading ,signinerror}
}

export default connect(mapStateToProps, {
   signinUserInFirebase,
   signinUserWithFacebook,
   signinUserWithGoogle,
   signinUserWithGithub,
   signinUserWithTwitter
})(Signin);
