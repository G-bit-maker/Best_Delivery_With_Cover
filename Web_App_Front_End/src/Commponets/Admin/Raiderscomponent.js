import React from 'react';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../css/common.css';
import TableComp from '../Common/Table/TableComp';
import Button from 'react-bootstrap/Button';

class Ordercomponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      Mobilenumber: '',
      aadharnumber: '',
      aadharfile: '',
      bikenumber: '',
      Licencenumber: '',
      Licencefile: '',
      Tableheaderdetails: [
        'email - Id',
        'Mobilenumber',
        'aadharnumber',
        'aadharfile',
        'bikenumber',
        'Licencenumber',
        'Licencefile',
      ],
    };
  }

  onClickAction = () => {
    console.log('Raider Actions');
  };

  onSubmit = () => {};

  render() {
    return (
      <div>
        <Col style={{ display: 'flex' }} lg={12} md={12} sm={12} xs={12}>
          <Col
            style={{ borderRight: '2px solid' }}
            lg={4}
            md={12}
            sm={12}
            xs={12}
          >
            <div>
              <div>Rider Details</div>
              <div style={{ textAlign: 'start' }}>
                <Form>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    value={this.state.email}
                    placeholder='Enter email'
                  />
                  <Form.Label style={{ paddingTop: '15px' }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type='password'
                    value={this.state.password}
                    placeholder='Password'
                  />
                  <Form.Label style={{ paddingTop: '15px' }}>
                    Mobile Number
                  </Form.Label>
                  <Form.Control
                    type='number'
                    value={this.state.Mobilenumber}
                    placeholder='Mobile Number'
                  />
                </Form>
              </div>
              <div style={{ display: 'flex', textAlign: 'end' }}>
                <div style={{ textAlign: 'start' }}>
                  <Form.Label style={{ paddingTop: '15px' }}>
                    aadhar Number
                  </Form.Label>
                  <Form.Control
                    type='number'
                    value={this.state.aadharnumber}
                    placeholder='aadhar Number'
                  />
                </div>
                <div>
                  <Form.Label style={{ paddingTop: '15px' }}>
                    aadhar Photocopy
                  </Form.Label>
                  <Form.File
                    style={{ textAlign: 'start', width: '70%' }}
                    id='custom-file'
                    label='Choose file'
                    value={this.state.aadharfile}
                    custom
                  />
                </div>
              </div>
              <div>
                <div style={{ textAlign: 'start' }}>
                  <Form.Label style={{ paddingTop: '15px' }}>
                    Bike Number
                  </Form.Label>
                  <Form.Control
                    type='number'
                    value={this.state.bikenumber}
                    placeholder='Bike Number'
                  />
                </div>
              </div>
              <div style={{ display: 'flex', textAlign: 'end' }}>
                <div style={{ textAlign: 'start' }}>
                  <Form.Label style={{ paddingTop: '15px' }}>
                    Licence Number
                  </Form.Label>
                  <Form.Control
                    type='number'
                    value={this.state.Licencenumber}
                    placeholder='Licence Number'
                  />
                </div>
                <div>
                  <Form.Label style={{ paddingTop: '15px' }}>
                    Licence Photocopy
                  </Form.Label>
                  <Form.File
                    style={{ textAlign: 'start', width: '70%' }}
                    id='custom-file'
                    label='Choose file'
                    value={this.state.Licencefile}
                    custom
                  />
                </div>
              </div>
            </div>
            <Button
              style={{ float: 'right', marginTop: '25px' }}
              variant='primary'
            >
              Save
            </Button>
          </Col>
          <Col lg={8} md={8} sm={8} xs={8}>
            <Col style={{ display: 'flex' }} lg={12} md={12} sm={12} xs={12}>
              <Col lg={4} md={4} sm={4} xs={4}>
                <h4 className={'float-l'}>Riders List</h4>
              </Col>
              <Col lg={8} md={8} sm={8} xs={8}>
                <Form className={'float-r'}>
                  <Form.Row>
                    <Col xs='auto'>
                      <Form.Control
                        className='mb-2'
                        id='inlineFormInput'
                        placeholder='search Riders Details'
                      />
                    </Col>
                    <Col xs='auto'>
                      <Button variant='dark'>Search</Button>
                    </Col>
                  </Form.Row>
                </Form>
              </Col>
            </Col>
            <TableComp
              onClickAction={this.onClickAction}
              headList={this.state.Tableheaderdetails}
              parentName={'updateTags'}
            />
          </Col>
        </Col>
      </div>
    );
  }
}

export default Ordercomponent;
