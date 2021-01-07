/**
 * User Management Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {
	Pagination,
	PaginationItem,
	PaginationLink,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Badge
} from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { NotificationManager } from 'react-notifications';
import Avatar from '@material-ui/core/Avatar';

// api
import api from 'Api';
import {Url} from "../../../api/config";

// delete confirmation dialog
import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';

// add new user form
import AddNewUserForm from './AddNewUserForm';

// update user form
import UpdateUserForm from './UpdateUserForm';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// rct section loader
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';

export default class UserProfile extends Component {

	state = {
		all: false,
		users: null, // initial user data
		selectedUser: null, // selected user to perform operations
		loading: false, // loading activity
		addNewUserModal: false, // add new user form modal
		addNewUserDetail: {
			id: '',
			name: '',
			avatar: '',
			type: '',
			emailAddress: '',
			status: '',
			lastSeen: '',
			accountType: '',
			badgeClass: 'badge-success',
			dateCreated: 'Just Now',
			checked: false
		},
		openViewUserDialog: false, // view user dialog box
		editUser: null,
		allSelected: false,
		selectedUsers: 0
	}

	componentDidMount() {
		this.getDetails();
	}
	getDetails=()=>{
		let token = localStorage.getItem('token');
		api.get(Url+"/api/categories",{headers:{"Authorization":token}})
			.then((response) => {
				this.setState({ users: response.data.data });
			})
			.catch(error => {
				// error hanlding
			})
	}
	/**
	 * On Delete
	 */
	onDelete(data) {
		this.refs.deleteConfirmationDialog.open();
		this.setState({ selectedUser: data });
	}

	/**
	 * Delete User Permanently
	 */
	deleteUserPermanently() {
		const { selectedUser } = this.state;
		let users = this.state.users;
		let token = localStorage.getItem('token');
			api.delete(Url+"/api/categories/"+selectedUser._id, {
				headers: {
				  'Authorization': token
				}
			  })
			.then((response) => {
				this.refs.deleteConfirmationDialog.close();
				this.setState({
					addNewUserModal: false,
				},()=>{
					this.getDetails();
				})
			})
			.catch(error => {
				// error hanlding
			})
	}

	/**
	 * Open Add New User Modal
	 */
	opnAddNewUserModal(e) {
		e.preventDefault();
		this.setState({ addNewUserModal: true });
	}

	/**
	 * On Reload
	 */
	onReload(e) {
		e.preventDefault();
		this.setState({ loading: true });
		let self = this;
		setTimeout(() => {
			self.setState({ loading: false });
		}, 2000);
	}

	/**
	 * On Select User
	 */
	onSelectUser(user) {
		user.checked = !user.checked;
		let selectedUsers = 0;
		let users = this.state.users.map(userData => {
			if (userData.checked) {
				selectedUsers++;
			}
			if (userData.id === user.id) {
				if (userData.checked) {
					selectedUsers++;
				}
				return user;
			} else {
				return userData;
			}
		});
		this.setState({ users, selectedUsers });
	}

	/**
	 * On Change Add New User Details
	 */
	onChangeAddNewUserDetails(key, value) {
		this.setState({
			addNewUserDetail: {
				...this.state.addNewUserDetail,
				[key]: value
			}
		});
	}

	/**
	 * Add New User
	 */
	addNewUser() {
		const { name, priority,category,status } = this.state.addNewUserDetail;
	//	if (name !== '' && emailAddress !== '') {
			let users = {
				name:name ? name:"",
				priority:priority ? parseInt(priority):"",
				parent:category ? category:"",
				status: status ? parseInt(status):""
			}
			let token = localStorage.getItem('token');
			api.post(Url+"/api/categories", users, {
				headers: {
				  'Authorization': token
				}
			  })
			.then((response) => {
				this.setState({
					addNewUserModal: false,
				},()=>{
					this.getDetails();
				})
			})
			.catch(error => {
				// error hanlding
			})
	//	}
	}

	/**
	 * View User Detail Hanlder
	 */
	viewUserDetail(data) {
		let token = localStorage.getItem('token');
		api.get(Url+"/api/categories/"+data._id,{headers:{"Authorization":token}})
			.then((response) => {
				this.setState({openViewUserDialog:true ,selectedUser: response.data });
			})
			.catch(error => {
				// error hanlding
			})
		//this.setState({ openViewUserDialog: true, selectedUser: data });
	}

	/**
	 * On Edit User
	 */
	onEditUser(user) {
		this.setState({ addNewUserModal: true, addNewUserDetail: user,editUser: user });
	}

	/**
	 * On Add & Update User Modal Close
	 */
	onAddUpdateUserModalClose() {
		this.setState({ addNewUserModal: false, editUser: null })
	}

	/**
	 * On Update User Details
	 */
	onUpdateUserDetails(key, value) {
		this.setState({
			addNewUserDetail: {
				...this.state.addNewUserDetail,
				[key]: value
			}
		});
	}

	/**
	 * Update User
	 */
	updateUser() {
		const { name, priority,category,status } = this.state.addNewUserDetail;
		const { editUser } = this.state;
		let users = {
			name:name ? name:"",
			priority:priority ? parseInt(priority):"",
			parent:category ? category:"",
			status: status ? parseInt(status):""
		}
		let token = localStorage.getItem('token');
			api.put(Url+"/api/categories/"+editUser._id, users, {
				headers: {
				  'Authorization': token
				}
			  })
			.then((response) => {				
				this.setState({
					addNewUserModal: false,
				},()=>{
					this.getDetails();
				})
			})
			.catch(error => {
				// error hanlding
			})
	     	
	}

	//Select All user
	onSelectAllUser(e) {
		const { selectedUsers, users } = this.state;
		let selectAll = selectedUsers < users.length;
		if (selectAll) {
			let selectAllUsers = users.map(user => {
				user.checked = true
				return user
			});
			this.setState({ users: selectAllUsers, selectedUsers: selectAllUsers.length })
		} else {
			let unselectedUsers = users.map(user => {
				user.checked = false
				return user;
			});
			this.setState({ selectedUsers: 0, users: unselectedUsers });
		}
	}

	render() {
		const { users, loading, selectedUser, editUser, allSelected, selectedUsers } = this.state;
		return (
			<div className="user-management">
				<Helmet>
					<title>Category</title>
					<meta name="description" content="Reactify Widgets" />
				</Helmet>
				<PageTitleBar
					title={<IntlMessages id="Category" />}
					match={this.props.match}
				/>
				<RctCollapsibleCard fullBlock>
					<div className="table-responsive">
						<div className="d-flex justify-content-between py-20 px-10 border-bottom">
							<div>
								<h4 className="mt-10">Category</h4>
							</div>
							<div>
								<Button variant="contained" className="text-white btn-danger" onClick={(e) => this.opnAddNewUserModal(e)} >Add Category</Button>
							</div>
						</div>
						<table className="table table-middle table-hover mb-0">
							<thead>
								<tr>
									<th>Image</th>
									<th>Category</th>
									<th>Main Category</th>
									<th>Edit/Delete</th>
								</tr>
							</thead>
							<tbody>
								{users && users.map((user, key) => (
									<tr key={key}>
										<td>
											<FormControlLabel
												control={
													<Checkbox
														checked={user.checked}
														onChange={() => this.onSelectUser(user)}
														color="primary"
													/>
												}
											/>
										</td>
										<td>
											<div className="media">
												{user.avatar !== '' ?
													<img src={user.avatar} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />
													: <Avatar className="mr-15">{user.name.charAt(0)}</Avatar>
												}
												<div className="media-body">
													<h5 className="mb-5 fw-bold">{user.name}</h5>
													<Badge color="warning">{user.type}</Badge>
												</div>
											</div>
										</td>
										<td>{user.path}</td>
										<td className="list-action">
										<button type="button" className="rct-link-btn" onClick={() => this.viewUserDetail(user)}><i className="ti-eye"></i></button>
											<button type="button" className="rct-link-btn" onClick={() => this.onEditUser(user)}><i className="ti-pencil"></i></button>
											<button type="button" className="rct-link-btn" onClick={() => this.onDelete(user)}><i className="ti-close"></i></button>
										</td>
									</tr>
								))}
							</tbody>
							<tfoot className="border-top">
								<tr>
									<td colSpan="100%">
										<Pagination className="mb-0 py-10 px-10">
											<PaginationItem>
												<PaginationLink previous href="#" onClick={e => e.preventDefault()} />
											</PaginationItem>
											<PaginationItem active>
												<PaginationLink href="#" onClick={e => e.preventDefault()}>1</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#" onClick={e => e.preventDefault()}>2</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#" onClick={e => e.preventDefault()}>3</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink next href="#" onClick={e => e.preventDefault()} />
											</PaginationItem>
										</Pagination>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
					{loading &&
						<RctSectionLoader />
					}
				</RctCollapsibleCard>
				<DeleteConfirmationDialog
					ref="deleteConfirmationDialog"
					title="Are You Sure Want To Delete?"
					message="This will delete Category permanently."
					onConfirm={() => this.deleteUserPermanently()}
				/>
				<Modal isOpen={this.state.addNewUserModal} toggle={() => this.onAddUpdateUserModalClose()}>
					<ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
						{editUser === null ?
							'Add Category' : 'Update Category'
						}
					</ModalHeader>
					<ModalBody>
						{editUser === null ?
							<AddNewUserForm
								addNewUserDetails={this.state.addNewUserDetail}
								onChangeAddNewUserDetails={this.onChangeAddNewUserDetails.bind(this)}
							/>
							: <UpdateUserForm user={editUser} addNewUserDetails={this.state.addNewUserDetail} onUpdateUserDetail={this.onUpdateUserDetails.bind(this)} />
						}
					</ModalBody>
					<ModalFooter>
						{editUser === null ?
							<Button variant="contained" className="text-white btn-success" onClick={() => this.addNewUser()}>Add</Button>
							: <Button variant="contained" color="primary" className="text-white" onClick={() => this.updateUser()}>Update</Button>
						}
						{' '}
						<Button variant="contained" className="text-white btn-danger" onClick={() => this.onAddUpdateUserModalClose()}>Cancel</Button>
					</ModalFooter>
				</Modal>
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
											<p>Path: <span className="fw-bold">{selectedUser.path}</span></p>
											<p>Priority: {selectedUser.priority}</p>
											<p>Status: {selectedUser.status}</p>
										</div>
									</div>
								</div>
							</div>
						}
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}
