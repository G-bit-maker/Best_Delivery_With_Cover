import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const ProductModal = (props) => {
    const [state, setState] = useState({
        Name:"",
        Catogory:"",
        Specifications:"",
        forSale:"",
        saleAmount:"",
        deposite:"",
        insurance:"",
        image:"",
        rentelAmount1:"",
        rentelAmount2:"",
        rentelAmount3:"",
        rentelAmount4:""
    });
    const handleChange = (e)=>{
        setState({
          ...state,
          [e.target.id]: e.target.value
        });
      }
    const onSubmit=()=>{
        let details = {
            ...state
        }
        props.onSubmit(details);
    }  
    return(
        <Modal isOpen={props.isOpen} toggle={props.onClose}>
      <ModalHeader toggle={props.onClose}>Product</ModalHeader>
      <ModalBody>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
                <Label for="Name">Name</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                <Input type="text" name="Name" id="Name" onChange={handleChange} placeholder="Enter name"/>
            </div>
      </div>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
                <Label for="Catogory">Catogory</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
               <Input type="text" name="Catogory" id="Catogory" placeholder="Enter catogory" onChange={handleChange}/>
            </div>
      </div>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
                 <Label for="Specifications">Specifications</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                <Input type="textarea" name="Specifications" id="Specifications" onChange={handleChange}/>
            </div>
      </div>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
               <Label for="sale">If this also for sale</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                <FormControlLabel control={
                    <Checkbox color="primary" id="forSale" onChange={handleChange} value="yes" />
                } label="Yes" />
                <FormControlLabel control={
                    <Checkbox color="primary" id="forSale" onChange={handleChange} value="no" />
                } label="No" />
            </div>
      </div>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
                 <Label for="saleAmount">Sale amount</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                <Input type="text" name="saleAmount" id="saleAmount" placeholder="Enter amount" onChange={handleChange}/>
            </div>
      </div>
      <Label className="align-content-center">RENTAL DETAILS</Label>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
               <Label for="rentelAmount1">Upto 30 days</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                <Input type="text" name="rentelAmount1" id="rentelAmount1" placeholder="Enter amount" onChange={handleChange}/>
            </div>
      </div>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
                 <Label for="rentelAmount2">31-60 days</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                <Input type="text" name="rentelAmount2" id="rentelAmount2" placeholder="Enter amount" onChange={handleChange}/>
            </div>
      </div>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
             <Label for="rentelAmount3">61-180</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                <Input type="text" name="rentelAmount3" id="rentelAmount3" placeholder="Enter amount" onChange={handleChange}/>
            </div>
      </div>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
                 <Label for="rentelAmount4">{"<180"}</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                 <Input type="text" name="rentelAmount4" id="rentelAmount4" placeholder="Enter amount" onChange={handleChange}/>
            </div>
      </div>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
                <Label for="deposite">Deposite amount</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                 <Input type="text" name="deposite" id="deposite" placeholder="Enter deposite" onChange={handleChange}/>
            </div>
      </div>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
                <Label for="sale">Insurance</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                <FormControlLabel control={
                    <Checkbox color="primary" id="insurance" onChange={handleChange} value="yes" />
                } label="Yes" />
                <FormControlLabel control={
                    <Checkbox color="primary" id="insurance" onChange={handleChange} value="no" />
                } label="No" />
            </div>
      </div>
      <div className="row mb-20">
            <div className="col-sm-3 col-md-3 col-xl-3 ">
                <Label for="image">Upload image</Label>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-9 ">
                 <Input type="file" name="image" id="image" onChange={handleChange}/>
            </div>
      </div>
      </ModalBody>
      <ModalFooter>
         <Button variant="contained" color="primary" className="text-white bg-primary" onClick={onSubmit}>Submit</Button>{' '}
         <Button variant="contained" className="btn-danger text-white" onClick={props.onClose}>Cancel</Button>
      </ModalFooter>
   </Modal>
    )
};

export default ProductModal;
