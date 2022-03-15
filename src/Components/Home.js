import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "./Blog_Context";

const Home = () => {

    const navigate = useNavigate();
    const data = useContext(BlogContext);

    return (
        <>
        <div style={{display:"flex"}}>
            <img src={data[0].data[0].img}
                width="800px"
                alt="kerala Nature"
                onClick={()=>navigate("/category/tourism/1")}
                style={{borderRadius:"10px"}}
                className="pointer_cursor"
            />
            <div style={{zIndex:"5",left:"-400px",position:"relative",top:"200px",color:"#ECECEC",fontSize:"30px",fontWeight:"600",height:"50px"}} className="pointer_cursor">{data[0].data[0].name}</div>
            <div style={{position:"relative",right:"10%"}}>
                <div>
                    <img src={data[1].data[0].img}
                width="400px"
                alt="kerala Nature"
                onClick={()=>navigate("/category/fitness/6")}
                style={{borderRadius:"10px"}}
                className="pointer_cursor"
            />
                </div>
                <div>
                    <img src={data[2].data[0].img}
                width="400px"
                alt="kerala Nature"
                onClick={()=>navigate("/category/food/11")}
                style={{borderRadius:"10px"}}
                className="pointer_cursor"
            />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;