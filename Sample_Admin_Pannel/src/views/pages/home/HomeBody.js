import React from 'react'
import MyCards from "../../base/cards/MyCards"

const listData = [
  {
    headName: "Categories",
    cardData:[
      {
        
      }
    ]
  }
]

const TheBody = () => {
  return (
    <div className={"mar_top20"}>
        <MyCards 
          content={"hello"}
          ExtraClass = {""}
          color={""}
          accentColor={"info"}
          cardHeaderText={"sdfg"}
          setting={true}
          collapseStatus={true}
          closeStatus={true}
        />
    </div>
  )
}

export default TheBody
