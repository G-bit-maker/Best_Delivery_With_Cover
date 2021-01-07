/**
 * User Block
 */
import React, { Component } from 'react';
import UploadImage from "./UploadImage";
import api from 'Api';
import {Url} from "../../../../api/config";
class UserBlock extends Component {
    state={
        showStatus:false,
        img:'https://reactify.theironnetwork.org/data/images/nature-poster.jpg',
        modalStatus:""
    }
    handleChange=()=>{
        this.setState({
            showStatus:true,
            modalStatus:"Add"
        })
    }
    onSubmit=(image)=>{
        const data = new FormData() 
        data.append('Avatar', image)
        console.warn(data);
        let token = localStorage.getItem('token');
        if(this.state.modalStatus === "Add"){
            api.post(Url+"/api/users/profile/avatar", data, {
                headers: {
                  'Authorization': token,
                  'Content-Type': 'multipart/form-data',
                }
              })
            .then((response) => {
                this.setState({
                    showStatus:false,
                    modalStatus:""
                })
            })
            .catch(error => {
                // error hanlding
            })
        }else if(this.state.modalStatus === "Delete"){
            api.delete(Url+"/api/users/profile/avatar", {
                headers: {
                  'Authorization': token
                }
              })
            .then((response) => {
                this.setState({
                    showStatus:false,
                    modalStatus:""
                })
            })
            .catch(error => {
                // error hanlding
            })
        }
        
    }
    DeleteAvator=()=>{
        this.setState({
            showStatus:true,
            modalStatus:"Delete"
        })
    }
    onClose=()=>{
        this.setState({
            showStatus:false
        })
    }
    render() {
        return (
            <div className="profile-top mb-20">
                <img src={require('Assets/img/profile-bg.jpg')} alt="profile banner" className="img-fluid" width="1920" height="345" />
                <div className="profile-content">
                    <div className="media">
                        <img src={this.state.img} alt="user profile" className="rounded-circle mr-30 bordered" width="140" height="140" />
                        <div className="media-body pt-25">
                            <div className="mb-20">
                                <h2>Lucile Beck</h2>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="media-body ml-25 mt-20">
                         <p><a onClick={this.handleChange}>Upload Avator</a><a className="ml-30" onClick={this.DeleteAvator}>Delete Avator</a></p> 
                    </div>
                  
                </div>
                <UploadImage 
                    onSubmit={this.onSubmit}
                    onClose={this.onClose}
                    isOpen={this.state.showStatus}
                    src={this.state.img}
                    modalStatus={this.state.modalStatus}
                />
            </div>
        );
    }
}

export default UserBlock;
