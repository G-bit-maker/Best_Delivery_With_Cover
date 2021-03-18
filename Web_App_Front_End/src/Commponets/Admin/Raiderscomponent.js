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
      name: '',
      email: '',
      password: '',
      Mobilenumber: '',
      aadharnumber: '',
      address1 : '',
      address2 : '',
      aadharfile: 'Choose Files',
      bikenumber: '',
      Licencenumber: '',
      Licencefile: 'Choose Files',
      Tableheaderdetails: [
        'S.No',
        'email - Id',
        'Mobile number',
        'aadhar number',
        'aadhar file',
        'bike number',
        'Licence number',
        'Licence file',
      ],
    };
  }

  onClickAction = () => {
    console.log('Raider Actions');
  };

  handleOnchange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onSubmit = () => {};

  render() {
    return (
      <div>
        <Col
          className={'commonfont'}
          style={{ display: 'flex' }}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
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
                  <Form.Label>Rider Name</Form.Label>
                  <Form.Control
                    type='text'
                    id='name'
                    onChange={this.handleOnchange}
                    value={this.state.name}
                    placeholder='Enter Name'
                  />
                  <Form.Label>Address 1</Form.Label>
                  <Form.Control
                    type='text'
                    id='address1'
                    onChange={this.handleOnchange}
                    value={this.state.address1}
                    placeholder='Enter Address / lane'
                  />
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    type='text'
                    id='address2'
                    onChange={this.handleOnchange}
                    value={this.state.address2}
                    placeholder='Enter Address 2'
                  />
                  <Form.Label style={{ paddingTop: '15px' }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type='email'
                    id='email'
                    onChange={this.handleOnchange}
                    value={this.state.email}
                    placeholder='Enter email'
                  />
                  <Form.Label style={{ paddingTop: '15px' }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type='password'
                    id='password'
                    onChange={this.handleOnchange}
                    value={this.state.password}
                    placeholder='Password'
                  />
                  <Form.Label style={{ paddingTop: '15px' }}>
                    Mobile Number
                  </Form.Label>
                  <Form.Control
                    type='number'
                    id='Mobilenumber'
                    onChange={this.handleOnchange}
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
                    id='aadharnumber'
                    onChange={this.handleOnchange}
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
                    type='file'
                    id='aadharfile'
                    onChange={(e) =>
                      this.setState({ aadharfile: e.target.files[0].name })
                    }
                    label={this.state.aadharfile}
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
                    id='bikenumber'
                    onChange={this.handleOnchange}
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
                    id='Licencenumber'
                    onChange={this.handleOnchange}
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
                    type='file'
                    id='Licencefile'
                    onChange={(e) =>
                      this.setState({ Licencefile: e.target.files[0].name })
                    }
                    label={this.state.Licencefile}
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
            <h4 className={'float-l'}>Riders</h4>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} className={'float-r p-r-0'}>
              <Form className={'float-r'}>
                <Form.Row>
                  <Col xs='auto'>
                    <Form.Control
                      className='mb-2'
                      onChange={this.handleOnchange}
                      id='inlineFormInput'
                      placeholder='Search Riders Details'
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
              headList={this.state.Tableheaderdetails}
              parentName={'RidersDetails'}
            />
          </Col>
        </Col>
      </div>
    );
  }
}

export default Ordercomponent;
