import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "./Blog_Context";

const Article = () => {

    const data = useContext(BlogContext)
    const {selected,selectedID} = useParams()

    return (
        <>
        <div>
        {selected}
        <br />
        {selectedID}
        <br />
        {
            data.map((element)=>{
                if(element.category===selected){
                    return (
                        <>
                        {
                            element.data.map((ele,index)=>{
                                console.log(ele.info)
                                if(String(ele.id)===selectedID){
                                    return (
                                    <p key={index}>
                                        {ele.info}
                                    </p>
                                )
                                }
                                return null;
                            })
                        }
                        </>
                    )
                }
                return null;
            })
        }
        </div>
        </>
    )
}
export default Article;