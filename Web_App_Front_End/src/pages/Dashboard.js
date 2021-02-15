import React from 'react'
import SubNav from "../Commponets/Common/SubNav"
import ProductComponent from "../Commponets/Admin/Productcomponent"
import DashboardComponent from "../Commponets/Admin/DashboardComponent"
import Ordercomponent from "../Commponets/Admin/Ordercomponent"
import UpdateTags from "../Commponets/Admin/UpdateTags"
import Userscomponent from "../Commponets/Admin/Userscomponent"
import Clientscomponent from "../Commponets/Admin/Clientscomponent"
import Raiderscomponent from "../Commponets/Admin/Raiderscomponent"


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
                  <Ordercomponent/>,
                  <UpdateTags/>,
                  <Userscomponent/>,
                  <Clientscomponent/>,
                  <Raiderscomponent/>
              ]}
            />
        </div>
      )
    }
}

export default Dashboard;
