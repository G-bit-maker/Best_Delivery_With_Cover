import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../../../routes'

/* import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index' */

const TheBody = () => {
  
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 style={{textAlign:"center"}}>
            This page is under processing...
        </h1>
    </div>
  )
}

export default TheBody
