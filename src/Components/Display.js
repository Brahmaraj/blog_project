import React, { useContext }  from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "./Blog_Context";

const Display = () => {

    const navigate = useNavigate()
    const data = useContext(BlogContext)
    const {selected} = useParams()
    console.log(data)
    return (
        <>
        <div>
            <Outlet />
            
            <br />
            <div>
                {
                    data.map((element)=>{
                        if(selected===element.category){
                            return (
                                <>
                                {
                                    element.data.map((ele,index)=>{
                                       return <p key={index} onClick={()=>navigate("/category/"+element.category+"/"+ele.id)}>{ele.name}</p> //dynamic routing
                                    })  //will give every para a unique link to navigate and we can catch that and display article accordingly                                                                                                            
                                }
                                </>
                            )
                        }
                        return null;
                    })
                }
            </div>
            <div>{selected} display</div>
        </div>
        </>
    )
}

export default Display;