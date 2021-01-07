import React, { Component } from 'react';
import Cropper from 'react-cropper';
import Button from '@material-ui/core/Button';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, FormText, Input } from 'reactstrap';
import IntlMessages from 'Util/IntlMessages';
const src = 'https://reactify.theironnetwork.org/data/images/nature-poster.jpg';
class UploadImage extends Component {

   
    state = {
        src:this.props.src,
        cropResult: null
    }
    onSubmit=()=>{
        this.props.onSubmit(this.state.src);
    } 
     onChange(e) {
        console.log(e.target.value)
        let file = e.target.files[0];
           this.setState({ src: e.target.files });
     }
  
     
  
     useDefaultImage() {
        this.setState({ src });
     }
    render(){
    return(
        <Modal isOpen={this.props.isOpen} toggle={this.props.onClose}>
      <ModalHeader toggle={this.props.onClose}>Image</ModalHeader>
      <ModalBody>
      <div className="row">
         {this.props.modalStatus === "Add" ? (
            <RctCollapsibleCard
            colClasses="col-sm-12 col-md-12 col-lg-12"
            contentCustomClasses="crop-wrapper"
         >
            <div>
               <FormGroup className="mt-20 mb-20 d-flex justify-space-between align-items-center">
                  <div className="mb-10 mb-md-0">
                     <input type="file" name="file" id="exampleFile" onChange={this.onChange.bind(this)} />
                     <FormText color="muted">
                        Choose an image to resize.
                     </FormText>
                  </div>
               </FormGroup>
            </div>
         </RctCollapsibleCard>
         ):<div className="ml-20">Are sure want delete this Avator?</div>}
               
            </div>
      </ModalBody>
      <ModalFooter>
         <Button variant="contained" color="primary" className="text-white bg-primary" onClick={this.onSubmit}>{this.props.modalStatus === "Add" ? "Save":"Yes"}</Button>{' '}
         <Button variant="contained" className="btn-danger text-white" onClick={this.props.onClose}>Cancel</Button>
      </ModalFooter>
   </Modal>
    )
}
}

export default UploadImage;
