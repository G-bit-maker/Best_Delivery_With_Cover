import React from 'react'

//Components

import Header from "./HomeHeader"
import Body from "./HomeBody"


const Login = () => {
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
            <Header/>
            <div className="c-body">
              <Body/>
            </div>
      </div>
    </div>
  )
}

export default Login
