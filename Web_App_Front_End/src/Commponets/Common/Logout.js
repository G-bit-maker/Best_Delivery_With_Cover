import React from "react";

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        }
    }

    componentDidMount = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("userType");
        window.open("/login", "_self")
    }

    render(){
        return (
            <div>
                Please Wait!..
            </div>
        )
    }
  }

export default Logout