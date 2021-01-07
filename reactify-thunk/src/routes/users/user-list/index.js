/**
 * User List
 */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
// api
import api from 'Api';
import {Url} from "../../../api/config";

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import { RctCard } from 'Components/RctCard';
import {
	Pagination,
	PaginationItem,
	PaginationLink,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
   Badge,
   Form, FormGroup, Label, Input
} from 'reactstrap';
export default class UserComponent extends Component {

   state = {
      users: null,
      openViewUserDialog:false,
      selectedUser:null,
      UpdateUserModal:false,
      status:"",
      role:"",
   }

   componentDidMount() {
      this.getUsers();
   }
   onAddUpdateUserModalClose=()=>{
    this.setState({
       UpdateUserModal:false
    });  
   }
   updateUser=()=>{
      let {details,role,status} = this.state;
      let users = {
         role:role ? parseInt(role):"",
         status:status ? parseInt(status):""
      }
      let token = localStorage.getItem('token');
      api.put(Url+"/api/users/"+details._id, users, {
         headers: {
           'Authorization': token
         }
        })
      .then((response) => {				
         this.setState({
            UpdateUserModal: false,
         },()=>{
            this.getUsers();
         })
      })
      .catch(error => {
         // error hanlding
      })
   }
   // get users
   getUsers() {
      let token = localStorage.getItem('token');
      api.get(Url+"/api/users",{headers:{"Authorization":token}})
         .then((response) => {
            this.setState({ users: response.data.data });
         })
         .catch(error => {
            // error handling
         })
   }
   getUserDetails=(id)=>{
      let token = localStorage.getItem('token');
      api.get(Url+"/api/users/"+id,{headers:{"Authorization":token}})
         .then((response) => {
            this.setState({ openViewUserDialog:true,selectedUser:response.data  });
         })
         .catch(error => {
            // error handling
         })
   }
   onEditUser(user) {
      this.setState({
         details:user,
         role:user.role,
         status:user.status,
         UpdateUserModal:true
      });
		//this.setState({ addNewUserModal: true, addNewUserDetail: user,editUser: user });
   }
   onChangeAddNewUserDetails=(key, value)=> {
		this.setState({
				[key]: value
		});
	}
   render() {
      const { users,selectedUser } = this.state;
      return (
         <div className="user-list-wrapper">
            <Helmet>
               <title>Reactify | Users List</title>
               <meta name="description" content="Reactify Widgets" />
            </Helmet>
            <PageTitleBar title={<IntlMessages id="sidebar.userList" />} match={this.props.match} />
            <div className="row">
               {users && users.map((user, key) => (
                  <RctCard customClasses="p-10" colClasses="col-sm-6 col-lg-4 col-xl-3" key={key}>
                     {/* <img src={user.coverPhoto} className="img-fluid" alt="user listing" width="100%" height="140" /> */}
                     <div className="card-block-content">
                        <div className="d-flex justify-content-between mb-20">
                           <div className="d-flex align-items-start">
                              <div className="media">
                                 {/* <div className="media-left mx-10">
                                    <img src={user.userAvatar} alt="user profile" className="rounded-circle img-fluid" width="90" height="90" />
                                 </div> */}
                                 <div className="media-body py-10">
                                    <p><a className="mb-0" onClick={()=>this.getUserDetails(user._id)}>{user.name}</a></p>
                                    <span className="text-muted fs-12">{user.email}</span>
                                 </div>
                              </div>
                           </div>
                           <button type="button" className="rct-link-btn pb-30" onClick={() => this.onEditUser(user)}><i className="ti-pencil"></i></button>
                        </div>
                     </div>
                  </RctCard>
               ))}
            </div>
            <Dialog
					onClose={() => this.setState({ openViewUserDialog: false })}
					open={this.state.openViewUserDialog}
				>
					<DialogContent>
						{selectedUser !== null &&
							<div>
								<div className="clearfix d-flex">
									<div className="media pull-left">
										<img src={selectedUser.avatar} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />
										<div className="media-body">
											<p>Name: <span className="fw-bold">{selectedUser.name}</span></p>
											<p>Email: <span className="fw-bold">{selectedUser && selectedUser.user && selectedUser.user.email}</span></p>
											<p>Phone: {selectedUser.phone}</p>
											<p>Address: {selectedUser.address ? selectedUser.address.line1:""}</p>
                                 <p>City: {selectedUser.address ? selectedUser.address.city:""}</p>
                                 <p>State: {selectedUser.address ? selectedUser.address.state:""}</p>
                                 <p>Zip code: {selectedUser.address ? selectedUser.address.pincode:""}</p>
										</div>
									</div>
								</div>
							</div>
						}
					</DialogContent>
				</Dialog>
            <Modal isOpen={this.state.UpdateUserModal} toggle={() => this.onAddUpdateUserModalClose()}>
					<ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
						Update user
					</ModalHeader>
					<ModalBody>
               <Form>
                  <FormGroup>
                        <Label for="Name">Role</Label>
                        <Input
                           type="text"
                           name="Name"
                           id="Name"
                           placeholder="Enter role"
                           value={this.state.role}
                           onChange={(e) => this.onChangeAddNewUserDetails('role', e.target.value)}
                        />
                  </FormGroup>
                  <FormGroup>
                        <Label for="status">Status</Label>
                        <Input
                           type="text"
                           name="status"
                           id="status"
                           placeholder="Enter status"
                           value={this.state.status}
                           onChange={(e) => this.onChangeAddNewUserDetails('status', e.target.value)}
                        />
                  </FormGroup>
                  </Form>
					</ModalBody>
					<ModalFooter> <Button variant="contained" color="primary" className="text-white" onClick={() => this.updateUser()}>Update</Button>
						{' '}
						<Button variant="contained" className="text-white btn-danger" onClick={() => this.onAddUpdateUserModalClose()}>Cancel</Button>
					</ModalFooter>
				</Modal>
         </div>
      );
   }
}
