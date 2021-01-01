import React from "react";
import { Formik} from "formik";
import { Button,Form,Carousel } from 'react-bootstrap';
import { toast } from 'react-toastify';
import * as yup from "yup";

class Carousels extends React.Component {
    constructor(){
        super();
        this.state = {
            setIndex: 0
        }
    }
    handleSelect = (selectedIndex) => {
        this.setState({
            setIndex: selectedIndex
        })
      };
    render(){
        return(
            <div>
                <Carousel activeIndex={this.state.setIndex} onSelect={this.handleSelect} className="calse">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../../images/banner/one.jpg")}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../../images/banner/two.jpg")}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../../images/banner/three.jpg")}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
        )
    }
}

export default Carousels;