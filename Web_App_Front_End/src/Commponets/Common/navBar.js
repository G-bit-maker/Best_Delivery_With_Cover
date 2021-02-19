import React from "react";
import { Navbar,Nav, Col} from 'react-bootstrap';
import Constants from "../../constants";
import NavBarConstant from "../../Navconstants"
import { } from "react-router-dom";

class Navbars extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            NavbarData: NavBarConstant[localStorage.getItem("userType") ?  localStorage.getItem("userType") : "Home"]
        }
    }

    componentDidMount = () => {
        
    }

    redirectNav=()=>{
        window.open("/Dashboard","_self")
    }

    onAppoint = ()=>{
        alert("Your are clicking Appointment We are let you know once its done ( Service an availabe!...)")
    }

    render() {
        return( 
            <Navbar bg="primary" variant="dark" className={""} fixed={this.props.fixed}>
                
                <Col xs={6} xl={6} sm={4} md={6} lg={6} className={"text-left"}>
                    <Navbar.Brand href="#home">{Constants.site_Name}</Navbar.Brand>
                </Col>
                <Col xs={6} xl={6} sm={8} md={6} lg={6}>
                    <div className={"dis-flex float-r"}>
                        {this.state.NavbarData ? this.state.NavbarData.map((data, i)=>(
                            <Nav className="">
                                <Nav.Link href={data.Url} className={"m-l-10"}>{data.Name}</Nav.Link>
                            </Nav>   
                        )): ""}
                    </div>
                </Col>
                
            </Navbar>

        )
    }
  }

export default Navbars