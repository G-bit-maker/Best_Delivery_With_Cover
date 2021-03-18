import React from 'react';
import { Form, Col, Table } from 'react-bootstrap';
import Button from '../Common/Buttons/ButtonOut';
import Switch from '@material-ui/core/Switch';
import TableComp from '../Common/Table/TableComp';
import Toster from '../Common/TosterComponent';

const headList = [
  'S.No',
  'Categories',
  'Discription',
  'Show Status',
  'Actions',
];
class ProductComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      swithStatus: true,
      categorieName: '',
      categorieDecr: '',
      fileImage: '',
      status: '',
    };
  }

  handleChange = () => {
    this.setState({
      swithStatus: !this.state.swithStatus,
    });
  };

  onChangeHandle = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = () => {};

  onClickAction = (action, id, listData, i) => {};

  render() {
    return (
      <div className={'dis-flex commonfont'}>
        <Col
          xl={3}
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className={'text-left border-r-2-black p-r-25 '}
        >
          {this.state.status === 'Edit' ? (
            <h4>Edit Products</h4>
          ) : (
            <h4>Add Products</h4>
          )}
          <Form.Group controlId='formBasicEmail' className={'m-t-30'}>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              id={'categorieName'}
              type='text'
              value={this.state.categorieName}
              placeholder='Categories Name'
              onChange={this.onChangeHandle}
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Categories</Form.Label>
            <Form.Control
              id={'categorieDecr'}
              as='textarea'
              value={this.state.categorieDecr}
              placeholder='Catergories Discription'
              onChange={this.onChangeHandle}
            />
          </Form.Group>

          <Form.File id='formcheck-api-regular'>
            <Form.File.Label>Categories Image</Form.File.Label>
            <Form.File.Input
              id={'fileImage'}
              value={this.state.fileImage}
              onChange={this.onChangeHandle}
            />
          </Form.File>

          <Form.Group controlId='formBasicEmail' className={'m-t-15'}>
            <Form.Label>Show Status</Form.Label>
            <Switch
              checked={this.state.swithStatus}
              onChange={this.handleChange}
              color='primary'
              name='checkedB'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </Form.Group>

          <Button
            variant='primary'
            type='submit'
            btnText={this.state.status === 'Edit' ? 'Update' : 'Submit'}
            onClick={this.onSubmit}
            btnLoading={this.props.buttonLoading}
          />
        </Col>

        <Col xl={9} lg={8} md={12} sm={12} xs={12}>
          <h4 className={'float-l'}>Categories List</h4>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} className={'float-r p-r-0'}>
            <Form className={'float-r'}>
              <Form.Row>
                <Col xs='auto'>
                  <Form.Control
                    className='mb-2'
                    id='inlineFormInput'
                    placeholder='Enter Categories to search'
                  />
                </Col>
                <Col xs='auto'>
                  <Button
                    btnVariant='dark'
                    type='search'
                    btnText={'search'}
                    onClick={this.onSubmit}
                    btnLoading={this.props.buttonLoading}
                  />
                </Col>
              </Form.Row>
            </Form>
          </Col>

          <TableComp
            onClickAction={this.onClickAction}
            headList={headList}
            parentName={'updateTags'}
          />
        </Col>
      </div>
    );
  }
}

export default ProductComponent;
