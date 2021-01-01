import React from "react";
import { Button,Form,Navbar,Nav,FormControl, NavDropdown, Row, Col} from 'react-bootstrap';
import { } from "react-router-dom";
import Backto from "../../Commponets/Common/Buttons/BackToTop";
import Drawer from "../../Commponets/Common/Drawer/DrawerComp";
import ButtonComp from "../../Commponets/Common/Buttons/ButtonOut";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

class Navbars extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        }
    }

    redirectNav=()=>{
        window.open("/Dashboard","_self")
    }

    onAppoint = ()=>{
        alert("Your are clicking Appointment We are let you know once its done ( Service an availabe!...)")
    }

    render() {
        return( 
        <div>
            {this.props.userType !== "admin" ? 
            <Navbar bg="" variant=" fixed-top common-shadow p-15 text-black bgwhite ">

                        <div className={"col-lg-2 col-md-2 col-sm-2 col-xs-2 text-left"} >
                            <Navbar.Brand href="/home" className={"font-size-15 color-code"}>{this.props.SiteName}</Navbar.Brand>
                        </div>

                        <div className={"col-lg-6 col-md-6 col-sm-6 col-xs-6 font-size-1 text-left"}>
                            <Nav className="mr-auto">
                                <Nav.Link href="/home" className={this.props.pageName && this.props.pageName === this.props.Menus.first_Menu ? "btn text-black font-size-1 m-r-10 actives" : "btn text-black font-size-1 m-r-10"} active={true}>{this.props.Menus.first_Menu}</Nav.Link>
                                <Nav.Link href="/register" className={this.props.pageName && this.props.pageName === this.props.Menus.second_Menu ? "btn text-black font-size-1 m-r-10 actives" : "btn text-black font-size-1 m-r-10"}>{this.props.Menus.second_Menu}</Nav.Link>
                                <Nav.Link href="#" className={this.props.pageName && this.props.pageName === this.props.Menus.third_Menu ? "btn text-black font-size-1 m-r-10 actives" : "btn text-black font-size-1 m-r-10"}>{this.props.Menus.third_Menu}</Nav.Link>
                                <Nav.Link href="#" className={this.props.pageName && this.props.pageName === this.props.Menus.fourth_Menu ? "btn text-black font-size-1 m-r-10 actives" : "btn text-black font-size-1 m-r-10"}>{this.props.Menus.fourth_Menu}</Nav.Link>
                                <Nav.Link href="#" className={this.props.pageName && this.props.pageName === this.props.Menus.fifth_Menu ? "btn text-black font-size-1 m-r-10 actives" : "btn text-black font-size-1 m-r-10"}>{this.props.Menus.fifth_Menu}</Nav.Link>
                            </Nav>
                        </div>
                        <WhatsAppIcon className={"color-code font-size-2 m-r-10"} href="#"/>
                        <a className={"header-a color-code"} href="tel:95245 50148">9524550148</a>
                        <ButtonComp
                            btnVariant="success" 
                            btnParentClass={"col-lg-2 col-md-2 col-sm-2 col-xs-2 font-size-1 text-right"}
                            btnClass={"b-r-30 buttons"}
                            btnText={"Make an Appointment"}
                            onClick={this.onAppoint}
                        />

                        <Backto/>

            </Navbar>
             :(
                <Col lg={8}>
                </Col>)
               }

               {
                   this.props.userType === "admin" ? (
                        <Drawer
                        userName = {this.props.UserName}
                        siteName = {this.props.SiteName}
                        />
                   ):(
                       ""
                   )
               }
        </div>

        )
    }
  }

export default Navbars