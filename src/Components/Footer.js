import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "./Blog_Context";


const Footer = () => {

    const data = useContext(BlogContext);
    const navigate = useNavigate();
    return(
        <div className="footer">
            <h1>The Latest</h1>
            <div style={{display:"flex"}}>
                {
                    data.map((ele)=>{
                        return (
                            <div style={{margin:"20px"}} onClick={()=>navigate("/category/"+ele.category+"/"+ele.data[0].id)}>
                                {
                                  <img src={ele.data[0].img} 
                                    width="300px"
                                    height="200px"
                                    alt="footer images"
                                    className="pointer_cursor"
                                  />
                                }
                                <div>
                                    <h2>{ele.data[0].name}</h2>
                                    {ele.data[0].info}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Footer;