import React from 'react';
import { Col } from 'react-bootstrap';
import TableComp from '../Common/Table/TableComp';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Ordercomponent extends React.Component {
  constructor() {
    super();
    this.state = {
      orderslist: [
        'Name',
        'Phone Number',
        'Address',
        'items',
        'Shop',
        'Total Amount',
      ],
    };
  }

  onClickAction = () => {
    alert('done');
  };

  handleOnchange = () =>{

  }

  render() {
    return (
      <div>
        <Col className={'commonfont'} lg={12} md={12} sm={12} xs={12}>
          <h4 className={'float-l'}>Orders</h4>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} className={'float-r p-r-0'}>
            <Form className={'float-r'}>
              <Form.Row>
                <Col xs='auto'>
                  <Form.Control
                    className='mb-2'
                    onChange={this.handleOnchange}
                    id='inlineFormInput'
                    placeholder='Search Order Details'
                  />
                </Col>
                <Col xs='auto'>
                  <Button onClick={this.onSubmit} variant='dark'>
                    Search
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
          <TableComp
            onClickAction={this.onClickAction}
            headList={this.state.orderslist}
            parentName={'OrderDetails'}
          />
        </Col>
      </div>
    );
  }
}

export default Ordercomponent;
