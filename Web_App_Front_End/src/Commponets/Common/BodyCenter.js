import React from "react";
import { Button,Form,Navbar,Nav,FormControl,Jumbotron, Card, Row,Tab, Col} from 'react-bootstrap';
import { } from "react-router-dom";

class BodyCenter extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        }
    }


    render() {
        return( 
            <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey={this.props.Menu[0]}>
                <Col lg={2} className={"side_nav padding_right_0 margin_right_0"}>
                    <Jumbotron className ={"margin_bottom_15 jumbotron_costom"}>
                        <Nav variant="pills" className="flex-column">
                            {this.props.Menu.map(x=>
                                <Nav.Item>
                                    <Nav.Link eventKey={x}>{x}</Nav.Link>
                                </Nav.Item>
                            )}
                            
                            {/* <Nav.Item>
                                <Nav.Link eventKey={2}>{this.props.Menu.two}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={3}>{this.props.Menu.three}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={4}>{this.props.Menu.four}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={5}>{this.props.Menu.five}</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                    </Jumbotron>
                </Col>
                <Col lg={9} className={"side_nav padding_0 margin_left_10"}>
                    <Jumbotron className ={"margin_bottom_15 width_104_perc jumbotron_costom"}>
                    <Tab.Content>
                            {this.props.Menu.map(data=>
                                <Tab.Pane eventKey={data}>
                                    <Card>
                                    <Card.Header>Featured</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{data}</Card.Title>
                                        <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Go More ... {data}</Button>
                                    </Card.Body>
                                    </Card>
                                </Tab.Pane>
                            )}

                        {/* <Tab.Pane eventKey={2}>
                        <h2>Redmi</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey={3}>
                        <h2>Vivo</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey={4}>
                        <h2>Oppo</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey={5}>
                        <h2>Realme</h2>
                        </Tab.Pane> */}
                    </Tab.Content>
                    </Jumbotron>
                </Col>
            </Tab.Container>
        </Row>
        )
    }
  }

export default BodyCenter