import dasboardApi from "../api/dasboardApi"

export function createClientDetails(data){
    return function(dispatch){
        dasboardApi.createClientDetailsApi(data)
        .then((res)=>{
            dispatch({type:"CREATE_CLIENT_DETAIL_SUCCESS",payload:res})
        })
    } 
}

export function getClientList(data){
    return function(dispatch){
        /* dasboardApi.getClientListApi(data)
        .then((res)=>{ */

            //TEMP DATA
            let tempdate = [
                {
                    ownerName:"ownerName",
                    shopName:"shopName",
                    address1:"address1",
                    address2:"address2",
                    phoneNo:"phoneNo",
                    email:"email",
                    category:"category",
                    type:"type",
                    brochure:"brochure",
                    gst:"gst"
                },
                {
                    ownerName:"ownerName2",
                    shopName:"shopName2",
                    address1:"address12",
                    address2:"address22",
                    phoneNo:"phoneNo2",
                    email:"email2",
                    category:"category2",
                    type:"type2",
                    brochure:"brochure2",
                    gst:"gst2"
                }
            ]

            dispatch({type:"GET_CLIENT_DETAILS",payload:tempdate})
        //})
    } 
}
