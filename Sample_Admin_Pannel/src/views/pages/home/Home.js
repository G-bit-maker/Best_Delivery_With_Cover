import React from 'react'

//Components

import Header from "./HomeHeader"
import Body from "./HomeBody"
const Carousels = React.lazy(() => import('../../../views/base/carousels/MyCarosels'));



const Login = () => {
  return (
    <div className="c-app c-default-layout ">
      <div className="c-wrapper">
            <Header/>
            <div className="c-body carosal">
              <Carousels/>
              <Body/>
            </div>
      </div>
    </div>
  )
}

export default Login
