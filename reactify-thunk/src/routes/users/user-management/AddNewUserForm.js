/**
 * Add New User Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const AddNewUserForm = ({ addNewUserDetails, onChangeAddNewUserDetails }) => (
    <Form>
        <FormGroup>
            <Label for="Name">Name</Label>
            <Input
                type="text"
                name="Name"
                id="Name"
                placeholder="Enter Name"
                value={addNewUserDetails.name}
                onChange={(e) => onChangeAddNewUserDetails('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="priority">Priority</Label>
            <Input
                type="text"
                name="priority"
                id="priority"
                placeholder="Enter priority"
                value={addNewUserDetails.priority}
                onChange={(e) => onChangeAddNewUserDetails('priority', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="category">Main category</Label>
            <Input
                type="text"
                name="category"
                id="category"
                placeholder="Enter main category"
                value={addNewUserDetails.category}
                onChange={(e) => onChangeAddNewUserDetails('category', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="status">Status</Label>
            <Input
                type="text"
                name="status"
                id="status"
                placeholder="Enter status"
                value={addNewUserDetails.status}
                onChange={(e) => onChangeAddNewUserDetails('status', e.target.value)}
            />
        </FormGroup>
    </Form>
);

export default AddNewUserForm;
