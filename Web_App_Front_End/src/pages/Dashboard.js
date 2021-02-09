import React from 'react'
import SubNav from "../Commponets/Common/SubNav"
import ProductComponent from "../Commponets/Admin/Productcomponent"
import DashboardComponent from "../Commponets/Admin/DashboardComponent"
import Ordercomponent from "../Commponets/Admin/Ordercomponent"


class Dashboard extends React.Component { 
    constructor(){
        super();
        this.state={
            userName: "",
            password: ""
        }
    }

    render(){
      return(
        <div>
            <SubNav
              title={"Admin"}
              container={[
                  <DashboardComponent/>,
                  <ProductComponent/>,
                  <Ordercomponent/>
              ]}
            />
        </div>
      )
    }
}

export default Dashboard;
