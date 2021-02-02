import React from 'react'
import MyCards from "../../base/cards/MyCards"
import MediaCard from "../../base/cards/MediaCard"

const TheBody = () => {
  let listData = [
    {
      headName: "Categories",
      cardData:[
        {
          image: "https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg",
          title: "Grocerys",
          subTitle: "A grocery store (North America), grocer or grocery shop (U.K.), ",
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXklo9QSjQ-IrDhNioLRFdpyjOQRN3JsTvmQ&usqp=CAU",
          title: "Electronics",
          subTitle: "Electronics comprises the physics, engineering, technology and applications ",
        },
        {
          image: "https://petapixel.com/assets/uploads/2017/03/product1.jpeg",
          title: "Fation Products",
          subTitle: "Use short, enticing and easy to understand product names.",
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsj0VJMkpkYxtMWea2rrF8wxzu9Zf2MeJrDw&usqp=CAU",
          title: "Medicine Product",
          subTitle: "Electronics comprises the physics, engineering, technology and applications ",
        },
        {
          image: "https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg",
          title: "Electronics",
          subTitle: "Electronics comprises the physics, engineering, technology and applications",
        },
        {
          image: "https://elcopcbonline.com/photos/product/4/176/4.jpg",
          title: "Electronics",
          subTitle: "Electronics comprises the physics, engineering, technology and applications",
        }
      ]
    },{
      headName: "Featured Product",
      cardData:[
        {
          image: "https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg",
          title: "Grocerys",
          subTitle: "A grocery store (North America), grocer or grocery shop (U.K.), ",
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXklo9QSjQ-IrDhNioLRFdpyjOQRN3JsTvmQ&usqp=CAU",
          title: "Electronics",
          subTitle: "Electronics comprises the physics, engineering, technology and applications ",
        },
        {
          image: "https://petapixel.com/assets/uploads/2017/03/product1.jpeg",
          title: "Fation Products",
          subTitle: "Use short, enticing and easy to understand product names.",
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsj0VJMkpkYxtMWea2rrF8wxzu9Zf2MeJrDw&usqp=CAU",
          title: "Medicine Product",
          subTitle: "Electronics comprises the physics, engineering, technology and applications ",
        },
        {
          image: "https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg",
          title: "Electronics",
          subTitle: "Electronics comprises the physics, engineering, technology and applications",
        },
        {
          image: "https://elcopcbonline.com/photos/product/4/176/4.jpg",
          title: "Electronics",
          subTitle: "Electronics comprises the physics, engineering, technology and applications",
        }
      ]
    },{
      headName: "Featured Product",
      cardData:[
        {
          image: "https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg",
          title: "Grocerys",
          subTitle: "A grocery store (North America), grocer or grocery shop (U.K.), ",
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXklo9QSjQ-IrDhNioLRFdpyjOQRN3JsTvmQ&usqp=CAU",
          title: "Electronics",
          subTitle: "Electronics comprises the physics, engineering, technology and applications ",
        },
        {
          image: "https://petapixel.com/assets/uploads/2017/03/product1.jpeg",
          title: "Fation Products",
          subTitle: "Use short, enticing and easy to understand product names.",
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsj0VJMkpkYxtMWea2rrF8wxzu9Zf2MeJrDw&usqp=CAU",
          title: "Medicine Product",
          subTitle: "Electronics comprises the physics, engineering, technology and applications ",
        },
        {
          image: "https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg",
          title: "Electronics",
          subTitle: "Electronics comprises the physics, engineering, technology and applications",
        },
        {
          image: "https://elcopcbonline.com/photos/product/4/176/4.jpg",
          title: "Electronics",
          subTitle: "Electronics comprises the physics, engineering, technology and applications",
        }
      ]
    },
    
  ]

  const colors = [
    "danger",
    "info",
    "primary",
    "success",
    "info",
    "warning",
    "secondary",
    
  ]
  
  return (
    <div className={"mar_top20"}>
      {listData.map((data, id)=>
        <MyCards 
          content={
              data.cardData ? data.cardData.map((mapData, i)=>(
              <MediaCard
                images= {mapData.image}
                Title={mapData.title}
                subTitle={mapData.subTitle}
                //nameBtn1={"Select"}
                colorBtn1={colors[id]}
                className={""}
              />)
            ):""
          }
          ExtraClass = {""}
          color={""}
          //accentColor={colors[id]}
          cardHeaderText={data.headName}
        />
      )}
        
    </div>
  )
}

export default TheBody
