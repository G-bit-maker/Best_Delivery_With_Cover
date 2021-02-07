import React from "react";
import { Button,Form,Navbar,Nav,FormControl, NavDropdown, Row, Col} from 'react-bootstrap';
import { } from "react-router-dom";
import Backto from "../../Commponets/Common/Buttons/BackToTop";
import Drawer from "../../Commponets/Common/Drawer/DrawerComp";
import ButtonComp from "../../Commponets/Common/Buttons/ButtonOut";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Constants from "../../constants";


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
            "NAv BAr"
        </div>

        )
    }
  }

export default Navbars