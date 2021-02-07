
import {Navbar, Nav, Container, Col, Row, Tabs, Tab } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';

function Header(props) {
    
  const [state,setState] = useState({
    uname:"",
    pass:"",
    tab:0
  })

  const onChange=(e)=>{
    setState({
        ...state,
        [e.target.id]:e.target.value
      })
  }
  useEffect(() => {
    //props.getUserDetails({userId:"5fe6338648dbce25f84702b9"})
  }, []);

  
  const tabChange=(e)=>{
        console.log(e)
    setState({
        ...state,
        tab:e
        })
    }

    
  const subData = [
    {
      id:"dashboard",
      name:"Dashboard",
      url:"/Dashboard"
    },
    {
      id:"product",
      name:"Product",
      url:"/AddProduct",
      subHeader:[
        {
          id:"addProduct",
          name:"Add Product",
          url:"/AddProduct",
          subHeader:[
            {
              id:"Updatetags",
              name:"Update tags",
              url:"/UpdateTags"
            }
          ]
        },
        {
          id:"viewProduct",
          name:"View Product",
          url:"/ViewProduct"
        }
      ]
    },
    {
      id:"user",
      name:"User",
      url:"/ViewUser",
      subHeader:[
        {
          id:"viewUser",
          name:"View User",
          url:"/ViewUser"
        }
      ]
    }
  ]
  
  const subHeaderIteration = array =>{
    return <ul className="sul">
        {array.map((data,i)=>{
          return (<li className="sli" key={i}>
                    <a href={data.url}>
                    {data.name}
                    </a>
                    {data.subHeader ? subHeaderIteration(data.subHeader): ""}
                  </li>)
            })}
            </ul>
  }

    return (
        <>
            <div className="subHeaderCon">
               <ul  className="ul">
                 {subData.map((data,i)=>{
                   return (<li className="li" key={i}>
                            <a href={data.url} className={"a"}>
                              {data.name}
                            </a>
                            
                            {data.subHeader ? subHeaderIteration(data.subHeader) : ""}
                          </li>)
                 })}
                 </ul>
              </div>   
         </>
    );
  }
  
  export default Header
