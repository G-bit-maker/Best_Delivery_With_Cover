import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import Row from 'react-bootstrap/Row'

class MyCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed : true,
            showCard: true,
        };
    }

    setCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    setShowCard = () => {
     this.setState({
        showCard: !this.state.showCard
     })   
    }

    render(){
        return (
          <>
            <CRow>

              <CCol xs="12" sm="12" md="12">
                <CFade in={this.state.showCard}>
                    <CCard 
                    accentColor={this.props.accentColor}
                    color={this.props.color}
                    className={" "+ this.props.ExtraClass}>
                        <CCardHeader>

                            {this.props.cardHeaderText}

                            <div className="card-header-actions">

                                {this.props.setting ?
                                <CLink className="card-header-action">
                                    <CIcon name="cil-settings"/>
                                </CLink>
                                : ""}
                            
                                {this.props.collapseStatus ? 
                                <CLink className="card-header-action" onClick={() => this.setCollapsed(!this.state.collapsed)}>
                                    <CIcon name={this.state.collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                                </CLink>
                                : ""}
                                
                                {this.props.closeStatus ? 
                                <CLink className="card-header-action" onClick={() => this.setShowCard(false)}>
                                    <CIcon name="cil-x-circle" />
                                </CLink>
                                : ""
                                }
                                
                            </div>

                        </CCardHeader>

                        <CCollapse show={this.state.collapsed}>
                            
                            <CCardBody className={"dispalyFlex overflowAuto"} >
                                    {this.props.content}
                            </CCardBody>

                        </CCollapse>

                    </CCard>

                </CFade>

              </CCol>

            </CRow>
          </>
        )
    }
}

export default MyCards
