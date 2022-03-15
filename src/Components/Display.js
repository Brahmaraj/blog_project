import React, { useContext }  from "react";
import {useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "./Blog_Context";

const Display = () => {

    const navigate = useNavigate()
    const data = useContext(BlogContext)
    const {selected} = useParams()
    console.log(data)
    return (
        <>
        <div>
            {/* <Outlet /> */}
            <br />
            <div style={{display:"flex"}}>
            <div style={{width:"70%"}}>
                 <h1 style={{display:"inline"}}>{selected.toUpperCase()}<div className="red_color_line"></div></h1>
                {
                    data.map((element)=>{
                        if(selected===element.category){
                            return (
                                <>
                                {
                                    element.data.map((ele,index)=>{
                                        console.log(ele)
                                       return (
                                       <div className="outer_container pointer_cursor">
                                            <div key={index} onClick={()=>navigate("/category/"+element.category+"/"+ele.id)} className="disp_container">
                                                <div>
                                                    <img src={ele.img}
                                                    alt={ele.name+" image"}
                                                    width="300px"
                                                    className="disp_image"
                                                    />
                                                </div>
                                                <div className="information_container" style={{display:"grid"}}>
                                                    <h3>{ele.name}</h3>
                                                    <p>{ele.display_text}</p>
                                                    <p style={{fontWeight:"800"}}><span style={{fontWeight:"500"}}>Category:</span> {selected.toUpperCase()}</p>
                                                </div>
                                            </div>  
                                            <hr />
                                       </div>) //dynamic routing
                                    })  //will give every para a unique link to navigate and we can catch that and display article accordingly                                                                                                            
                                }
                                
                                </>
                            )
                        }
                        return null;
                    })
                }
                
            </div>
            <div className="top_post">
                <h1 >Top Post<div className="red_color_line"></div></h1><br />
                {
                    data.map((element)=>{
                        if(selected===element.category){
                            return (
                                <>
                                {
                                    element.data.map((ele,index)=>{
                                        console.log(ele)
                                       return (
                                       <div className="pointer_cursor">
                                            <div key={index} onClick={()=>navigate("/category/"+element.category+"/"+ele.id)} className="top_post_container">
                                                <div>
                                                    <img src={ele.img}
                                                    alt={ele.name+" image"}
                                                    width="150px"
                                                    className="disp_image"
                                                    />
                                                </div>
                                                <div className="information_container">
                                                    <h3>{ele.name}</h3>
                                                    <p>{ele.info}</p>
                                                </div>
                                            </div> 
                                            <br /> 
                                            <hr/>
                                            < br />
                                       </div>) //dynamic routing
                                    })  //will give every para a unique link to navigate and we can catch that and display article accordingly                                                                                                            
                                }
                                
                                </>
                            )
                        }
                        return null;
                    })
                    
                }
            </div>
            </div>
        </div>
        </>
    )
}

export default Display;